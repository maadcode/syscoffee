// ─── Background.jsx ───────────────────────────────────────────────────────────
// Gestiona el intercambio de fondos por fase con transición de fundido.

import { useEffect, useState } from 'react';

import bgAnalisis     from '../../assets/backgrounds/bg_analisis.png';
import bgDesarrollo   from '../../assets/backgrounds/bg_desarrollo.png';
import bgMantenimiento from '../../assets/backgrounds/bg_mantenimiento.png';

const BG_MAP = {
  analysis:    bgAnalisis,
  development: bgDesarrollo,
  maintenance: bgMantenimiento,
};

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
        src={BG_MAP[current] || bgAnalisis}
        alt={`Escenario ${current}`}
        className="vn-background"
        style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.8s ease' }}
      />
      {/* Next background (fade in) */}
      {next && (
        <img
          src={BG_MAP[next] || bgAnalisis}
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
