import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Line-drawn scenes, so an empty screen still looks designed. */
function Illustration({ kind }: { kind: EmptyStateProps['illustration'] }) {
  const stroke = 'stroke-atlas-clay/55'
  const faint = 'stroke-atlas-line'

  if (kind === 'passport') {
    return (
      <svg viewBox="0 0 120 96" fill="none" className="h-24 w-[7.5rem]" aria-hidden>
        <rect x="26" y="14" width="62" height="74" rx="6" className={cn(faint, 'stroke-[1.5]')} />
        <rect x="34" y="8" width="62" height="74" rx="6" className={cn(stroke, 'stroke-[1.5]')} />
        <circle cx="65" cy="34" r="12" className={cn(stroke, 'stroke-[1.5]')} />
        <path d="M53 34h24M65 22v24M57 26c4 5 4 11 0 16M73 26c-4 5-4 11 0 16" className={cn(stroke, 'stroke-[1.2]')} />
        <path d="M50 58h30M50 66h20" className={cn(faint, 'stroke-[1.5]')} strokeLinecap="round" />
      </svg>
    )
  }

  if (kind === 'search') {
    return (
      <svg viewBox="0 0 120 96" fill="none" className="h-24 w-[7.5rem]" aria-hidden>
        <circle cx="54" cy="42" r="22" className={cn(stroke, 'stroke-[1.5]')} />
        <path d="M70 58l16 16" className={cn(stroke, 'stroke-[1.8]')} strokeLinecap="round" />
        <path d="M44 42h20M54 32v20" className={cn(faint, 'stroke-[1.5]')} strokeLinecap="round" />
      </svg>
    )
  }

  // `collection` — a rail of bare hangers: nothing collected yet.
  return (
    // The viewBox is cropped to the drawing so it fills its box like the others.
    <svg viewBox="8 12 104 40" fill="none" className="h-16 w-[9rem]" aria-hidden>
      {/* The rail and its end supports. */}
      <path d="M12 30h96" className={cn(faint, 'stroke-[2]')} strokeLinecap="round" />
      <path d="M20 30V16M100 30V16" className={cn(faint, 'stroke-[1.5]')} strokeLinecap="round" />
      {[36, 60, 84].map((x) => (
        <g key={x} className={cn(stroke, 'stroke-[1.5]')} strokeLinecap="round">
          {/* Hook over the rail, then the wire triangle below it. */}
          <path d={`M${x} 26v4`} />
          <path d={`M${x} 26a3.5 2.8 0 013.6 2.6`} />
          <path d={`M${x} 30L${x - 9} 46h18L${x} 30z`} strokeLinejoin="round" />
        </g>
      ))}
    </svg>
  )
}

interface EmptyStateProps {
  illustration?: 'collection' | 'passport' | 'search'
  title: string
  description: string
  action?: ReactNode
  className?: string
}

/** Shared empty state: illustration, title, one line of guidance, one action. */
export default function EmptyState({
  illustration = 'collection',
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'animate-fade-up flex flex-col items-center rounded-3xl border border-atlas-line bg-atlas-surface/70 px-7 py-10 text-center shadow-card',
        className,
      )}
    >
      <Illustration kind={illustration} />
      <h3 className="mt-4 font-serif text-[21px] font-semibold leading-tight text-atlas-ink">
        {title}
      </h3>
      <p className="mt-2 max-w-[30ch] text-[13px] leading-relaxed text-atlas-muted">
        {description}
      </p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}
