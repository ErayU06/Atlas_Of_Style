import { Link, useParams, Navigate } from 'react-router'
import { ChevronLeft, Lock, MapPin } from 'lucide-react'
import { getGuide } from '@/data/guides'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { useAuth } from '@/hooks/useAuth'
import { t } from '@/i18n'

export default function GuideDetailPage() {
  const { slug } = useParams()
  const { lang } = useApp()
  const { isAuthenticated, isLoading } = useAuth()
  const guide = slug ? getGuide(slug) : undefined

  if (!guide) return <Navigate to="/premium" replace />

  if (!isAuthenticated && !isLoading) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-5 pb-28 text-center">
        <Lock size={28} className="text-[#c2603a]" />
        <h2 className="mt-3 font-serif text-2xl font-semibold text-stone-900">
          {t('premiumLocked', lang)}
        </h2>
        <p className="mx-auto mt-2 max-w-xs text-sm text-stone-500">{t('premiumLockedDesc', lang)}</p>
        <Link
          to="/login"
          className="mt-5 rounded-full bg-[#c2603a] px-6 py-2.5 text-sm font-medium text-white shadow-sm"
        >
          {t('loginButton', lang)}
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-md pb-28">
      <div className="relative">
        <img
          src={`/images/${guide.countrySlug}-2.jpg`}
          alt={guide.city.en}
          className="aspect-[16/10] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
        <Link
          to="/premium"
          className="absolute left-5 top-5 flex items-center gap-1 rounded-full bg-white/85 px-3 py-1.5 text-xs font-medium text-stone-700 shadow-sm backdrop-blur"
        >
          <ChevronLeft size={16} />
          {t('back', lang)}
        </Link>
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
            <MapPin size={12} />
            {pick(guide.city, lang)}
          </div>
          <h1 className="mt-1 font-serif text-3xl font-semibold drop-shadow">{pick(guide.title, lang)}</h1>
        </div>
      </div>

      <p className="mt-4 px-5 text-sm leading-relaxed text-stone-500">{pick(guide.subtitle, lang)}</p>

      <div className="mt-6 space-y-6 px-5">
        {guide.days.map((day, di) => (
          <div key={di}>
            <h3 className="font-serif text-lg font-semibold text-[#c2603a]">{pick(day.title, lang)}</h3>
            <div className="mt-3 space-y-3">
              {day.stops.map((stop, si) => (
                <div key={si} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                  <h4 className="font-serif text-base font-semibold text-stone-900">
                    {pick(stop.name, lang)}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{pick(stop.desc, lang)}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
