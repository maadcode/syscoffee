// ─── App.jsx ──────────────────────────────────────────────────────────────────
// Componente raíz: enrutador de pantallas y proveedor del motor de juego.

import { useGameEngine }  from './hooks/useGameEngine.js';
import Onboarding        from './components/Onboarding/Onboarding.jsx';
import GameScreen        from './components/Game/GameScreen.jsx';
import ResultsScreen     from './components/Results/ResultsScreen.jsx';

export default function App() {
  const {
    state,
    currentQuestion,
    currentDialogue,
    startGame,
    advanceDialogue,
    makeChoice,
    restart,
  } = useGameEngine();

  const { screen, player, profile, algorithm } = state;

  return (
    <>
      {screen === 'onboarding' && (
        <Onboarding onStart={startGame} />
      )}

      {screen === 'game' && currentQuestion && (
        <GameScreen
          state={state}
          currentQuestion={currentQuestion}
          currentDialogue={currentDialogue}
          onAdvance={advanceDialogue}
          onChoice={makeChoice}
        />
      )}

      {screen === 'results' && profile && (
        <ResultsScreen
          profile={profile}
          player={player}
          earlyExit={algorithm?.earlyExit || false}
          choicesCount={algorithm?.questionIndex}
          onRestart={restart}
        />
      )}
    </>
  );
}
