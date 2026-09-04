import { Lock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PassportStampProps {
  /** Circles for countries, notched rectangles for eras — same ink, two visas. */
  kind: 'country' | 'era'
  /** Flag emoji for a country, decade label for an era. */
  emblem: string
  /** Small caps caption under the emblem. */
  label: string
  earned: boolean
  /** Plays the stamp-down animation once, for a fresh unlock. */
  celebrate?: boolean
  className?: string
}

/**
 * A passport visa stamp, drawn rather than generated: it inherits the theme,
 * stays crisp at every density and costs about a kilobyte instead of an image
 * per country.
 */
export default function PassportStamp({
  kind,
  emblem,
  label,
  earned,
  celebrate = false,
  className,
}: PassportStampProps) {
  // Deterministic tilt from the label so a stamp never moves between renders.
  const seed = [...label].reduce((a, c) => a + c.charCodeAt(0), 0)
  const tilt = earned ? ((seed % 9) - 4) * 1.6 : 0

  return (
    <div
      className={cn(
        'relative flex aspect-square w-full flex-col items-center justify-center gap-0.5 border-2 border-dashed p-1 text-center transition-colors duration-300',
        kind === 'country' ? 'rounded-full' : 'rounded-xl',
        earned
          ? 'border-atlas-clay/45 bg-atlas-clay/[0.07] text-atlas-clay'
          : 'border-atlas-line bg-atlas-soft/40 text-atlas-muted/50',
        celebrate && 'animate-stamp-in',
        className,
      )}
      style={{ transform: celebrate ? undefined : `rotate(${tilt}deg)` }}
    >
      {/* Inner hairline: the second ring every real stamp has. */}
      <span
        className={cn(
          'pointer-events-none absolute inset-[3px] border',
          kind === 'country' ? 'rounded-full' : 'rounded-lg',
          earned ? 'border-atlas-clay/25' : 'border-atlas-line/60',
        )}
        aria-hidden
      />
      {earned ? (
        <span
          className={cn(
            'leading-none',
            kind === 'country' ? 'text-[19px]' : 'font-serif text-[15px] font-semibold',
          )}
        >
          {emblem}
        </span>
      ) : (
        <Lock size={13} aria-hidden />
      )}
      {/* Held inside the ring: a round stamp is narrowest at the caption line,
          so a full-width label would spill over the border. */}
      <span
        className={cn(
          'truncate text-[8px] font-semibold uppercase tracking-[0.12em]',
          kind === 'country' ? 'w-[74%]' : 'w-[86%]',
        )}
      >
        {label}
      </span>
    </div>
  )
}
