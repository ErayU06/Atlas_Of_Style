import { Link, useParams, Navigate } from 'react-router'
import { ChevronLeft, Lock, MapPin } from 'lucide-react'
import { getGuide } from '@/data/guides'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { useAuth } from '@/hooks/useAuth'
import { t } from '@/i18n'
import SmartImage from '@/components/SmartImage'
import { Button } from '@/components/ui/button'

export default function GuideDetailPage() {
  const { slug } = useParams()
  const { lang } = useApp()
  const { isAuthenticated, isLoading } = useAuth()
  const guide = slug ? getGuide(slug) : undefined

  if (!guide) return <Navigate to="/premium" replace />

  if (!isAuthenticated && !isLoading) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-6 pb-[calc(7rem+var(--safe-bottom))] text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-atlas-gold/[0.12] text-atlas-gold">
          <Lock size={24} />
        </div>
        <h1 className="mt-4 font-serif text-[26px] font-semibold leading-tight text-atlas-ink">
          {t('premiumLocked', lang)}
        </h1>
        <p className="mx-auto mt-2.5 max-w-xs text-[13px] leading-relaxed text-atlas-muted">
          {t('premiumLockedDesc', lang)}
        </p>
        <Button asChild variant="atlasGold" size="pill" className="mt-6">
          <Link to="/login">{t('loginButton', lang)}</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-md pb-[calc(7rem+var(--safe-bottom))]">
      <div className="relative">
        <SmartImage
          src={`/images/${guide.countrySlug}-2.jpg`}
          alt={guide.city.en}
          ratio="story"
          priority
        >
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25"
            aria-hidden
          />
        </SmartImage>
        <Link
          to="/premium"
          className="tap absolute start-5 top-[calc(1.25rem+var(--safe-top))] flex items-center gap-1 rounded-full bg-atlas-surface/85 px-3 py-1.5 text-xs font-semibold text-atlas-body shadow-card backdrop-blur-md"
        >
          <ChevronLeft size={16} className="rtl:rotate-180" />
          {t('back', lang)}
        </Link>
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80">
            <MapPin size={12} />
            {pick(guide.city, lang)}
          </div>
          <h1 className="mt-2 font-serif text-[30px] font-semibold leading-[1.08] drop-shadow-sm">
            {pick(guide.title, lang)}
          </h1>
        </div>
      </div>

      <p className="px-6 pt-[calc(1.5rem+var(--safe-top))] font-serif text-[18px] leading-[1.6] text-atlas-ink">
        {pick(guide.subtitle, lang)}
      </p>

      <div className="mt-8 space-y-9 px-5">
        {guide.days.map((day, di) => (
          <div key={di}>
            <div className="mb-4">
              <p className="kicker">
                {t('days', lang)} {di + 1}
              </p>
              <h2 className="mt-1.5 font-serif text-[23px] font-semibold leading-tight text-atlas-ink">
                {pick(day.title, lang)}
              </h2>
              <div className="mt-3 h-px w-full bg-atlas-line" />
            </div>
            <ol className="space-y-3">
              {day.stops.map((stop, si) => (
                <li
                  key={si}
                  className="animate-fade-up flex gap-4 rounded-2xl border border-atlas-line bg-atlas-surface p-5 shadow-card"
                  style={{ animationDelay: `${Math.min(si, 6) * 60}ms` }}
                >
                  <span className="mt-0.5 shrink-0 font-serif text-sm font-semibold text-atlas-clay">
                    {String(si + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-[18px] font-semibold leading-snug text-atlas-ink">
                      {pick(stop.name, lang)}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-atlas-body">
                      {pick(stop.desc, lang)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  )
}
