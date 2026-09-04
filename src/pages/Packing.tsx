import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router'
import { ChevronLeft, Check, Luggage, MapPin, ArrowRight } from 'lucide-react'
import { countries } from '@/data/countries'
import { citiesByCountry, getCity } from '@/data/cities'
import { getPackingList, seasonForMonth, seasonNames, monthNames } from '@/data/packing'
import { getCityPackingList } from '@/data/packing-cities'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'
import PremiumGate from '@/components/PremiumGate'
import ProBadge from '@/components/ProBadge'
import { cn } from '@/lib/utils'

/** One shared style for every horizontally-scrolling choice chip. */
function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'tap flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition-colors duration-200',
        active
          ? 'bg-atlas-clay font-semibold text-white shadow-card'
          : 'border border-atlas-line bg-atlas-surface text-atlas-body hover:border-atlas-clay/30',
      )}
    >
      {children}
    </button>
  )
}

export default function PackingPage() {
  const { slug } = useParams()
  const { lang } = useApp()
  const [countrySlug, setCountrySlug] = useState(slug ?? 'turkiye')
  const [citySlug, setCitySlug] = useState<string | null>(null)
  const [month, setMonth] = useState(new Date().getMonth())

  const country = useMemo(
    () => countries.find((c) => c.slug === countrySlug) ?? countries[0],
    [countrySlug],
  )
  const countryCities = useMemo(() => citiesByCountry(country.slug), [country.slug])
  const city = citySlug ? getCity(citySlug) : undefined
  const needsCity = countryCities.length > 0

  const season = seasonForMonth(month, country.slug)
  const list = city
    ? getCityPackingList(city.slug, season, lang)
    : getPackingList(country.slug, season, lang)

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-6">
      <Link
        to="/tools"
        className="tap inline-flex items-center gap-1 rounded-full border border-atlas-line bg-atlas-surface px-3 py-1.5 text-xs font-semibold text-atlas-body shadow-card"
      >
        <ChevronLeft size={16} className="rtl:rotate-180" />
        {t('back', lang)}
      </Link>

      <header className="mt-5">
        <p className="kicker">{t('tools', lang)}</p>
        <h1 className="mt-2.5 font-serif text-[34px] font-semibold leading-[1.08] text-atlas-ink">
          {t('packingTitle', lang)}
        </h1>
        <p className="mt-2.5 text-sm leading-relaxed text-atlas-muted">
          {t('packingSubtitle', lang)}
        </p>
      </header>

      {/* ---- Country ---------------------------------------------------- */}
      <p className="kicker mb-2.5 mt-7">{t('selectCountry', lang)}</p>
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2">
        {countries.map((c) => (
          <Chip
            key={c.slug}
            active={countrySlug === c.slug}
            onClick={() => {
              setCountrySlug(c.slug)
              setCitySlug(null)
            }}
          >
            <span>{c.flag}</span>
            {pick(c.name, lang)}
          </Chip>
        ))}
      </div>

      {/* ---- City (when the country has any) ---------------------------- */}
      {needsCity && (
        <>
          <p className="kicker mb-2.5 mt-5">{t('selectCity', lang)}</p>
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2">
            {countryCities.map((c) => (
              <Chip
                key={c.slug}
                active={citySlug === c.slug}
                onClick={() => setCitySlug(c.slug)}
              >
                <MapPin size={13} />
                {pick(c.name, lang)}
              </Chip>
            ))}
          </div>
        </>
      )}

      {/* ---- Month + result — Premium ----------------------------------- */}
      <PremiumGate>
        {(!needsCity || city) && (
          <>
            <div className="mb-2.5 mt-5 flex items-center gap-2">
              <p className="kicker">{t('selectMonth', lang)}</p>
              <ProBadge />
            </div>
            <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2">
              {monthNames[lang].map((m, i) => (
                <Chip key={m} active={month === i} onClick={() => setMonth(i)}>
                  {m}
                </Chip>
              ))}
            </div>

            {/* Keyed so a new selection re-enters instead of swapping in place. */}
            <div
              key={`${country.slug}-${citySlug ?? ''}-${month}`}
              className="animate-fade-up mt-7 overflow-hidden rounded-3xl border border-atlas-line bg-atlas-surface shadow-card"
            >
              <div className="flex items-center gap-3.5 border-b border-atlas-line p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-atlas-clay/[0.09] text-atlas-clay">
                  <Luggage size={20} />
                </div>
                <div className="min-w-0">
                  <h2 className="truncate font-serif text-[20px] font-semibold leading-tight text-atlas-ink">
                    {country.flag} {city ? pick(city.name, lang) : pick(country.name, lang)}
                  </h2>
                  <p className="mt-0.5 text-[11px] font-medium text-atlas-muted">
                    {monthNames[lang][month]} · {seasonNames[season][lang]}
                  </p>
                </div>
              </div>
              <ul className="divide-y divide-atlas-line">
                {list.map((item, i) => (
                  <li
                    key={item}
                    style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
                    className="animate-fade-in flex items-start gap-3 px-5 py-3.5 text-[14px] leading-relaxed text-atlas-body"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-atlas-clay/[0.09] text-atlas-clay">
                      <Check size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </PremiumGate>

      <Link
        to={city ? `/city/${city.slug}` : `/country/${country.slug}`}
        className="tap mt-5 flex items-center justify-center gap-2 rounded-full border border-dashed border-atlas-line bg-atlas-surface/60 py-3.5 text-sm font-medium text-atlas-muted transition-colors hover:border-atlas-clay/40 hover:text-atlas-body"
      >
        {city ? pick(city.name, lang) : pick(country.name, lang)}
        <ArrowRight size={15} className="rtl:rotate-180" />
      </Link>
    </div>
  )
}
