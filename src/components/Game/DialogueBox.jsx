// ─── DialogueBox.jsx ──────────────────────────────────────────────────────────
// Caja de diálogo estilo RPG/Comic con retrato de personaje integrado.
// Resuelve el problema de los personajes saliendo detrás de los textos y 
// enmascara los fondos sólidos de las imágenes generadas por IA.

import { useEffect } from 'react';
import { useDialogue } from '../../hooks/useDialogue.js';

import charGerenteAngustiado from '../../assets/characters/char_gerente_angustiado.png';
import charGerenteAlegre     from '../../assets/characters/char_gerente_alegre.png';
import charBaristaAlegre     from '../../assets/characters/char_barista_alegre.png';
import charBaristaPreocupada from '../../assets/characters/char_barista_preocupada.png';
import charPedroNeutral      from '../../assets/characters/char_pedro_neutral.png';
import charPedroAlegre       from '../../assets/characters/char_pedro_alegre.png';
import charLuisSerio         from '../../assets/characters/char_luis_serio.png';
import charLuisPreocupado    from '../../assets/characters/char_luis_preocupado.png';
import charValeriaSeria      from '../../assets/characters/char_valeria_seria.png';
import charValeriaAlegre     from '../../assets/characters/char_valeria_alegre.png';
import charCarmenAlegre      from '../../assets/characters/char_carmen_alegre.png';
import charLucasAlegre       from '../../assets/characters/char_lucas_alegre.png';

const CHARACTER_MAP = {
  gerente: {
    preocupado: charGerenteAngustiado,
    angustiado: charGerenteAngustiado,
    alegre:     charGerenteAlegre,
  },
  barista: {
    alegre:     charBaristaAlegre,
    preocupada: charBaristaPreocupada,
  },
  soporte_isp: {
    neutral:    charPedroNeutral,
    alegre:     charPedroAlegre,
  },
  contador: {
    serio:      charLuisSerio,
    preocupado: charLuisPreocupado,
  },
  soporte_cloud: {
    seria:      charValeriaSeria,
    alegre:     charValeriaAlegre,
  },
  cliente_carmen: {
    alegre:     charCarmenAlegre,
  },
  cliente_lucas: {
    alegre:     charLucasAlegre,
  },
};

function injectName(text, playerName) {
  return text?.replace(/\{name\}/g, playerName) || '';
}

export default function DialogueBox({ dialogue, playerName, onAdvance }) {
  if (!dialogue) return null;

  const fullText = injectName(dialogue.text, playerName);
  const { displayed, isDone, skip } = useDialogue(fullText, 24);

  const handleClick = () => {
    if (!isDone) {
      skip();
    } else {
      onAdvance();
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        handleClick();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isDone]);

  // Resolve portrait image dynamically based on character and mood
  const charData = CHARACTER_MAP[dialogue.character];
  const characterImg = charData
    ? (charData[dialogue.mood] || Object.values(charData)[0])
    : null;

  const isLeft = dialogue.side === 'left';

  // Desplazamiento dinámico del nombre según la posición del retrato
  const nameContainerPadding = isLeft 
    ? '14px 18px 0 clamp(84px, 20vw, 112px)' 
    : '14px clamp(84px, 20vw, 112px) 0 18px';

  const nameAlign = isLeft ? 'left' : 'right';

  // Calculate mood effects & badge
  let moodFilter = 'none';
  let moodBadge = null;
  let borderGlow = 'none';
  let badgeColor = 'rgba(0,0,0,0.8)';

  switch (dialogue.mood) {
    case 'alegre':
      moodFilter = 'brightness(1.08) contrast(1.05) saturate(1.1)';
      moodBadge = '✨';
      borderGlow = '0 0 12px rgba(212, 148, 63, 0.6)';
      badgeColor = '#d4943f';
      break;
    case 'preocupado':
    case 'preocupada':
    case 'angustiado':
      moodFilter = 'brightness(0.92) contrast(0.98) saturate(0.85) hue-rotate(10deg)';
      moodBadge = '💧';
      borderGlow = '0 0 12px rgba(100, 160, 200, 0.5)';
      badgeColor = '#7ec8e3';
      break;
    case 'serio':
    case 'seria':
      moodFilter = 'brightness(0.98) contrast(1.02)';
      moodBadge = '📝';
      borderGlow = 'none';
      badgeColor = 'var(--color-cafe-400)';
      break;
    case 'neutral':
    default:
      moodFilter = 'none';
      moodBadge = '💬';
      borderGlow = 'none';
      badgeColor = 'var(--color-cafe-500)';
      break;
  }

  return (
    <div
      className="dialog-box cursor-pointer select-none animate-fade-in-up"
      onClick={handleClick}
      role="button"
      aria-label="Avanzar diálogo"
      style={{ minHeight: '120px' }}
    >
      {/* Retrato flotante de Personaje (Estilo Viñeta de Cómic Circular) */}
      {characterImg && (
        <div
          className="absolute rounded-full border-3 shadow-2xl overflow-hidden animate-char-enter"
          style={{
            borderColor: 'var(--color-cafe-300)',
            backgroundColor: 'var(--color-cafe-800)',
            width: 'clamp(68px, 16vw, 92px)',
            height: 'clamp(68px, 16vw, 92px)',
            top: 'clamp(-36px, -8vw, -28px)',
            [isLeft ? 'left' : 'right']: 'clamp(12px, 3vw, 24px)',
            boxShadow: `0 8px 24px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(212, 148, 63, 0.2), ${borderGlow}`,
            zIndex: 30,
          }}
        >
          <img
            src={characterImg}
            alt={dialogue.characterName}
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center 10%', // Asegura enfocar el rostro
              filter: moodFilter,
              transition: 'filter 0.3s ease',
            }}
          />
          {moodBadge && (
            <div
              className="absolute flex items-center justify-center rounded-full text-xs font-bold border"
              style={{
                width: '20px',
                height: '20px',
                bottom: '2px',
                right: '2px',
                backgroundColor: 'rgba(15, 8, 2, 0.95)',
                borderColor: badgeColor,
                boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
                zIndex: 31,
                fontSize: '0.65rem',
              }}
            >
              {moodBadge}
            </div>
          )}
        </div>
      )}

      {/* Name tag */}
      <div style={{ padding: nameContainerPadding, textAlign: nameAlign }}>
        <span className="dialog-name-tag">
          {dialogue.characterName}
        </span>
      </div>

      {/* Dialogue text */}
      <div 
        style={{ 
          padding: isLeft 
            ? '10px 20px 18px clamp(20px, 5vw, 28px)' 
            : '10px clamp(20px, 5vw, 28px) 18px 20px',
          minHeight: 'clamp(68px, 14vw, 88px)' 
        }}
      >
        <p className="narrative-text">
          {displayed}
          {!isDone && <span className="typewriter-cursor" />}
        </p>
      </div>

      {/* Advance indicator */}
      {isDone && (
        <div
          className="flex items-center justify-end gap-1 animate-pulse-glow"
          style={{
            padding: '0 18px 12px',
            color: 'var(--color-cafe-300)',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
          }}
        >
          <span>Continuar</span>
          <span style={{ animation: 'sparkle 1.2s ease-in-out infinite' }}>▶</span>
        </div>
      )}
    </div>
  );
}
