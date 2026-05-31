interface Props {
  className?: string;
  animated?: boolean;
}

/**
 * ScalaX official geometric bird logo.
 * Side-profile origami-style bird facing right, composed of triangular facets
 * with an expansive angular wing reaching up and to the right.
 * Adapted to the site's neon-blue gradient + glow treatment.
 */
export function ScalaxBird({ className, animated = false }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ScalaX"
    >
      <defs>
        <linearGradient id="birdGradDark" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.45 0.20 260)" />
          <stop offset="60%" stopColor="oklch(0.65 0.22 250)" />
          <stop offset="100%" stopColor="oklch(0.78 0.18 235)" />
        </linearGradient>
        <linearGradient id="birdGradLight" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.72 0.19 245)" />
          <stop offset="100%" stopColor="oklch(0.95 0.10 230)" />
        </linearGradient>
        <linearGradient id="birdGradAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.92 0.12 230)" />
          <stop offset="100%" stopColor="oklch(0.70 0.20 240)" />
        </linearGradient>
        <filter id="birdGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g
        filter="url(#birdGlow)"
        style={animated ? { transformOrigin: "100px 100px" } : undefined}
      >
        {/* Beak */}
        <polygon points="18,78 55,68 52,88" fill="url(#birdGradAccent)" />

        {/* Head top */}
        <polygon points="55,68 78,52 80,82" fill="url(#birdGradLight)" />

        {/* Head lower / cheek */}
        <polygon points="52,88 55,68 80,82 70,102" fill="url(#birdGradDark)" opacity="0.9" />

        {/* Neck / upper body */}
        <polygon points="78,52 105,72 95,108 80,82" fill="url(#birdGradLight)" />

        {/* Body core */}
        <polygon points="80,82 95,108 75,150 60,118" fill="url(#birdGradDark)" />

        {/* Body front panel */}
        <polygon points="70,102 95,108 75,150 55,135" fill="url(#birdGradLight)" opacity="0.85" />

        {/* Tail / lower body point */}
        <polygon points="75,150 95,108 110,150 88,178" fill="url(#birdGradDark)" />
        <polygon points="75,150 88,178 60,160" fill="url(#birdGradLight)" opacity="0.8" />

        {/* Wing — inner panel (closest to body) */}
        <polygon points="95,108 105,72 140,90 125,118" fill="url(#birdGradLight)" />

        {/* Wing — mid panel */}
        <polygon points="105,72 140,90 165,68 135,52" fill="url(#birdGradDark)" />

        {/* Wing — upper feather */}
        <polygon points="135,52 165,68 188,32 158,38" fill="url(#birdGradLight)" />

        {/* Wing — outer feather tip */}
        <polygon points="158,38 188,32 178,72 162,62" fill="url(#birdGradAccent)" />

        {/* Wing — lower feather */}
        <polygon points="125,118 140,90 165,68 178,72 170,108 145,128" fill="url(#birdGradDark)" opacity="0.92" />

        {/* Wing — trailing edge */}
        <polygon points="125,118 145,128 170,108 178,140 138,148" fill="url(#birdGradLight)" opacity="0.9" />

        {/* Wing tail flare */}
        <polygon points="110,150 138,148 178,140 150,168" fill="url(#birdGradDark)" />
      </g>
    </svg>
  );
}
