/**
 * Small inline French tricolore flag, used to signal Virvolt's French origin.
 * Sized via className (defaults to a compact nav-friendly size).
 */
export function FrenchFlag({ className = 'w-5 h-3.5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 3 2"
      className={className}
      role="img"
      aria-label="Drapeau français"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="1" height="2" x="0" fill="#0055A4" />
      <rect width="1" height="2" x="1" fill="#ffffff" />
      <rect width="1" height="2" x="2" fill="#EF4135" />
    </svg>
  )
}
