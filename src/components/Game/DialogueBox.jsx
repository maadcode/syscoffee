// ─── DialogueBox.jsx ──────────────────────────────────────────────────────────
// Caja de diálogo estilo RPG/Comic con retrato de personaje integrado.
// Resuelve el problema de los personajes saliendo detrás de los textos y 
// enmascara los fondos sólidos de las imágenes generadas por IA.

import { useEffect } from 'react';
import { useDialogue } from '../../hooks/useDialogue.js';

import charGerente from '../../assets/characters/char_gerente.png';
import charBarista from '../../assets/characters/char_barista.png';
import charDev     from '../../assets/characters/char_dev.png';
import charPm      from '../../assets/characters/char_pm.png';
import charTecnico from '../../assets/characters/char_tecnico.png';

const CHARACTER_MAP = {
  gerente: charGerente,
  barista: charBarista,
  dev:     charDev,
  pm:      charPm,
  tecnico: charTecnico,
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

  const characterImg = CHARACTER_MAP[dialogue.character];
  const isLeft = dialogue.side === 'left';

  // Desplazamiento dinámico del nombre según la posición del retrato
  const nameContainerPadding = isLeft 
    ? '14px 18px 0 clamp(84px, 20vw, 112px)' 
    : '14px clamp(84px, 20vw, 112px) 0 18px';

  const nameAlign = isLeft ? 'left' : 'right';

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
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(212, 148, 63, 0.2)',
            zIndex: 30,
          }}
        >
          <img
            src={characterImg}
            alt={dialogue.characterName}
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center 10%', // Asegura enfocar el rostro
            }}
          />
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
