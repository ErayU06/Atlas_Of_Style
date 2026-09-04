import { useState } from 'react'
import { cn } from '@/lib/utils'

const ratioClass = {
  editorial: 'aspect-[4/5]',
  portrait: 'aspect-[3/4]',
  story: 'aspect-[16/10]',
  wide: 'aspect-[16/9]',
  square: 'aspect-square',
  fill: 'h-full w-full',
} as const

export type ImageRatio = keyof typeof ratioClass

interface SmartImageProps {
  src: string
  alt: string
  /** Consistent editorial crops — see `ratioClass`. */
  ratio?: ImageRatio
  /** Above-the-fold imagery loads eagerly; everything else stays lazy. */
  priority?: boolean
  /**
   * Set false when another image already sits behind this one (era
   * crossfades), so the shimmer does not flash over it.
   */
  placeholder?: boolean
  className?: string
  imgClassName?: string
  /** Rendered above the photo (gradients, captions, badges). */
  children?: React.ReactNode
}

/**
 * Photo wrapper with a fixed crop, a shimmering placeholder and a fade-in.
 * Keeping every image on this component is what stops the app from jumping
 * around while photos decode, and keeps aspect ratios consistent app-wide.
 */
export default function SmartImage({
  src,
  alt,
  ratio = 'editorial',
  priority = false,
  placeholder = true,
  className,
  imgClassName,
  children,
}: SmartImageProps) {
  const [state, setState] = useState<'loading' | 'ready' | 'failed'>('loading')

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        placeholder && 'bg-atlas-soft',
        ratioClass[ratio],
        className,
      )}
    >
      {placeholder && state === 'loading' && (
        <div className="absolute inset-0 shimmer" aria-hidden />
      )}
      {state !== 'failed' && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setState('ready')}
          onError={() => setState('failed')}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-500 ease-out',
            state === 'ready' ? 'opacity-100' : 'opacity-0',
            imgClassName,
          )}
        />
      )}
      {placeholder && state === 'failed' && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-atlas-soft"
          aria-hidden
        >
          <span className="font-serif text-2xl text-atlas-muted/60">AS</span>
        </div>
      )}
      {children}
    </div>
  )
}
