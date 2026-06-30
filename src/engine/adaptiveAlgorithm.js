// ─── adaptiveAlgorithm.js ────────────────────────────────────────────────────
// Motor adaptativo de selección de opciones para el test vocacional.
// Implementa: persistencia de selección, selección aleatoria con límite
// de apariciones, control del pool y salida temprana.

import { ROLE_IDS } from '../data/roles.js';
import { QUESTIONS } from '../data/questions.js';

// ── Constantes de configuración ──────────────────────────────────────────────
export const TOTAL_ROLES = ROLE_IDS.length;                          // 11
export const MAX_APPEARANCES = 5;                                    // máximo por rol
export const EARLY_EXIT_THRESHOLD = 5;                               // consecutivas para salida
export const OPTIONS_PER_QUESTION = 3;                               // opciones por pregunta (N)
export const TOTAL_QUESTIONS = Math.ceil((TOTAL_ROLES - 1) / (OPTIONS_PER_QUESTION - 1)); // Cálculo dinámico exacto


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
 * @param {object} state - Estado actual del algoritmo
 * @returns {string[]} Array de roleIds para mostrar como opciones
 */
export function generateOptions(state) {
  const { lastChosenRole, appearances, questionIndex, totalQuestions, optionsPerQuestion } = state;
  const isLastQuestion = questionIndex === totalQuestions - 1;

  // Roles elegibles: apariciones < MAX_APPEARANCES
  const eligible = ROLE_IDS.filter((id) => appearances[id] < MAX_APPEARANCES);

  // Calcular cuántas opciones mostrar
  let targetCount;
  if (isLastQuestion) {
    // En la última pregunta, mostramos los roles que nunca han aparecido más la persistencia
    const unpresented = ROLE_IDS.filter((id) => appearances[id] === 0);
    targetCount = unpresented.length;
    if (lastChosenRole && eligible.includes(lastChosenRole)) {
      targetCount += 1;
    }
    // Asegurarnos de que no exceda las opciones normales por pregunta
    targetCount = Math.min(optionsPerQuestion, targetCount);
  } else {
    targetCount = Math.min(optionsPerQuestion, eligible.length);
  }

  const options = [];

  // Opción 1: rol previamente elegido (persistencia), si existe y es elegible
  if (lastChosenRole && eligible.includes(lastChosenRole)) {
    options.push(lastChosenRole);
  }

  // Priorizar roles que no han sido presentados aún (apariciones === 0)
  const unpresentedPool = eligible.filter((id) => appearances[id] === 0 && !options.includes(id));
  shuffleArray(unpresentedPool);

  while (options.length < targetCount && unpresentedPool.length > 0) {
    options.push(unpresentedPool.pop());
  }

  // Si aún necesitamos más opciones, las tomamos del pool de presentados
  if (options.length < targetCount) {
    const presentedPool = eligible.filter((id) => appearances[id] > 0 && !options.includes(id));
    shuffleArray(presentedPool);
    while (options.length < targetCount && presentedPool.length > 0) {
      options.push(presentedPool.pop());
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

  // Verificar salida temprana
  if (newState.consecutiveCount >= EARLY_EXIT_THRESHOLD) {
    newState.finished = true;
    newState.earlyExit = true;
    return newState;
  }

  // Verificar fin de preguntas
  if (newState.questionIndex >= state.totalQuestions) {
    newState.finished = true;
    newState.earlyExit = false;
  }

  return newState;
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
 * @param {number} index
 */
export function getQuestion(index) {
  return QUESTIONS[Math.min(index, QUESTIONS.length - 1)];
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
