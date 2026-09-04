import { useEffect } from 'react'
import { countries } from '@/data/countries'
import { getEra } from '@/data/eras'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'
import PassportStamp from '@/components/PassportStamp'

const VISIBLE_MS = 2600

/**
 * The stamp-down celebration. Small, one-shot, and self-dismissing — a badge
 * unlock should feel like a reward, not an interruption.
 */
export default function UnlockToast() {
  const { lang, unlock, clearUnlock } = useApp()

  useEffect(() => {
    if (!unlock) return
    const id = window.setTimeout(clearUnlock, VISIBLE_MS)
    return () => window.clearTimeout(id)
  }, [unlock, clearUnlock])

  if (!unlock) return null

  const country =
    unlock.kind === 'country' ? countries.find((c) => c.slug === unlock.id) : undefined
  const era = unlock.kind === 'era' ? getEra(unlock.id) : undefined
  if (!country && !era) return null

  const emblem = country ? country.flag : (era?.label ?? '')
  const name = country ? pick(country.name, lang) : era ? pick(era.title, lang) : ''

  return (
    <div
      // The toast reports itself; it never steals focus from what was tapped.
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-[calc(5.5rem+var(--nav-safe))] z-[60] flex justify-center px-6"
    >
      <div className="animate-float-up flex items-center gap-3.5 rounded-2xl border border-atlas-line bg-atlas-surface/95 py-2.5 pe-5 ps-3 shadow-lift backdrop-blur-md">
        <div className="w-11 shrink-0">
          <PassportStamp
            kind={unlock.kind}
            emblem={emblem}
            label={name}
            earned
            celebrate
          />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-atlas-clay">
            {t('newStamp', lang)}
          </p>
          <p className="truncate font-serif text-[17px] font-semibold leading-tight text-atlas-ink">
            {name}
          </p>
          <p className="text-[11px] text-atlas-muted">{t('stampAdded', lang)}</p>
        </div>
      </div>
    </div>
  )
}
