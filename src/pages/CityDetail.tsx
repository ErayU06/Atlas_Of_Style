import { Link, useParams, Navigate } from 'react-router'
import { ChevronLeft, MapPin, Thermometer, Camera } from 'lucide-react'
import { getCity } from '@/data/cities'
import { countries } from '@/data/countries'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'
import ProBadge from '@/components/ProBadge'
import PremiumGate from '@/components/PremiumGate'

export default function CityDetailPage() {
  const { slug } = useParams()
  const { lang } = useApp()
  const city = getCity(slug ?? '')
  const country = city ? countries.find((c) => c.slug === city.countrySlug) : undefined

  if (!city || !country) return <Navigate to="/" replace />

  return (
    <div className="mx-auto max-w-md pb-28">
      {/* Hero with photo */}
      <div className="relative">
        <img
          src={`/images/city-${city.slug}.jpg`}
          alt={`${city.name.en} everyday street style`}
          className="aspect-[4/5] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
          <Link
            to={`/country/${country.slug}`}
            className="flex items-center gap-1 rounded-full bg-white/85 px-3 py-1.5 text-xs font-medium text-stone-700 shadow-sm backdrop-blur transition-colors hover:text-stone-900"
          >
            <ChevronLeft size={16} />
            {t('backToCountry', lang)}
          </Link>
          <ProBadge />
        </div>
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <div className="text-4xl">{country.flag}</div>
          <h1 className="mt-1 font-serif text-4xl font-semibold drop-shadow">
            {pick(city.name, lang)}
          </h1>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
            {pick(country.name, lang)}
          </p>
        </div>
      </div>

      <PremiumGate>
        {/* Intro */}
        <div className="px-5 pt-6">
          <h2 className="font-serif text-xl font-semibold text-stone-900">
            {pick(city.tagline, lang)}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-stone-500">
            {pick(city.description, lang)}
          </p>
        </div>

        {/* Climate card */}
        <div className="mt-4 px-5">
          <div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c2603a]/10 text-[#c2603a]">
              <Thermometer size={18} />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                {t('climateLabel', lang)}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-stone-700">
                {pick(city.climate, lang)}
              </p>
            </div>
          </div>
        </div>

        {/* Packing link */}
        <div className="px-5 pt-4">
          <Link
            to={`/packing/${country.slug}`}
            className="flex items-center justify-center gap-2 rounded-full border border-[#c2603a]/30 bg-[#c2603a]/5 py-3 text-sm font-medium text-[#c2603a] transition-colors hover:bg-[#c2603a]/10"
          >
            🧳 {t('whatToWear', lang)} <ProBadge />
          </Link>
        </div>

        {/* Everyday style note */}
        <div className="mt-4 px-5">
          <div className="flex items-center gap-2 px-1 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400">
            <Camera size={13} />
            {t('everydayStyle', lang)}
          </div>
        </div>

        {/* Country link */}
        <div className="px-5 pt-4">
          <Link
            to={`/country/${country.slug}`}
            className="flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white py-3 text-sm font-medium text-stone-600 shadow-sm transition-colors hover:border-[#c2603a]/40"
          >
            <MapPin size={15} />
            {country.flag} {pick(country.name, lang)}
          </Link>
        </div>
      </PremiumGate>
    </div>
  )
}
