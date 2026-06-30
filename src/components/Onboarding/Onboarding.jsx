// ─── Onboarding.jsx ──────────────────────────────────────────────────────────
import { useState } from 'react';
import NameForm from './NameForm.jsx';
import AvatarSelector from './AvatarSelector.jsx';

import bgAnalisis from '../../assets/backgrounds/bg_analisis.png';

export default function Onboarding({ onStart }) {
  const [step, setStep] = useState(1); // 1: nombre, 2: avatar
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);

  const handleNameSubmit = (validName) => {
    setName(validName);
    setStep(2);
  };

  const handleAvatarSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleStart = () => {
    if (gender) {
      onStart({ name: name.trim(), gender });
    }
  };

  return (
    <div className="vn-container flex items-center justify-center overflow-y-auto">
      {/* Background */}
      <img
        src={bgAnalisis}
        alt="SysCoffee"
        className="vn-background animate-bg-enter"
        style={{ filter: 'brightness(0.35) saturate(0.7)' }}
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(107,63,26,0.25) 0%, rgba(15,8,2,0.7) 70%)',
        }}
      />

      {/* Scrollable content area */}
      <div
        className="relative z-10 w-full flex flex-col items-center justify-center"
        style={{
          minHeight: '100%',
          padding: 'clamp(24px, 5vw, 64px) clamp(16px, 5vw, 40px)',
          paddingTop: 'max(env(safe-area-inset-top, 0px), clamp(24px, 5vw, 48px))',
          paddingBottom: 'max(env(safe-area-inset-bottom, 0px), clamp(24px, 5vw, 48px))',
        }}
      >
        <div className="w-full max-w-md animate-fade-in-up">

          {/* ── Logo / Title ── */}
          <div className="text-center mb-7 sm:mb-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-3">
              <span className="text-3xl sm:text-4xl">☕</span>
              <h1
                className="font-title font-bold tracking-wide"
                style={{
                  fontSize: 'clamp(1.75rem, 7vw, 3rem)',
                  color: 'var(--color-cafe-200)',
                  textShadow: '0 2px 24px rgba(212,148,63,0.5)',
                }}
              >
                SysCoffee
              </h1>
              <span className="text-3xl sm:text-4xl">☕</span>
            </div>

            <p
              className="font-narrative italic"
              style={{
                fontSize: 'clamp(0.8rem, 3vw, 0.95rem)',
                color: 'var(--color-cafe-300)',
              }}
            >
              Test Vocacional · Novela Visual Interactiva
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-px flex-1 max-w-[80px]"
                style={{ background: 'linear-gradient(to right, transparent, var(--color-cafe-500))' }} />
              <span style={{ color: 'var(--color-cafe-400)', fontSize: '0.7rem' }}>✦</span>
              <div className="h-px flex-1 max-w-[80px]"
                style={{ background: 'linear-gradient(to left, transparent, var(--color-cafe-500))' }} />
            </div>
          </div>

          {/* ── Card ── */}
          <div
            className="dialog-box"
            style={{ padding: 'clamp(20px, 5vw, 36px)' }}
          >
            {step === 1 ? (
              <NameForm onSubmit={handleNameSubmit} />
            ) : (
              <AvatarSelector
                name={name}
                selected={gender}
                onSelect={handleAvatarSelect}
                onStart={handleStart}
              />
            )}
          </div>

          {/* ── Step dots ── */}
          <div className="flex justify-center gap-2 mt-5">
            {[1, 2].map((s) => (
              <div
                key={s}
                className="rounded-full transition-all duration-400"
                style={{
                  width: step === s ? '28px' : '8px',
                  height: '8px',
                  background: step === s
                    ? 'var(--color-cafe-300)'
                    : 'rgba(255,255,255,0.18)',
                  boxShadow: step === s ? '0 0 10px rgba(212,148,63,0.6)' : 'none',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
