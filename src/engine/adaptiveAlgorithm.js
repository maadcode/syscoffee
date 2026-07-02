// ─── adaptiveAlgorithm.js ────────────────────────────────────────────────────
// Motor adaptativo de selección de opciones para el test vocacional.
// Implementa: persistencia de selección, selección aleatoria priorizada,
// control de apariciones mínimas y salida temprana.

import { ROLE_IDS } from '../data/roles.js';
import { QUESTIONS } from '../data/questions.js';
import { CONFIG } from '../config.js';

// ── Constantes de configuración ──────────────────────────────────────────────
export const TOTAL_ROLES = ROLE_IDS.length;                          // 11
export const MIN_APPEARANCES_PER_ROLE = 3;                           // cada rol debe aparecer al menos 3 veces
export const EARLY_EXIT_THRESHOLD = 5;                               // consecutivas para salida temprana
export const OPTIONS_PER_QUESTION = CONFIG.OPTIONS_PER_QUESTION;     // configurable vía env
export const TOTAL_QUESTIONS = Math.ceil(
  (TOTAL_ROLES * MIN_APPEARANCES_PER_ROLE) / OPTIONS_PER_QUESTION
);  // mínimo de preguntas estimado (~11 con 3 opciones)


/**
 * Inicializa el estado del algoritmo adaptativo.
 */
export function initAlgorithmState() {
  const scores = {};
  const appearances = {};
  ROLE_IDS.forEach((id) => {
    scores[id] = 0;
    appearances[id] = 0;
  });
  return {
    scores,
    appearances,
    lastChosenRole: null,
    consecutiveCount: 0,
    questionIndex: 0,
    currentOptions: [],
    finished: false,
    earlyExit: false,
    totalQuestions: TOTAL_QUESTIONS,
    optionsPerQuestion: OPTIONS_PER_QUESTION,
  };
}

/**
 * Genera las opciones de roles para la pregunta actual.
 * Prioriza roles con menos apariciones para garantizar cobertura uniforme.
 * @param {object} state - Estado actual del algoritmo
 * @returns {string[]} Array de roleIds para mostrar como opciones
 */
export function generateOptions(state) {
  const { lastChosenRole, appearances, optionsPerQuestion } = state;

  // Calcular cuántas opciones mostrar
  const targetCount = Math.min(optionsPerQuestion, ROLE_IDS.length);

  const options = [];

  // Opción 1: rol previamente elegido (persistencia), si existe
  if (lastChosenRole) {
    options.push(lastChosenRole);
  }

  // Ordenar roles restantes por apariciones (menor primero) para priorizar
  // los que necesitan más exposición
  const remaining = ROLE_IDS
    .filter((id) => !options.includes(id))
    .map((id) => ({ id, count: appearances[id] }))
    .sort((a, b) => a.count - b.count);

  // Agrupar por cantidad de apariciones para hacer shuffle dentro de cada grupo
  const groups = {};
  remaining.forEach(({ id, count }) => {
    if (!groups[count]) groups[count] = [];
    groups[count].push(id);
  });

  // Agregar roles priorizados (menos apariciones primero) con shuffle dentro de grupo
  const sortedCounts = Object.keys(groups).map(Number).sort((a, b) => a - b);
  for (const count of sortedCounts) {
    if (options.length >= targetCount) break;
    const group = [...groups[count]];
    shuffleArray(group);
    for (const id of group) {
      if (options.length >= targetCount) break;
      options.push(id);
    }
  }

  // Actualizar contador de apariciones
  options.forEach((id) => {
    state.appearances[id]++;
  });

  return options;
}

/**
 * Procesa la elección del usuario y actualiza el estado del algoritmo.
 * @param {object} state   - Estado actual del algoritmo
 * @param {string} roleId  - Rol elegido por el usuario
 * @returns {object}       - Estado actualizado + flags de salida
 */
export function processChoice(state, roleId) {
  const newState = { ...state };
  newState.scores = { ...state.scores };
  newState.appearances = { ...state.appearances };

  // Incrementar puntuación del rol elegido
  newState.scores[roleId]++;

  // Actualizar contador consecutivo
  if (roleId === state.lastChosenRole) {
    newState.consecutiveCount = state.consecutiveCount + 1;
  } else {
    newState.consecutiveCount = 1;
  }

  newState.lastChosenRole = roleId;
  newState.questionIndex = state.questionIndex + 1;

  // Verificar salida temprana (5 consecutivas del mismo rol)
  if (newState.consecutiveCount >= EARLY_EXIT_THRESHOLD) {
    newState.finished = true;
    newState.earlyExit = true;
    return newState;
  }

  // Verificar si todos los roles han alcanzado el mínimo de apariciones
  const allRolesCovered = ROLE_IDS.every(
    (id) => newState.appearances[id] >= MIN_APPEARANCES_PER_ROLE
  );

  if (allRolesCovered) {
    newState.finished = true;
    newState.earlyExit = false;
  }

  return newState;
}

/**
 * Calcula el progreso del juego basado en la cobertura de roles.
 * @param {object} appearances - Mapa roleId → apariciones
 * @returns {number} Progreso de 0 a 100
 */
export function calculateProgress(appearances) {
  const totalNeeded = TOTAL_ROLES * MIN_APPEARANCES_PER_ROLE;
  const totalAchieved = ROLE_IDS.reduce((sum, id) => {
    return sum + Math.min(appearances[id], MIN_APPEARANCES_PER_ROLE);
  }, 0);
  return Math.min((totalAchieved / totalNeeded) * 100, 100);
}

/**
 * Calcula el perfil del usuario basado en los puntajes finales.
 * @param {object} scores - Mapa roleId → puntuación
 * @returns {{ primary: string, secondary: string[], allScores: {id,score}[] }}
 */
export function calculateProfile(scores) {
  const sorted = Object.entries(scores)
    .map(([id, score]) => ({ id, score }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  const primary = sorted[0]?.id || null;
  const secondary = sorted
    .slice(1, 3)
    .filter(({ score }) => score > 0)
    .map(({ id }) => id);

  return { primary, secondary, allScores: sorted };
}

/**
 * Devuelve la pregunta actual basada en el índice.
 * Recicla preguntas con módulo si el índice excede el banco.
 * @param {number} index
 */
export function getQuestion(index) {
  return QUESTIONS[index % QUESTIONS.length];
}

/**
 * Fisher-Yates shuffle in place.
 */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
