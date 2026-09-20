// Original static code-native schematic; it adds spatial rhythm without carrying essential content.
export function HeroDecoration() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full text-accent opacity-[0.12] lg:block"
    >
      <defs>
        <linearGradient id="hero-craft-line" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.58" stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#hero-craft-line)" strokeWidth="1">
        <path d="M720 -120v1000M1040 -120v1000M1360 -120v1000" />
        <path d="M600 120h920M600 440h920" />
        <circle cx="1040" cy="440" r="230" />
        <circle cx="1040" cy="440" r="145" />
      </g>
      <rect x="1028" y="428" width="24" height="24" fill="currentColor" />
    </svg>
  );
}
