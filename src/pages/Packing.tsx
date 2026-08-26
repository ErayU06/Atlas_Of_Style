import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router'
import { ChevronLeft, Check, Luggage, MapPin } from 'lucide-react'
import { countries } from '@/data/countries'
import { citiesByCountry, getCity } from '@/data/cities'
import { getPackingList, seasonForMonth, seasonNames, monthNames } from '@/data/packing'
import { getCityPackingList } from '@/data/packing-cities'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'
import PremiumGate from '@/components/PremiumGate'
import ProBadge from '@/components/ProBadge'

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
        className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm"
      >
        <ChevronLeft size={16} />
        {t('back', lang)}
      </Link>

      <h1 className="mt-4 font-serif text-4xl font-semibold text-stone-900">
        {t('packingTitle', lang)}
      </h1>
      <p className="mt-1.5 text-sm text-stone-500">{t('packingSubtitle', lang)}</p>

      {/* Country select */}
      <p className="mb-2 mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">
        {t('selectCountry', lang)}
      </p>
      <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {countries.map((c) => (
          <button
            key={c.slug}
            onClick={() => {
              setCountrySlug(c.slug)
              setCitySlug(null)
            }}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition-colors ${
              countrySlug === c.slug
                ? 'bg-[#c2603a] text-white shadow-sm'
                : 'border border-stone-200 bg-white text-stone-600'
            }`}
          >
            <span>{c.flag}</span>
            {pick(c.name, lang)}
          </button>
        ))}
      </div>

      {/* City select (if the country has cities) */}
      {needsCity && (
        <>
          <p className="mb-2 mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">
            {t('selectCity', lang)}
          </p>
          <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {countryCities.map((c) => (
              <button
                key={c.slug}
                onClick={() => setCitySlug(c.slug)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition-colors ${
                  citySlug === c.slug
                    ? 'bg-[#c2603a] text-white shadow-sm'
                    : 'border border-stone-200 bg-white text-stone-600'
                }`}
              >
                <MapPin size={13} />
                {pick(c.name, lang)}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Month select + result — Premium */}
      <PremiumGate>
        {(!needsCity || city) && (
          <>
            <div className="mb-2 mt-4 flex items-center gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                {t('selectMonth', lang)}
              </p>
              <ProBadge />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {monthNames[lang].map((m, i) => (
                <button
                  key={m}
                  onClick={() => setMonth(i)}
                  className={`shrink-0 rounded-full px-3.5 py-2 text-sm transition-colors ${
                    month === i
                      ? 'bg-[#c2603a] text-white shadow-sm'
                      : 'border border-stone-200 bg-white text-stone-600'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* Result */}
            <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c2603a]/10 text-[#c2603a]">
                  <Luggage size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-stone-900">
                    {country.flag} {city ? pick(city.name, lang) : pick(country.name, lang)} ·{' '}
                    {monthNames[lang][month]}
                  </h3>
                  <p className="text-xs text-stone-400">
                    {seasonNames[season][lang]} · {t('packingFor', lang)}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2.5">
                {list.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-stone-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c2603a]/10 text-[#c2603a]">
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
        className="mt-4 block rounded-2xl border border-dashed border-stone-300 bg-white/60 p-4 text-center text-sm text-stone-500 transition-colors hover:border-[#c2603a]/40"
      >
        {city ? pick(city.name, lang) : pick(country.name, lang)} →
      </Link>
    </div>
  )
}
