interface Props {
  className?: string;
  animated?: boolean;
}

/**
 * ScalaX geometric bird logo.
 * Stylized geometric falcon/eagle composed of sharp triangular planes,
 * suggesting upward motion and scale.
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
        <linearGradient id="birdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.78 0.18 235)" />
          <stop offset="50%" stopColor="oklch(0.65 0.22 250)" />
          <stop offset="100%" stopColor="oklch(0.45 0.20 260)" />
        </linearGradient>
        <linearGradient id="birdGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.95 0.10 230)" />
          <stop offset="100%" stopColor="oklch(0.72 0.19 245)" />
        </linearGradient>
        <filter id="birdGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
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
        {/* Left wing (back) */}
        <polygon
          points="100,100 30,60 60,110 100,110"
          fill="url(#birdGrad)"
          opacity="0.85"
        />
        {/* Left wing (front, lower) */}
        <polygon
          points="100,110 60,110 90,150"
          fill="url(#birdGradLight)"
          opacity="0.95"
        />
        {/* Right wing (back) */}
        <polygon
          points="100,100 170,60 140,110 100,110"
          fill="url(#birdGrad)"
        />
        {/* Right wing (front, lower) */}
        <polygon
          points="100,110 140,110 110,150"
          fill="url(#birdGradLight)"
        />
        {/* Body/head triangle pointing up */}
        <polygon
          points="100,55 85,105 115,105"
          fill="url(#birdGradLight)"
        />
        {/* Beak / top accent */}
        <polygon
          points="100,40 95,65 105,65"
          fill="oklch(0.92 0.12 230)"
        />
      </g>
    </svg>
  );
}
