import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  /** Small tracked eyebrow above the title. */
  kicker?: string
  title: string
  /** One-line editorial standfirst under the title. */
  standfirst?: string
  /** Optional "see all" affordance. */
  action?: { to: string; label: string }
  className?: string
}

/**
 * The single editorial section header used across every screen — a tracked
 * kicker, a serif title and a hairline rule. Having exactly one of these is
 * what makes the sections feel like chapters of the same magazine.
 */
export default function SectionHeading({
  kicker,
  title,
  standfirst,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-4', className)}>
      <div className="flex items-baseline justify-between gap-4">
        <div className="min-w-0">
          {kicker && <p className="kicker">{kicker}</p>}
          <h2 className="mt-1.5 font-serif text-[26px] font-semibold leading-tight text-atlas-ink">
            {title}
          </h2>
        </div>
        {action && (
          <Link
            to={action.to}
            className="tap group flex shrink-0 items-center gap-1 whitespace-nowrap text-xs font-semibold text-atlas-clay"
          >
            {action.label}
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5 rtl:rotate-180"
            />
          </Link>
        )}
      </div>
      {standfirst && (
        <p className="mt-1.5 max-w-[38ch] text-sm leading-relaxed text-atlas-muted">
          {standfirst}
        </p>
      )}
      <div className="mt-3 h-px w-full bg-atlas-line" />
    </div>
  )
}
