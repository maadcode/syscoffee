import { useState } from 'react';
import { CONFIG } from '../../config.js';

export default function FeedbackForm({ player, profile }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0) {
      setErrorMessage('Por favor, selecciona una puntuación antes de enviar.');
      return;
    }

    setErrorMessage('');
    setStatus('submitting');

    const feedbackData = {
      playerName: player?.name || 'Anónimo',
      primaryRole: profile?.primary || 'Desconocido',
      rating: rating,
      comment: comment.trim(),
      timestamp: new Date().toISOString(),
    };

    // Si no está configurada la URL de Formspree, simulamos el envío para testing local
    if (!CONFIG.FORMSPREE_URL) {
      console.warn(
        '[FeedbackForm] CONFIG.FORMSPREE_URL no está configurada. Simulando envío...',
        feedbackData
      );
      setTimeout(() => {
        setStatus('success');
      }, 1000);
      return;
    }

    try {
      const response = await fetch(CONFIG.FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al enviar a Formspree');
      }
    } catch (error) {
      console.error('Error al enviar feedback:', error);
      setErrorMessage(
        'Hubo un problema al enviar tu feedback. Por favor, inténtalo de nuevo.'
      );
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        className="glass-card text-center animate-fade-in mb-6"
        style={{
          padding: 'clamp(20px, 4vw, 32px)',
          borderColor: 'var(--color-accent-green)',
          background: 'rgba(105, 240, 174, 0.03)',
        }}
      >
        <div
          className="inline-flex items-center justify-center rounded-full mb-3"
          style={{
            width: '48px',
            height: '48px',
            background: 'rgba(105, 240, 174, 0.15)',
            border: '1.5px solid var(--color-accent-green)',
            color: 'var(--color-accent-green)',
            fontSize: '1.5rem',
            boxShadow: '0 0 16px rgba(105, 240, 174, 0.25)',
          }}
        >
          ✓
        </div>
        <h3
          className="font-title font-semibold text-base sm:text-lg mb-1"
          style={{ color: 'var(--color-cafe-100)' }}
        >
          ¡Gracias por tu opinión!
        </h3>
        <p
          className="text-xs sm:text-sm"
          style={{ color: 'rgba(245, 230, 200, 0.6)', lineHeight: '1.5' }}
        >
          Tus respuestas y feedback nos ayudan a seguir refinando el SysCoffee Test.
        </p>
      </div>
    );
  }

  return (
    <div
      className="glass-card mb-6 animate-result-reveal"
      style={{
        padding: 'clamp(16px, 3.5vw, 24px)',
        animationDelay: '0.5s',
      }}
    >
      <h3
        className="font-title font-semibold text-center mb-1"
        style={{
          fontSize: 'clamp(0.95rem, 3vw, 1.15rem)',
          color: 'var(--color-cafe-200)',
        }}
      >
        ¿Qué te pareció el test?
      </h3>
      <p
        className="text-center mb-4 text-xs"
        style={{ color: 'rgba(245, 230, 200, 0.45)' }}
      >
        Déjanos una breve evaluación para mejorar la experiencia.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Star Rating */}
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center gap-1.5" onMouseLeave={() => setHoverRating(0)}>
            {[1, 2, 3, 4, 5].map((star) => {
              const isFilled = hoverRating ? star <= hoverRating : star <= rating;
              return (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  className="p-1 focus:outline-none transition-transform active:scale-95 duration-100"
                  style={{
                    cursor: status === 'submitting' ? 'default' : 'pointer',
                  }}
                  disabled={status === 'submitting'}
                  aria-label={`Calificar con ${star} estrellas de 5`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={isFilled ? 'var(--color-accent-amber)' : 'none'}
                    stroke={isFilled ? 'var(--color-accent-amber)' : 'rgba(245, 230, 200, 0.3)'}
                    strokeWidth="1.5"
                    className="w-7 h-7 sm:w-8 sm:h-8 transition-all"
                    style={{
                      filter:
                        isFilled && (hoverRating === star || rating === star)
                          ? 'drop-shadow(0 0 6px rgba(255, 202, 40, 0.45))'
                          : 'none',
                      transform: hoverRating === star ? 'scale(1.15)' : 'none',
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499c.195-.386.74-.386.935 0l2.451 4.847 5.378.78c.427.062.597.585.289.873l-3.896 3.754.919 5.27c.074.427-.372.75-.75.548L12 19.168l-4.816 2.482c-.378.203-.824-.12-.75-.548l.919-5.27-3.896-3.754c-.308-.288-.138-.81.289-.873l5.378-.78 2.451-4.847z"
                    />
                  </svg>
                </button>
              );
            })}
          </div>
          {rating > 0 && (
            <span
              className="text-[11px] font-medium tracking-wide uppercase transition-all duration-300 animate-fade-in"
              style={{
                color: 'var(--color-accent-amber)',
              }}
            >
              {rating === 1 && 'Malo'}
              {rating === 2 && 'Regular'}
              {rating === 3 && 'Bueno'}
              {rating === 4 && 'Muy Bueno'}
              {rating === 5 && '¡Excelente!'}
            </span>
          )}
        </div>

        {/* Comment textarea */}
        <div className="space-y-1">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            disabled={status === 'submitting'}
            className="cafe-input w-full resize-none text-sm"
            placeholder="Comentarios o sugerencias (opcional)..."
            rows="3"
            style={{
              fontSize: '0.85rem',
              lineHeight: '1.5',
            }}
          />
        </div>

        {/* Errors */}
        {errorMessage && (
          <p
            className="text-xs text-center font-medium animate-shake"
            style={{ color: '#ef4444' }}
          >
            ⚠️ {errorMessage}
          </p>
        )}

        {/* Submit button */}
        <div className="text-center pt-1">
          <button
            type="submit"
            disabled={status === 'submitting' || rating === 0}
            className="btn-primary w-full sm:w-auto"
            style={{
              padding: '10px 24px',
              fontSize: '0.85rem',
              opacity: rating === 0 ? 0.5 : 1,
              cursor: rating === 0 ? 'not-allowed' : 'pointer',
              transition: 'opacity 0.25s, transform 0.25s',
            }}
          >
            {status === 'submitting' ? 'Enviando...' : 'Enviar Feedback'}
          </button>
          {status === 'error' && (
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="btn-secondary w-full sm:w-auto mt-2 text-xs"
              style={{ padding: '6px 14px' }}
            >
              Reintentar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
