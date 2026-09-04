import { useEffect, useRef } from 'react'
import type { Era } from '@/data/eras'
import { cn } from '@/lib/utils'

interface EraTimelineProps {
  eras: Era[]
  activeId: string
  onSelect: (id: string) => void
  label: string
}

/**
 * The scrubber that drives the whole Time Travel screen: one rail, one dot per
 * decade. Selecting a dot re-centres it, so scrubbing forward always keeps the
 * next decade in reach on a phone.
 */
export default function EraTimeline({ eras, activeId, onSelect, label }: EraTimelineProps) {
  const railRef = useRef<HTMLDivElement>(null)
  const activeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [activeId])

  return (
    <div
      role="tablist"
      aria-label={label}
      ref={railRef}
      className="no-scrollbar -mx-5 overflow-x-auto px-5 pb-1"
    >
      <div className="relative flex min-w-max items-start">
        {/* The rail sits behind the dots, inset so it never pokes out. */}
        <div
          className="absolute inset-x-6 top-[13px] h-px bg-atlas-line"
          aria-hidden
        />
        {eras.map((era) => {
          const active = era.id === activeId
          return (
            <button
              key={era.id}
              ref={active ? activeRef : undefined}
              role="tab"
              aria-selected={active}
              onClick={() => onSelect(era.id)}
              className="tap group relative flex w-[62px] shrink-0 flex-col items-center gap-2 pt-2"
            >
              <span
                className={cn(
                  'relative z-10 rounded-full bg-atlas-paper transition-transform duration-300 ease-out',
                  active ? 'scale-100 p-[3px]' : 'scale-90 p-[2px]',
                )}
              >
                <span
                  className={cn(
                    'block rounded-full transition-all duration-300 ease-out',
                    active
                      ? 'h-3 w-3 bg-era-tint ring-2 ring-era-tint/25'
                      : 'h-2 w-2 bg-atlas-muted/40 group-hover:bg-atlas-muted/70',
                  )}
                />
              </span>
              <span
                className={cn(
                  'text-[11px] tabular-nums transition-colors duration-300',
                  active
                    ? 'font-bold text-atlas-ink'
                    : 'font-medium text-atlas-muted/70 group-hover:text-atlas-muted',
                )}
              >
                {era.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
