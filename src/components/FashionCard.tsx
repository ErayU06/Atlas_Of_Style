import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import SmartImage, { type ImageRatio } from '@/components/SmartImage'
import { cn } from '@/lib/utils'

interface FashionCardProps {
  to: string
  image: string
  imageAlt: string
  /** Era, region or country line above the title. */
  kicker?: string
  title: string
  description?: string
  /** Label for the explore affordance. Omit to hide it. */
  cta?: string
  /** Flag or emoji shown before the title. */
  emblem?: string
  /** `overlay` = full-bleed editorial, `row` = compact list item. */
  variant?: 'overlay' | 'row'
  /** Type scale for the overlay variant: `sm` fits a two-column grid. */
  size?: 'sm' | 'md'
  ratio?: ImageRatio
  priority?: boolean
  /** Badges (PRO, "new") pinned to the top-left of the image. */
  badge?: ReactNode
  /** Actions pinned to the top-right — usually a FavoriteButton. */
  action?: ReactNode
  /** Stagger index, so a list of cards arrives in sequence. */
  index?: number
  className?: string
}

/**
 * The one card used for eras, countries and stories. Two variants share the
 * same crop, radius, elevation and press feedback so a mixed feed still reads
 * as one system.
 */
export default function FashionCard({
  to,
  image,
  imageAlt,
  kicker,
  title,
  description,
  cta,
  emblem,
  variant = 'overlay',
  size = 'md',
  ratio = 'editorial',
  priority = false,
  badge,
  action,
  index = 0,
  className,
}: FashionCardProps) {
  // Cap the stagger so long lists never feel like they are loading slowly.
  const delay = `${Math.min(index, 6) * 70}ms`
  const small = size === 'sm'

  if (variant === 'row') {
    return (
      <div
        className={cn('animate-fade-up', className)}
        style={{ animationDelay: delay }}
      >
        <Link
          to={to}
          className="tap group relative flex items-stretch gap-4 overflow-hidden rounded-2xl border border-atlas-line bg-atlas-surface p-3 shadow-card transition-shadow duration-300 hover:shadow-lift"
        >
          <SmartImage
            src={image}
            alt={imageAlt}
            ratio="editorial"
            priority={priority}
            className="w-[68px] shrink-0 rounded-xl"
            imgClassName="transition-transform duration-500 group-hover:scale-[1.06]"
          />
          <div className="flex min-w-0 flex-1 flex-col justify-center py-0.5">
            {kicker && <p className="kicker truncate text-[10px]">{kicker}</p>}
            <h3 className="mt-1 flex items-center gap-1.5 truncate font-serif text-[19px] font-semibold leading-snug text-atlas-ink">
              {emblem && <span className="shrink-0 text-base">{emblem}</span>}
              <span className="truncate">{title}</span>
            </h3>
            {description && (
              <p className="mt-0.5 truncate text-[13px] text-atlas-muted">{description}</p>
            )}
          </div>
          {action ? (
            <div className="flex shrink-0 items-center">{action}</div>
          ) : (
            <div className="flex shrink-0 items-center pr-1">
              <ArrowRight
                size={16}
                className="text-atlas-muted/50 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180"
              />
            </div>
          )}
        </Link>
      </div>
    )
  }

  return (
    <div className={cn('animate-fade-up', className)} style={{ animationDelay: delay }}>
      <Link
        to={to}
        className={cn(
          'tap group relative block overflow-hidden shadow-card transition-shadow duration-300 hover:shadow-lift',
          small ? 'rounded-2xl' : 'rounded-3xl',
        )}
      >
        <SmartImage
          src={image}
          alt={imageAlt}
          ratio={ratio}
          priority={priority}
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        >
          {/* Scrim tuned so overlaid text keeps AA contrast on any photo.
              Small cards get a shallower one so the photo stays the subject. */}
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-t',
              small
                ? 'from-black/75 via-black/12 to-transparent'
                : 'from-black/80 via-black/25 to-black/5',
            )}
            aria-hidden
          />
        </SmartImage>

        {badge && (
          <div className={cn('absolute flex gap-2', small ? 'left-3 top-3' : 'left-4 top-4')}>
            {badge}
          </div>
        )}
        {action && (
          <div className={cn('absolute', small ? 'right-2 top-2' : 'right-3 top-3')}>{action}</div>
        )}

        <div className={cn('absolute inset-x-0 bottom-0 text-white', small ? 'p-3.5' : 'p-5')}>
          {kicker && (
            <p
              className={cn(
                'font-semibold uppercase text-white/75',
                small ? 'text-[9px] tracking-[0.2em]' : 'text-[10px] tracking-[0.28em]',
              )}
            >
              {kicker}
            </p>
          )}
          <h3
            className={cn(
              'flex items-center gap-1.5 font-serif font-semibold leading-tight drop-shadow-sm',
              small ? 'mt-1 text-[17px]' : 'mt-1.5 gap-2 text-[27px]',
            )}
          >
            {emblem && <span className={small ? 'text-sm' : 'text-2xl'}>{emblem}</span>}
            <span className="min-w-0 truncate">{title}</span>
          </h3>
          {description && (
            <p
              className={cn(
                'leading-relaxed text-white/85',
                small
                  ? 'mt-0.5 line-clamp-1 text-[11px]'
                  : 'mt-1.5 line-clamp-2 max-w-[34ch] text-[13px]',
              )}
            >
              {description}
            </p>
          )}
          {cta && (
            <span className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-inset ring-white/25 backdrop-blur-md transition-colors duration-200 group-hover:bg-white/25">
              {cta}
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180"
              />
            </span>
          )}
        </div>
      </Link>
    </div>
  )
}
