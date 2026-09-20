// Original static code-native decoration; no template asset, continuous animation or essential content.
export function HeroDecoration() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full text-secondary opacity-25 lg:block"
    >
      <defs>
        <filter
          id="hero-wave-soft"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <linearGradient id="hero-wave-light" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.48" stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#hero-wave-light)"
        filter="url(#hero-wave-soft)"
      >
        <path
          strokeWidth="64"
          d="M-160 360C40 90 330 320 210 520S440 920 615 655S730 315 915 550S1230 405 1560 290"
        />
        <path
          strokeWidth="8"
          d="M-160 322C40 52 330 282 210 482S440 882 615 617S730 277 915 512S1230 367 1560 252"
        />
      </g>
    </svg>
  );
}
