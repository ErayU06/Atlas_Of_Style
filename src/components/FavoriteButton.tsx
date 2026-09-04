import { useState } from 'react'
import { Heart } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'
import { cn } from '@/lib/utils'

interface FavoriteButtonProps {
  slug: string
  /** `glass` sits on photography, `plain` sits on paper. */
  variant?: 'glass' | 'plain'
  size?: number
  className?: string
}

/**
 * Favourite toggle with a single pop on the way in and nothing on the way out
 * — celebrating a removal would read as noise.
 */
export default function FavoriteButton({
  slug,
  variant = 'plain',
  size = 20,
  className,
}: FavoriteButtonProps) {
  const { lang, toggleFavorite, isFavorite } = useApp()
  const fav = isFavorite(slug)
  const [popKey, setPopKey] = useState(0)

  return (
    <button
      type="button"
      aria-label={t('favorites', lang)}
      aria-pressed={fav}
      onClick={(e) => {
        // Cards wrap this in a <Link>; keep the tap local to the heart.
        e.preventDefault()
        e.stopPropagation()
        if (!fav) setPopKey((k) => k + 1)
        toggleFavorite(slug)
      }}
      className={cn(
        'tap flex items-center justify-center rounded-full transition-colors',
        variant === 'glass'
          ? 'bg-atlas-surface/85 p-2.5 shadow-card backdrop-blur-md'
          : 'p-2 hover:bg-atlas-soft',
        className,
      )}
    >
      <Heart
        // Remounting on the key restarts the keyframes for repeat taps.
        key={popKey}
        size={size}
        strokeWidth={fav ? 2 : 1.8}
        className={cn(
          'transition-colors duration-200',
          fav
            ? 'fill-atlas-clay text-atlas-clay'
            : variant === 'glass'
              ? 'text-atlas-body'
              : 'text-atlas-muted/55',
          fav && popKey > 0 && 'animate-heart-pop',
        )}
      />
    </button>
  )
}
