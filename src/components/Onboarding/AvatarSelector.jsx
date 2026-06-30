// ─── AvatarSelector.jsx ───────────────────────────────────────────────────────
import avatarMale from '../../assets/characters/avatar_male.png';
import avatarFemale from '../../assets/characters/avatar_female.png';

const AVATARS = [
  { id: 'M', label: 'Masculino', emoji: '👨‍💻', src: avatarMale },
  { id: 'F', label: 'Femenino',  emoji: '👩‍💻', src: avatarFemale },
];

export default function AvatarSelector({ name, selected, onSelect, onStart }) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="text-4xl block mb-3">🎭</span>
        <h2
          className="font-title font-semibold"
          style={{ fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', color: 'var(--color-cafe-200)' }}
        >
          ¡Hola, {name}!
        </h2>
        <p
          className="font-narrative mt-2 leading-relaxed"
          style={{ fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', color: 'var(--color-cafe-400)', lineHeight: '1.7' }}
        >
          Elige cómo te verán en el café.<br />
          Así te reconocerán los demás personajes.
        </p>
      </div>

      {/* Avatar cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {AVATARS.map((avatar) => {
          const isSelected = selected === avatar.id;
          return (
            <button
              key={avatar.id}
              id={`avatar-${avatar.id.toLowerCase()}`}
              onClick={() => onSelect(avatar.id)}
              className={`avatar-card ${isSelected ? 'selected' : ''}`}
              style={{
                padding: 'clamp(12px, 3vw, 20px)',
              }}
            >
              <div className="flex flex-col items-center gap-3">
                {/* Avatar image */}
                <div
                  className="relative rounded-full overflow-hidden"
                  style={{
                    width: 'clamp(72px, 18vw, 100px)',
                    height: 'clamp(72px, 18vw, 100px)',
                    border: `2px solid ${isSelected ? 'var(--color-cafe-300)' : 'rgba(255,255,255,0.1)'}`,
                    boxShadow: isSelected ? '0 0 20px rgba(212,148,63,0.4)' : 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                  }}
                >
                  <img
                    src={avatar.src}
                    alt={avatar.label}
                    className="w-full h-full object-cover"
                  />
                  {isSelected && (
                    <div
                      className="absolute inset-0 flex items-center justify-center animate-fade-in"
                      style={{ background: 'rgba(0,0,0,0.3)' }}
                    >
                      <span className="text-2xl font-bold" style={{ color: 'var(--color-cafe-300)' }}>✓</span>
                    </div>
                  )}
                </div>

                {/* Label */}
                <div className="text-center">
                  <p className="text-sm font-semibold" style={{ color: isSelected ? 'var(--color-cafe-200)' : 'var(--color-cafe-300)' }}>
                    {avatar.emoji} {avatar.label}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Start button */}
      <button
        id="btn-start-game"
        onClick={onStart}
        disabled={!selected}
        className="btn-primary w-full flex items-center justify-center gap-2"
        style={{
          opacity: selected ? 1 : 0.4,
          cursor: selected ? 'pointer' : 'not-allowed',
          fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
          padding: 'clamp(10px, 2.5vw, 14px) 24px',
        }}
      >
        <span>☕</span>
        ¡Comenzar la aventura!
      </button>

      {!selected && (
        <p
          className="text-center text-xs mt-3 animate-fade-in"
          style={{ color: 'rgba(245,230,200,0.3)' }}
        >
          Selecciona un avatar para continuar
        </p>
      )}
    </div>
  );
}
