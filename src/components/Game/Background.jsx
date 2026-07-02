// ─── Background.jsx ───────────────────────────────────────────────────────────
// Gestiona el intercambio de fondos por escenario con transición de fundido.
// 7 fondos temáticos que representan diferentes momentos del café.

import { useEffect, useState } from 'react';

import bgDiaConcurrido    from '../../assets/backgrounds/bg_dia_concurrido.jpg';
import bgDiaQuejas        from '../../assets/backgrounds/bg_dia_quejas.jpg';
import bgDiaTranquilo     from '../../assets/backgrounds/bg_dia_tranquilo.jpg';
import bgNocheTranquila   from '../../assets/backgrounds/bg_noche_tranquila.jpg';
import bgNocheEstresante  from '../../assets/backgrounds/bg_noche_estresante.jpg';
import bgDiaInnovacion    from '../../assets/backgrounds/bg_dia_innovacion.jpg';
import bgCafeCreciendo    from '../../assets/backgrounds/bg_cafe_creciendo.jpg';

const BG_MAP = {
  dia_concurrido:    bgDiaConcurrido,
  dia_quejas:        bgDiaQuejas,
  dia_tranquilo:     bgDiaTranquilo,
  noche_tranquila:   bgNocheTranquila,
  noche_estresante:  bgNocheEstresante,
  dia_innovacion:    bgDiaInnovacion,
  cafe_creciendo:    bgCafeCreciendo,
};

// Fallback al primer fondo disponible
const DEFAULT_BG = bgDiaTranquilo;

export default function Background({ phase }) {
  const [current, setCurrent] = useState(phase);
  const [next, setNext]       = useState(null);
  const [fading, setFading]   = useState(false);

  useEffect(() => {
    if (phase !== current) {
      setNext(phase);
      setFading(true);
      const t = setTimeout(() => {
        setCurrent(phase);
        setNext(null);
        setFading(false);
      }, 800);
      return () => clearTimeout(t);
    }
  }, [phase]);

  return (
    <>
      {/* Current background */}
      <img
        src={BG_MAP[current] || DEFAULT_BG}
        alt={`Escenario ${current}`}
        className="vn-background"
        style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.8s ease' }}
      />
      {/* Next background (fade in) */}
      {next && (
        <img
          src={BG_MAP[next] || DEFAULT_BG}
          alt={`Escenario ${next}`}
          className="vn-background"
          style={{ opacity: fading ? 1 : 0, transition: 'opacity 0.8s ease' }}
        />
      )}
      {/* Atmospheric overlay */}
      <div className="vn-overlay" />
    </>
  );
}
