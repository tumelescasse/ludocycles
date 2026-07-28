/**
 * Petit drapeau tricolore, utilisé comme repère « fabriqué en France »
 * à côté des mentions Virvolt.
 */
export function FrenchFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 12" aria-hidden="true" className={className}>
      <rect x="0" y="0" width="6" height="12" fill="#0055a4" />
      <rect x="6" y="0" width="6" height="12" fill="#ffffff" />
      <rect x="12" y="0" width="6" height="12" fill="#ef4135" />
    </svg>
  )
}
