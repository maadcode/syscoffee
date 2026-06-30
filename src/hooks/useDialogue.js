// ─── useDialogue.js ──────────────────────────────────────────────────────────
// Hook para el efecto typewriter del texto de diálogo.

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook de efecto typewriter para texto narrativo.
 * @param {string} text       - Texto completo a mostrar
 * @param {number} speed      - Velocidad en ms por caracter (default 28ms)
 * @returns {{ displayed, isDone, skip }}
 */
export function useDialogue(text, speed = 28) {
  const [displayed, setDisplayed] = useState('');
  const [isDone, setIsDone] = useState(false);
  const indexRef = useRef(0);
  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  // Resetear cuando el texto cambia
  useEffect(() => {
    clearTimer();
    setDisplayed('');
    setIsDone(false);
    indexRef.current = 0;

    if (!text) {
      setIsDone(true);
      return;
    }

    const type = () => {
      if (indexRef.current < text.length) {
        indexRef.current++;
        setDisplayed(text.slice(0, indexRef.current));
        timerRef.current = setTimeout(type, speed);
      } else {
        setIsDone(true);
      }
    };

    timerRef.current = setTimeout(type, speed);

    return clearTimer;
  }, [text, speed]);

  // Saltar animación: mostrar texto completo inmediatamente
  const skip = useCallback(() => {
    clearTimer();
    setDisplayed(text || '');
    setIsDone(true);
    indexRef.current = text?.length || 0;
  }, [text]);

  return { displayed, isDone, skip };
}
