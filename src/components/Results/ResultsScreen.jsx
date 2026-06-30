// ─── ResultsScreen.jsx ────────────────────────────────────────────────────────
// Pantalla de resultados con perfil primario, roles secundarios y reinicio.

import { ROLES } from '../../data/roles.js';
import bgMantenimiento from '../../assets/backgrounds/bg_mantenimiento.png';
import FeedbackForm from './FeedbackForm.jsx';

export default function ResultsScreen({ profile, player, earlyExit, choicesCount, onRestart }) {
  const { primary, secondary, allScores } = profile;
  const primaryRole = ROLES[primary];

  if (!primaryRole) return null;

  const primaryScore = allScores.find((s) => s.id === primary)?.score || 0;

  return (
    <div
      className="vn-container"
      style={{ overflowY: 'auto', overflowX: 'hidden' }}
    >
      {/* Background */}
      <img
        src={bgMantenimiento}
        alt="Resultados"
        className="vn-background"
        style={{ filter: 'brightness(0.25) saturate(0.5)', position: 'fixed' }}
      />
      {/* Overlay */}
      <div
        className="fixed inset-0"
        style={{
          background: 'linear-gradient(160deg, rgba(15,8,2,0.85) 0%, rgba(26,14,5,0.7) 50%, rgba(10,5,1,0.9) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Scrollable content */}
      <div
        className="relative z-10"
        style={{
          minHeight: '100%',
          padding: 'clamp(32px, 6vw, 64px) clamp(16px, 5vw, 32px)',
          paddingBottom: 'max(env(safe-area-inset-bottom, 0px), clamp(32px, 6vw, 64px))',
          paddingTop: 'max(env(safe-area-inset-top, 0px), clamp(32px, 6vw, 56px))',
        }}
      >
        <div className="max-w-xl mx-auto">

          {/* ── Header ── */}
          <div className="text-center mb-6 animate-result-reveal">
            <div className="text-4xl mb-3">☕</div>
            <h1
              className="font-title font-bold"
              style={{
                fontSize: 'clamp(1.4rem, 5vw, 2rem)',
                color: 'var(--color-cafe-200)',
                textShadow: '0 2px 20px rgba(212,148,63,0.45)',
                lineHeight: '1.3',
              }}
            >
              Tu Perfil TI está listo
            </h1>
            <p
              className="font-narrative italic mt-2"
              style={{
                fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                color: 'var(--color-cafe-400)',
                lineHeight: '1.6',
              }}
            >
              {earlyExit
                ? `¡${player.name}, revelaste tu vocación más rápido de lo esperado!`
                : `Basado en tus decisiones en el SysCoffee, ${player.name}`
              }
            </p>

            {earlyExit && (
              <div
                className="inline-flex items-center gap-2 mt-4 rounded-full text-xs font-semibold"
                style={{
                  padding: '6px 16px',
                  background: 'rgba(255,202,40,0.12)',
                  border: '1px solid rgba(255,202,40,0.4)',
                  color: '#ffca28',
                }}
              >
                ⚡ Patrón detectado en {choicesCount} elecciones
              </div>
            )}
          </div>

          {/* ── Primary Role Card ── */}
          <div
            className="result-primary-card animate-result-reveal mb-4"
            style={{ padding: 'clamp(18px, 4vw, 28px)', animationDelay: '0.15s' }}
          >
            <div className="flex items-start gap-4 mb-4">
              {/* Icon */}
              <div
                className="flex-shrink-0 rounded-2xl flex items-center justify-center"
                style={{
                  width: 'clamp(52px, 12vw, 68px)',
                  height: 'clamp(52px, 12vw, 68px)',
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  background: primaryRole.colorBg,
                  border: `2px solid ${primaryRole.colorBorder}`,
                  boxShadow: `0 0 24px ${primaryRole.color}30`,
                  flexShrink: 0,
                }}
              >
                {primaryRole.icon}
              </div>

              <div className="flex-1 min-w-0">
                <span className="role-badge" style={{ fontSize: '0.6rem' }}>
                  ★ Perfil Principal
                </span>
                <h2
                  className="font-title font-bold mt-1.5"
                  style={{
                    fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
                    color: primaryRole.color,
                    lineHeight: '1.2',
                  }}
                >
                  {primaryRole.name}
                </h2>
                <p className="text-xs mt-1" style={{ color: 'rgba(245,230,200,0.45)' }}>
                  {primaryScore} elección{primaryScore !== 1 ? 'es' : ''} registradas
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              className="font-narrative"
              style={{
                fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)',
                color: 'var(--color-cafe-100)',
                lineHeight: '1.8',
                marginBottom: '16px',
              }}
            >
              {primaryRole.description}
            </p>

            {/* Skills */}
            <div style={{ marginBottom: '16px' }}>
              <p
                className="font-semibold uppercase tracking-widest mb-2"
                style={{ fontSize: '0.68rem', color: 'var(--color-cafe-400)' }}
              >
                Competencias clave
              </p>
              <div className="flex flex-wrap gap-2">
                {primaryRole.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full"
                    style={{
                      padding: '4px 12px',
                      fontSize: '0.72rem',
                      background: primaryRole.colorBg,
                      border: `1px solid ${primaryRole.colorBorder}`,
                      color: primaryRole.color,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Career path */}
            <div
              className="rounded-xl"
              style={{
                padding: 'clamp(10px, 2.5vw, 16px)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p className="font-semibold uppercase tracking-widest mb-1.5"
                style={{ fontSize: '0.68rem', color: 'var(--color-cafe-400)' }}>
                Trayectoria profesional
              </p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(245,230,200,0.7)', lineHeight: '1.7' }}>
                {primaryRole.career}
              </p>
            </div>
          </div>

          {/* ── Secondary Roles ── */}
          {secondary.length > 0 && (
            <div className="mb-4 animate-result-reveal" style={{ animationDelay: '0.3s' }}>
              <p
                className="font-semibold uppercase tracking-widest mb-3"
                style={{ fontSize: '0.68rem', color: 'var(--color-cafe-400)' }}
              >
                Áreas de afinidad secundaria
              </p>
              <div className="space-y-2">
                {secondary.map((roleId) => {
                  const role = ROLES[roleId];
                  const score = allScores.find((s) => s.id === roleId)?.score || 0;
                  return (
                    <div
                      key={roleId}
                      className="glass-card flex items-center gap-4"
                      style={{ padding: 'clamp(12px, 3vw, 18px)' }}
                    >
                      <div
                        className="rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          width: '40px',
                          height: '40px',
                          fontSize: '1.2rem',
                          background: role.colorBg,
                          border: `1px solid ${role.colorBorder}`,
                        }}
                      >
                        {role.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate" style={{ color: role.color }}>
                          {role.name}
                        </p>
                        <p className="text-xs" style={{ color: 'rgba(245,230,200,0.4)' }}>
                          {score} elección{score !== 1 ? 'es' : ''}
                        </p>
                      </div>
                      {/* Score pips */}
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {[1, 2, 3, 4, 5].map((pip) => (
                          <div
                            key={pip}
                            className="rounded-full"
                            style={{
                              width: '7px',
                              height: '7px',
                              background: pip <= score ? role.color : 'rgba(255,255,255,0.1)',
                              boxShadow: pip <= score ? `0 0 4px ${role.color}80` : 'none',
                              transition: 'background 0.3s',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Tools ── */}
          <div
            className="glass-card mb-6 animate-result-reveal"
            style={{ padding: 'clamp(14px, 3vw, 20px)', animationDelay: '0.45s' }}
          >
            <p
              className="font-semibold uppercase tracking-widest mb-3"
              style={{ fontSize: '0.68rem', color: 'var(--color-cafe-400)' }}
            >
              🛠 Herramientas del perfil
            </p>
            <div className="flex flex-wrap gap-2">
              {primaryRole.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-medium rounded-lg"
                  style={{
                    padding: '6px 14px',
                    fontSize: '0.78rem',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--color-cafe-200)',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* ── Feedback Form ── */}
          <FeedbackForm player={player} profile={profile} />

          {/* ── Restart ── */}
          <div
            className="text-center animate-result-reveal"
            style={{ animationDelay: '0.6s' }}
          >
            <button
              id="btn-restart"
              onClick={onRestart}
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>↺</span>
              Volver a intentarlo
            </button>
            <p
              className="mt-4"
              style={{ fontSize: '0.72rem', color: 'rgba(245,230,200,0.25)' }}
            >
              SysCoffee · Test Vocacional TI
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
