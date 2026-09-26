import { Link } from 'react-router'
import { Crown, Lock, MapPin, ChevronRight } from 'lucide-react'
import { guides } from '@/data/guides'
import { countries } from '@/data/countries'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { useAuth } from '@/hooks/useAuth'
import { t } from '@/i18n'
import SmartImage from '@/components/SmartImage'
import SectionHeading from '@/components/SectionHeading'
import { Button } from '@/components/ui/button'

export default function PremiumPage() {
  const { lang } = useApp()
  const { isAuthenticated, isLoading } = useAuth()

  return (
    <div className="mx-auto max-w-md px-5 pb-[calc(7rem+var(--safe-bottom))] pt-[calc(2.5rem+var(--safe-top))]">
      <header>
        <div className="flex items-center gap-2">
          <Crown size={16} className="text-atlas-gold" />
          <p className="kicker">{t('premiumCard', lang)}</p>
        </div>
        <h1 className="mt-2.5 font-serif text-[34px] font-semibold leading-[1.08] text-atlas-ink">
          {t('premiumTitle', lang)}
        </h1>
        <p className="mt-2.5 text-sm leading-relaxed text-atlas-muted">
          {t('premiumSubtitle', lang)}
        </p>
      </header>

      {!isAuthenticated && !isLoading && (
        <div className="mt-6 rounded-3xl border border-atlas-gold/25 bg-atlas-gold/[0.07] p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-atlas-gold text-white shadow-card">
            <Lock size={20} />
          </div>
          <h2 className="mt-3.5 font-serif text-[21px] font-semibold text-atlas-ink">
            {t('premiumLocked', lang)}
          </h2>
          <p className="mx-auto mt-2 max-w-xs text-[13px] leading-relaxed text-atlas-muted">
            {t('premiumLockedDesc', lang)}
          </p>
          <Button asChild variant="atlasGold" size="pill" className="mt-5">
            <Link to="/login">{t('loginButton', lang)}</Link>
          </Button>
        </div>
      )}

      <div className="mt-9">
        <SectionHeading
          kicker={`${guides.length} ${t('openGuide', lang)}`}
          title={t('destinations', lang)}
        />
        <div className="space-y-4">
          {guides.map((g, i) => {
            const country = countries.find((c) => c.slug === g.countrySlug)
            const locked = !isAuthenticated

            const inner = (
              <>
                <SmartImage
                  src={`/images/${g.countrySlug}-2.jpg`}
                  alt={g.city.en}
                  ratio="story"
                  imgClassName={
                    locked
                      ? 'blur-[3px] brightness-[0.72] scale-105'
                      : 'transition-transform duration-700 group-hover:scale-[1.04]'
                  }
                >
                  {locked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex items-center gap-1.5 rounded-full bg-black/45 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                        <Lock size={13} /> Premium
                      </span>
                    </div>
                  )}
                </SmartImage>
                <div className="flex items-center gap-3 p-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-atlas-muted">
                      <MapPin size={11} />
                      <span className="truncate">
                        {pick(g.city, lang)}
                        {country ? ` · ${country.flag} ${pick(country.name, lang)}` : ''}
                      </span>
                    </div>
                    <h3 className="mt-1 font-serif text-[21px] font-semibold leading-tight text-atlas-ink">
                      {pick(g.title, lang)}
                    </h3>
                    <p className="mt-0.5 line-clamp-1 text-[13px] text-atlas-muted">
                      {pick(g.subtitle, lang)}
                    </p>
                  </div>
                  <ChevronRight
                    size={18}
                    className="shrink-0 text-atlas-muted/50 rtl:rotate-180"
                  />
                </div>
              </>
            )

            const shell =
              'animate-fade-up overflow-hidden rounded-3xl border border-atlas-line bg-atlas-surface shadow-card'

            return locked ? (
              <div
                key={g.slug}
                className={shell}
                style={{ animationDelay: `${Math.min(i, 6) * 70}ms` }}
              >
                {inner}
              </div>
            ) : (
              <Link
                key={g.slug}
                to={`/guides/${g.slug}`}
                className={`${shell} tap group block transition-shadow duration-300 hover:shadow-lift`}
                style={{ animationDelay: `${Math.min(i, 6) * 70}ms` }}
              >
                {inner}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
