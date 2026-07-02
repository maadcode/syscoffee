// ─── GameScreen.jsx ───────────────────────────────────────────────────────────
// Pantalla principal del juego con layout responsive mejorado.

import Background    from './Background.jsx';
import DialogueBox   from './DialogueBox.jsx';
import ChoicePanel   from './ChoicePanel.jsx';
import ProgressBar   from './ProgressBar.jsx';

export default function GameScreen({
  state,
  currentQuestion,
  currentDialogue,
  onAdvance,
  onChoice,
}) {
  if (!currentQuestion) return null;

  const { player, algorithm, showChoices, currentOptions } = state;
  const phase = currentQuestion.background;

  return (
    <div className="vn-container">
      {/* ── Background ── */}
      <Background phase={phase} />



      {/* ── HUD: Top bar ── */}
      <div
        className="absolute top-0 left-0 right-0 z-20"
        style={{
          background: 'linear-gradient(to bottom, rgba(15,8,2,0.85) 0%, rgba(15,8,2,0.4) 70%, transparent 100%)',
          paddingTop: 'env(safe-area-inset-top, 0px)',
        }}
      >
        <div className="px-4 sm:px-6 py-3 sm:py-4 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="text-base">☕</span>
              <span
                className="font-title text-xs sm:text-sm font-semibold hidden xs:block"
                style={{ color: 'var(--color-cafe-300)' }}
              >
                SysCoffee
              </span>
            </div>

            {/* Progress */}
            <div className="flex-1">
              <ProgressBar
                questionIndex={algorithm.questionIndex}
                totalQuestions={algorithm.totalQuestions}
              />
            </div>

            {/* Player name */}
            <span
              className="text-xs font-medium flex-shrink-0 truncate max-w-[80px] sm:max-w-[120px]"
              style={{ color: 'var(--color-cafe-400)' }}
            >
              {player.name}
            </span>
          </div>
        </div>
      </div>

      {/* ── Scenario title ── */}
      {!showChoices && (
        <div
          className="absolute top-16 sm:top-20 left-0 right-0 z-10 flex justify-center px-4"
          style={{ pointerEvents: 'none' }}
        >
          <p
            className="font-title text-xs sm:text-sm font-semibold tracking-widest uppercase text-center
                       px-4 py-1.5 rounded-full"
            style={{
              color: 'var(--color-cafe-200)',
              textShadow: '0 2px 12px rgba(0,0,0,0.9)',
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(212,148,63,0.15)',
              maxWidth: '90vw',
            }}
          >
            {currentQuestion.title}
          </p>
        </div>
      )}

      {/* ── Bottom panel ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20"
        style={{
          background: showChoices
            ? 'linear-gradient(to top, rgba(10,5,1,0.97) 0%, rgba(10,5,1,0.92) 60%, rgba(10,5,1,0.6) 85%, transparent 100%)'
            : 'linear-gradient(to top, rgba(10,5,1,0.95) 0%, rgba(10,5,1,0.8) 60%, transparent 100%)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        <div className="px-4 sm:px-6 pt-6 pb-5 sm:pb-8 max-w-3xl mx-auto">
          {showChoices ? (
            <ChoicePanel
              options={currentOptions}
              question={currentQuestion}
              playerName={player.name}
              onChoice={onChoice}
            />
          ) : (
            currentDialogue && (
              <DialogueBox
                dialogue={currentDialogue}
                playerName={player.name}
                onAdvance={onAdvance}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
