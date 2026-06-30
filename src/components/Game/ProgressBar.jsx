// ─── ProgressBar.jsx ──────────────────────────────────────────────────────────
// Barra de progreso narrativo con indicador de fase y contador de preguntas.

export default function ProgressBar({ questionIndex, totalQuestions }) {
  const percent = Math.min((questionIndex / totalQuestions) * 100, 100);

  return (
    <div className="flex items-center w-full">
      {/* Progress track */}
      <div className="flex-1 progress-track h-2">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
