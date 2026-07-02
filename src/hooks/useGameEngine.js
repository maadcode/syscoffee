// ─── useGameEngine.js ────────────────────────────────────────────────────────
// Hook central que administra el estado global del juego y orquesta
// el motor adaptativo de preguntas.

import { useReducer, useCallback } from 'react';
import {
  initAlgorithmState,
  generateOptions,
  processChoice,
  calculateProfile,
  calculateProgress,
  getQuestion,
} from '../engine/adaptiveAlgorithm.js';

// ── Estado inicial ────────────────────────────────────────────────────────────
const INITIAL_STATE = {
  screen: 'onboarding',    // 'onboarding' | 'game' | 'results'
  player: { name: '', gender: 'M' },
  algorithm: null,         // initAlgorithmState()
  currentOptions: [],      // roles para la pregunta actual
  profile: null,           // resultado final
  dialogueIndex: 0,        // turno de diálogo actual dentro de la pregunta
  showChoices: false,      // mostrar opciones de decisión
  isTransitioning: false,  // animación de transición de fondo
};

// ── Reducer ───────────────────────────────────────────────────────────────────
function gameReducer(state, action) {
  switch (action.type) {

    case 'START_GAME': {
      const algo = initAlgorithmState();
      const options = generateOptions(algo);
      return {
        ...state,
        screen: 'game',
        player: action.player,
        algorithm: algo,
        currentOptions: options,
        dialogueIndex: 0,
        showChoices: false,
        isTransitioning: false,
      };
    }

    case 'ADVANCE_DIALOGUE': {
      const question = getQuestion(state.algorithm.questionIndex);
      const isLastTurn = state.dialogueIndex >= question.dialogues.length - 1;
      if (isLastTurn) {
        return { ...state, showChoices: true };
      }
      return { ...state, dialogueIndex: state.dialogueIndex + 1 };
    }

    case 'MAKE_CHOICE': {
      const newAlgo = processChoice(state.algorithm, action.roleId);

      if (newAlgo.finished) {
        const profile = calculateProfile(newAlgo.scores);
        return {
          ...state,
          algorithm: newAlgo,
          profile,
          screen: 'results',
        };
      }

      // Siguiente pregunta
      const nextOptions = generateOptions(newAlgo);
      const prevBg = getQuestion(state.algorithm.questionIndex).background;
      const nextBg = getQuestion(newAlgo.questionIndex).background;
      const isTransitioning = prevBg !== nextBg;

      return {
        ...state,
        algorithm: newAlgo,
        currentOptions: nextOptions,
        dialogueIndex: 0,
        showChoices: false,
        isTransitioning,
      };
    }

    case 'END_TRANSITION': {
      return { ...state, isTransitioning: false };
    }

    case 'RESTART': {
      return { ...INITIAL_STATE };
    }

    default:
      return state;
  }
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export function useGameEngine() {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  const startGame = useCallback((player) => {
    dispatch({ type: 'START_GAME', player });
  }, []);

  const advanceDialogue = useCallback(() => {
    dispatch({ type: 'ADVANCE_DIALOGUE' });
  }, []);

  const makeChoice = useCallback((roleId) => {
    dispatch({ type: 'MAKE_CHOICE', roleId });
  }, []);

  const endTransition = useCallback(() => {
    dispatch({ type: 'END_TRANSITION' });
  }, []);

  const restart = useCallback(() => {
    dispatch({ type: 'RESTART' });
  }, []);

  // Datos derivados convenientes
  const currentQuestion = state.algorithm
    ? getQuestion(state.algorithm.questionIndex)
    : null;

  const currentDialogue = currentQuestion
    ? currentQuestion.dialogues[state.dialogueIndex]
    : null;

  const progress = state.algorithm
    ? calculateProgress(state.algorithm.appearances)
    : 0;

  return {
    state,
    currentQuestion,
    currentDialogue,
    progress,
    startGame,
    advanceDialogue,
    makeChoice,
    endTransition,
    restart,
  };
}
