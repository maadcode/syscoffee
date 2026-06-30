// ─── CharacterSprite.jsx ──────────────────────────────────────────────────────
// Muestra el sprite PNG del personaje activo con intercambio animado.

import { useState, useEffect } from 'react';

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

export default function CharacterSprite({ character, side = 'left' }) {
  const [visible, setVisible]     = useState(false);
  const [current, setCurrent]     = useState(character);
  const [key, setKey]             = useState(0);

  useEffect(() => {
    if (character !== current) {
      // fade out → swap → fade in
      setVisible(false);
      const t = setTimeout(() => {
        setCurrent(character);
        setKey((k) => k + 1);
        setVisible(true);
      }, 200);
      return () => clearTimeout(t);
    } else {
      setVisible(true);
    }
  }, [character]);

  const src = CHARACTER_MAP[current];
  if (!src) return null;

  return (
    <img
      key={key}
      src={src}
      alt={current}
      className="character-sprite"
      style={{
        [side === 'left' ? 'left' : 'right']: 'clamp(20px, 5vw, 80px)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.2s ease',
        maxWidth: 'clamp(160px, 28vw, 320px)',
      }}
    />
  );
}
