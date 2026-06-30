// ─── NameForm.jsx ─────────────────────────────────────────────────────────────
import { useState, useRef } from 'react';

export default function NameForm({ onSubmit }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const validate = () => {
    const trimmed = value.trim();
    if (!trimmed) {
      setError('Por favor ingresa tu nombre para comenzar.');
      triggerShake();
      return false;
    }
    if (trimmed.length < 2) {
      setError('El nombre debe tener al menos 2 caracteres.');
      triggerShake();
      return false;
    }
    if (trimmed.length > 30) {
      setError('El nombre no puede superar los 30 caracteres.');
      triggerShake();
      return false;
    }
    setError('');
    return true;
  };

  const triggerShake = () => {
    const el = inputRef.current;
    if (el) {
      el.classList.remove('animate-shake');
      void el.offsetWidth;
      el.classList.add('animate-shake', 'error');
      setTimeout(() => el.classList.remove('animate-shake'), 500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSubmit(value.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Header */}
      <div className="text-center mb-6">
        <span className="text-4xl block mb-3">🏪</span>
        <h2
          className="font-title font-semibold"
          style={{ fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', color: 'var(--color-cafe-200)' }}
        >
          ¡Bienvenido al SysCoffee!
        </h2>
        <p
          className="font-narrative mt-2 leading-relaxed"
          style={{ fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', color: 'var(--color-cafe-400)', lineHeight: '1.7' }}
        >
          La cafetería está en crisis y te necesitan.<br />
          Antes de comenzar, ¿cómo te llamas?
        </p>
      </div>

      {/* Input */}
      <div className="mb-5">
        <label
          htmlFor="player-name"
          className="block text-sm font-medium mb-2"
          style={{ color: 'var(--color-cafe-300)' }}
        >
          Tu nombre
        </label>
        <input
          id="player-name"
          ref={inputRef}
          type="text"
          className="cafe-input"
          placeholder="Ej: María, Juan, Alex..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) {
              setError('');
              inputRef.current?.classList.remove('error');
            }
          }}
          autoComplete="off"
          maxLength={30}
        />
        {/* Error message */}
        <div style={{ minHeight: '20px', marginTop: '6px' }}>
          {error && (
            <p className="text-xs animate-fade-in flex items-center gap-1" style={{ color: '#f87171' }}>
              <span>⚠</span>
              <span>{error}</span>
            </p>
          )}
        </div>
      </div>

      <button
        id="btn-continue-name"
        type="submit"
        className="btn-primary w-full flex items-center justify-center gap-2"
        style={{ marginTop: '4px' }}
      >
        Continuar
        <span>→</span>
      </button>
    </form>
  );
}
