import { Link } from 'react-router'
import { Crown, Lock, MapPin, ChevronRight } from 'lucide-react'
import { guides } from '@/data/guides'
import { countries } from '@/data/countries'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { useAuth } from '@/hooks/useAuth'
import { t } from '@/i18n'

export default function PremiumPage() {
  const { lang } = useApp()
  const { isAuthenticated, isLoading } = useAuth()

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-10">
      <div className="flex items-center gap-2">
        <Crown size={22} className="text-[#c2603a]" />
        <h1 className="font-serif text-4xl font-semibold text-stone-900">
          {t('premiumTitle', lang)}
        </h1>
      </div>
      <p className="mt-1.5 text-sm text-stone-500">{t('premiumSubtitle', lang)}</p>

      {!isAuthenticated && !isLoading && (
        <div className="mt-6 rounded-2xl border border-[#c2603a]/20 bg-[#c2603a]/5 p-5 text-center">
          <Lock size={22} className="mx-auto text-[#c2603a]" />
          <h3 className="mt-2 font-serif text-lg font-semibold text-stone-900">
            {t('premiumLocked', lang)}
          </h3>
          <p className="mx-auto mt-1.5 max-w-xs text-sm leading-relaxed text-stone-500">
            {t('premiumLockedDesc', lang)}
          </p>
          <Link
            to="/login"
            className="mt-4 inline-block rounded-full bg-[#c2603a] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#a9512f]"
          >
            {t('loginButton', lang)}
          </Link>
        </div>
      )}

      <div className="mt-8 space-y-3">
        {guides.map((g) => {
          const country = countries.find((c) => c.slug === g.countrySlug)
          const locked = !isAuthenticated
          const inner = (
            <>
              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src={`/images/${g.countrySlug}-2.jpg`}
                  alt={g.city.en}
                  loading="lazy"
                  className={`h-full w-full object-cover ${locked ? 'blur-[3px] brightness-75' : ''}`}
                />
                {locked && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex items-center gap-1.5 rounded-full bg-black/50 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur">
                      <Lock size={13} /> Premium
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 p-4">
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-stone-400">
                    <MapPin size={11} />
                    {pick(g.city, lang)} {country ? `· ${country.flag} ${pick(country.name, lang)}` : ''}
                  </div>
                  <h3 className="mt-0.5 font-serif text-lg font-semibold text-stone-900">
                    {pick(g.title, lang)}
                  </h3>
                  <p className="mt-0.5 line-clamp-1 text-sm text-stone-500">{pick(g.subtitle, lang)}</p>
                </div>
                <ChevronRight size={18} className="shrink-0 text-stone-300" />
              </div>
            </>
          )
          return locked ? (
            <div key={g.slug} className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              {inner}
            </div>
          ) : (
            <Link
              key={g.slug}
              to={`/guides/${g.slug}`}
              className="block overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              {inner}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
