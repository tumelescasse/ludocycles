export type MotorPosition = 'front' | 'rear' | 'mid'

const spots: Record<MotorPosition, { x: number; y: number }> = {
  rear: { x: 52, y: 68 },
  mid: { x: 100, y: 68 },
  front: { x: 148, y: 68 },
}

type Props = {
  /** Where the motor sits on the bike: front hub, rear hub or bottom bracket. */
  position: MotorPosition
  /** Any CSS color — use a brand token such as `var(--rust)`. */
  accent: string
  className?: string
}

/**
 * Side view of a bicycle with one highlighted spot, used to show at a glance
 * where a Virvolt kit installs its motor.
 */
export function MotorPositionDiagram({ position, accent, className }: Props) {
  const spot = spots[position]

  return (
    <svg
      viewBox="0 0 200 100"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Wheels */}
      <circle cx="52" cy="68" r="22" strokeWidth="2.5" opacity="0.55" />
      <circle cx="148" cy="68" r="22" strokeWidth="2.5" opacity="0.55" />

      {/* Frame */}
      <g strokeWidth="3" opacity="0.85">
        <path d="M52 68 H100" />
        <path d="M100 68 L84 30" />
        <path d="M100 68 L130 32" />
        <path d="M84 30 H130" />
        <path d="M52 68 L84 30" />
        <path d="M130 32 L148 68" />
      </g>

      {/* Saddle & handlebar */}
      <g strokeWidth="2.5" opacity="0.7">
        <path d="M76 28 H92" />
        <path d="M130 32 L142 26" />
      </g>

      {/* Highlighted motor location */}
      <circle cx={spot.x} cy={spot.y} r="15" fill={accent} opacity="0.22" stroke="none" />
      <circle cx={spot.x} cy={spot.y} r="8.5" fill={accent} stroke="none" />
    </svg>
  )
}
