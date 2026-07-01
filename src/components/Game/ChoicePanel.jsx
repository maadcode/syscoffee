// ─── ChoicePanel.jsx ──────────────────────────────────────────────────────────
// Panel de opciones de decisión - DISEÑO ANÓNIMO.
// Los roles NO se muestran al usuario para no influir en su decisión.
// Solo se muestra la descripción de la acción a tomar.

import { useState } from 'react';
import { ROLES } from '../../data/roles.js';
import { CONFIG } from '../../config.js';

// Letras y colores neutros para las opciones (sin relación con los roles)
const OPTION_LABELS = ['A', 'B', 'C'];
const OPTION_NEUTRAL_COLORS = [
  {
    bg: 'rgba(26, 17, 10, 0.92)',
    bgHover: 'rgba(45, 30, 15, 0.94)',
    bgChosen: 'rgba(65, 38, 15, 0.95)',
    border: 'rgba(255, 202, 40, 0.4)',
    borderChosen: 'rgba(255, 202, 40, 0.9)',
    text: 'var(--color-accent-amber)',
  },
  {
    bg: 'rgba(15, 22, 32, 0.92)',
    bgHover: 'rgba(25, 38, 54, 0.94)',
    bgChosen: 'rgba(35, 55, 80, 0.95)',
    border: 'rgba(79, 195, 247, 0.4)',
    borderChosen: 'rgba(79, 195, 247, 0.9)',
    text: 'var(--color-accent-blue)',
  },
  {
    bg: 'rgba(16, 26, 18, 0.92)',
    bgHover: 'rgba(28, 44, 32, 0.94)',
    bgChosen: 'rgba(40, 65, 45, 0.95)',
    border: 'rgba(105, 240, 174, 0.4)',
    borderChosen: 'rgba(105, 240, 174, 0.9)',
    text: 'var(--color-accent-green)',
  },
];

export default function ChoicePanel({ options, question, playerName, onChoice }) {
  const [chosen, setChosen] = useState(null);

  const handleChoice = (roleId, index) => {
    if (chosen !== null) return; // evitar doble clic
    setChosen(index);
    setTimeout(() => onChoice(roleId), 480);
  };

  return (
    <div className="space-y-3 animate-fade-in-up">
      {/* Prompt */}
      <div className="text-center mb-3">
        <p
          className="font-narrative italic text-base sm:text-lg"
          style={{ color: 'var(--color-cafe-100)' }}
        >
          ¿Cuál es tu enfoque, <span style={{ color: 'var(--color-accent-amber)', fontWeight: 700, fontStyle: 'normal' }}>{playerName}</span>?
        </p>
      </div>

      {/* Choice cards - anónimas, en contenedor con scroll si no caben */}
      <div className="choice-panel-scroll space-y-3">
        {options.map((roleId, index) => {
          const action = question.roleActions[roleId];
          const label = OPTION_LABELS[index] ?? String(index + 1);
          const neutral = OPTION_NEUTRAL_COLORS[index] ?? OPTION_NEUTRAL_COLORS[0];
          const isChosen = chosen === index;
          const isDisabled = chosen !== null;

          return (
            <button
              key={`${roleId}-${index}`}
              id={`choice-option-${index}`}
              onClick={() => handleChoice(roleId, index)}
              disabled={isDisabled}
              className="choice-card w-full text-left"
              style={{
                animation: `choice-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 110}ms both`,
                opacity: isDisabled && !isChosen ? 0.38 : 1,
                transform: isChosen ? 'scale(1.01) translateX(4px)' : undefined,
                transition: 'opacity 0.3s ease, border-color 0.25s, background 0.25s, transform 0.25s',
                // Custom CSS variables for hover/active states
                '--choice-border': isChosen ? neutral.borderChosen : neutral.border,
                '--choice-bg': isChosen ? neutral.bgChosen : neutral.bg,
                '--choice-bg-hover': isChosen ? neutral.bgChosen : neutral.bgHover,
                '--choice-border-hover': neutral.borderChosen,
                '--choice-text': neutral.text,
              }}
            >
              <div className="flex items-start gap-4">
                {/* Option letter badge */}
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold mt-0.5"
                  style={{
                    background: isChosen ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)',
                    border: `1.5px solid ${isChosen ? neutral.text : neutral.border}`,
                    color: isChosen ? '#ffffff' : neutral.text,
                    boxShadow: isChosen ? `0 0 12px ${neutral.text}50` : 'none',
                    transition: 'all 0.25s ease',
                    fontFamily: 'var(--font-title)',
                  }}
                >
                  {isChosen ? '✓' : label}
                </div>

                {/* Action description */}
                <div className="flex-1 min-w-0 py-0.5">
                  {/* Etiqueta de Rol (Temporal para depuración) */}
                  {CONFIG.SHOW_DEBUG_ROLES && (
                    <div
                      className="inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded mb-1.5"
                      style={{
                        backgroundColor: ROLES[roleId]?.colorBg || 'rgba(255, 255, 255, 0.1)',
                        color: ROLES[roleId]?.color || 'var(--color-cafe-200)',
                        border: `1px solid ${ROLES[roleId]?.colorBorder || 'rgba(255, 255, 255, 0.2)'}`,
                        fontFamily: 'var(--font-title)',
                      }}
                    >
                      🔍 [DEBUG] Rol: {roleId} - {ROLES[roleId]?.name || roleId}
                    </div>
                  )}
                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{
                      color: isChosen ? 'var(--color-cafe-50)' : 'var(--color-cafe-100)',
                      fontFamily: 'var(--font-narrative)',
                      lineHeight: '1.65',
                      transition: 'color 0.25s',
                    }}
                  >
                    {action}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Keyboard hint */}
      {chosen === null && (
        <p
          className="text-center text-xs animate-fade-in mt-1"
          style={{ color: 'rgba(245,230,200,0.5)' }}
        >
          Haz clic en la opción que mejor describe cómo actuarías
        </p>
      )}
    </div>
  );
}
