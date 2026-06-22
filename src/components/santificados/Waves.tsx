export function Waves({ className = "", color = "var(--cream)" }: { className?: string; color?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill={color}
        d="M0,80 C180,140 360,20 540,60 C720,100 900,140 1080,90 C1260,40 1380,70 1440,80 L1440,140 L0,140 Z"
      />
      <path
        fill={color}
        opacity="0.55"
        d="M0,100 C200,60 380,130 600,100 C820,70 1000,120 1200,100 C1320,90 1400,110 1440,105 L1440,140 L0,140 Z"
      />
    </svg>
  );
}

export function SunRays({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 12 });
  return (
    <svg className={className} viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {rays.map((_, i) => (
        <polygon
          key={i}
          points="-6,0 6,0 0,95"
          fill="var(--sun)"
          transform={`rotate(${(360 / rays.length) * i})`}
          opacity={i % 2 === 0 ? 0.95 : 0.6}
        />
      ))}
      <circle r="32" fill="var(--sun)" />
      <circle r="38" fill="none" stroke="var(--blaze)" strokeWidth="3" opacity="0.5" />
    </svg>
  );
}

export function Dove({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        stroke="var(--ink)"
        strokeWidth="1.5"
        d="M32 10c-3 0-5 2-5 4 0 1 .4 2 1 3-6 1-12 5-15 11 4-1 7-1 10 0-2 2-3 5-3 8 2-2 5-3 8-4 0 3 1 6 3 8 1-2 3-4 6-5 3 1 5 3 6 5 2-2 3-5 3-8 3 1 6 2 8 4 0-3-1-6-3-8 3-1 6-1 10 0-3-6-9-10-15-11 .6-1 1-2 1-3 0-2-2-4-5-4-1 0-3 1-3 2 0-1-2-2-3-2z"
      />
      <circle cx="36" cy="18" r="1" fill="var(--ink)" />
    </svg>
  );
}