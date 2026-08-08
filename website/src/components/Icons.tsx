// One icon system: 16px grid, 1.75 stroke, round caps. Drawn, not emoji.

interface IconProps {
  size?: number;
  className?: string;
}

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

export function ChevronLeft({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base} aria-hidden>
      <path d="M10 3 5 8l5 5" />
    </svg>
  );
}

export function ChevronRight({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base} aria-hidden>
      <path d="m6 3 5 5-5 5" />
    </svg>
  );
}

export function Check({ size = 15 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base} aria-hidden>
      <path d="m2.5 8.5 3.5 3.5 7.5-8" />
    </svg>
  );
}

export function Minus({ size = 15 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base} aria-hidden>
      <path d="M3 8h10" />
    </svg>
  );
}

export function Copy({ size = 15 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base} aria-hidden>
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
      <path d="M10.5 5.5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2" />
    </svg>
  );
}

export function Close({ size = 12 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base} aria-hidden>
      <path d="m3.5 3.5 9 9m0-9-9 9" />
    </svg>
  );
}

export function Plus({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base} aria-hidden>
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

export function ArrowUpRight({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base} aria-hidden>
      <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" />
    </svg>
  );
}

export function GitHub({ size = 17 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function Sun({ size = 17, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      {...base}
      aria-hidden
    >
      <circle cx="8" cy="8" r="3.25" />
      <path d="M8 1.25v1.5M8 13.25v1.5M14.75 8h-1.5M2.75 8h-1.5M12.77 3.23l-1.06 1.06M4.29 11.71l-1.06 1.06M12.77 12.77l-1.06-1.06M4.29 4.29 3.23 3.23" />
    </svg>
  );
}

export function Moon({ size = 17, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      {...base}
      aria-hidden
    >
      <path d="M13.4 9.9A6 6 0 1 1 6.1 2.6a4.9 4.9 0 0 0 7.3 7.3Z" />
    </svg>
  );
}

// The library's mark: a scrolling row, one item lit.
export function Mark({ size = 26 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <rect
        x="1"
        y="9"
        width="9"
        height="14"
        rx="3"
        fill="currentColor"
        opacity="0.32"
      />
      <rect
        x="12"
        y="7"
        width="11"
        height="18"
        rx="3.5"
        fill="var(--primary, oklch(0.55 0.21 15))"
      />
      <rect
        x="25"
        y="9"
        width="9"
        height="14"
        rx="3"
        fill="currentColor"
        opacity="0.32"
      />
    </svg>
  );
}
