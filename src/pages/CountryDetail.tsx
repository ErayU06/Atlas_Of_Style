import { Link, useParams, Navigate } from 'react-router'
import { ChevronLeft, Heart, Camera, ChevronRight } from 'lucide-react'
import { countries } from '@/data/countries'
import { citiesByCountry } from '@/data/cities'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { t, regionLabel, sectionMeta } from '@/i18n'
import ProBadge from '@/components/ProBadge'
import PremiumGate from '@/components/PremiumGate'

export default function CountryDetailPage() {
  const { slug } = useParams()
  const { lang, toggleFavorite, isFavorite } = useApp()
  const country = countries.find((c) => c.slug === slug)

  if (!country) return <Navigate to="/" replace />

  const fav = isFavorite(country.slug)
  const others = countries.filter((c) => c.slug !== country.slug).slice(0, 6)
  const countryCities = citiesByCountry(country.slug)

  const img = (n: number) => `/images/${country.slug}-${n}.jpg`
  const imgAlt = `${country.name.en} everyday street style`

  const StyleFigure = ({ n }: { n: number }) => (
    <figure className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <img
        src={img(n)}
        alt={imgAlt}
        loading="lazy"
        className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
      />
      <figcaption className="flex items-center gap-1.5 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400">
        <Camera size={13} />
        {t('everydayStyle', lang)}
      </figcaption>
    </figure>
  )

  return (
    <div className="mx-auto max-w-md pb-28">
      {/* Hero with photo */}
      <div className="relative">
        <img
          src={img(1)}
          alt={imgAlt}
          className="aspect-[4/5] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-1 rounded-full bg-white/85 px-3 py-1.5 text-xs font-medium text-stone-700 shadow-sm backdrop-blur transition-colors hover:text-stone-900"
          >
            <ChevronLeft size={16} />
            {t('back', lang)}
          </Link>
          <button
            onClick={() => toggleFavorite(country.slug)}
            className="rounded-full bg-white/85 p-2.5 shadow-sm backdrop-blur transition-transform hover:scale-105"
            aria-label="favorite"
          >
            <Heart
              size={18}
              className={fav ? 'fill-[#c2603a] text-[#c2603a]' : 'text-stone-500'}
            />
          </button>
        </div>
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <div className="text-4xl">{country.flag}</div>
          <h1 className="mt-1 font-serif text-4xl font-semibold drop-shadow">
            {pick(country.name, lang)}
          </h1>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
            {regionLabel(country.region, lang)}
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="px-5 pt-6">
        <h2 className="font-serif text-xl font-semibold text-stone-900">
          {pick(country.tagline, lang)}
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-stone-500">
          {pick(country.intro, lang)}
        </p>
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

      {/* City destinations (premium) */}
      {countryCities.length > 0 && (
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between px-5">
            <div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                {t('destinations', lang)}
              </h3>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">
                {t('citiesSubtitle', lang)}
              </p>
            </div>
            <ProBadge />
          </div>
          <PremiumGate>
            <div className="flex flex-col gap-2.5 px-5">
              {countryCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/city/${city.slug}`}
                  className="group flex items-center gap-3.5 rounded-2xl border border-stone-200 bg-white p-3 shadow-sm transition-all hover:border-[#c2603a]/40 hover:shadow-md"
                >
                  <img
                    src={`/images/city-${city.slug}.jpg`}
                    alt={`${city.name.en} ambiance`}
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-base font-semibold text-stone-900">
                      {pick(city.name, lang)}
                    </p>
                    <p className="truncate text-xs text-stone-500">
                      {pick(city.tagline, lang)}
                    </p>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c2603a]/10 text-[#c2603a] transition-colors group-hover:bg-[#c2603a] group-hover:text-white">
                    <ChevronRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </PremiumGate>
        </div>
      )}

      {/* Sections interleaved with photos */}
      <div className="mt-6 space-y-4 px-5">
        {country.sections.map((s, i) => {
          const meta = sectionMeta[s.key]
          return (
            <div key={s.key} className="space-y-4">
              <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-sm font-semibold text-[#c2603a]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-stone-900">
                      {pick(meta.title, lang)}
                    </h3>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">
                      {pick(meta.subtitle, lang)}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {pick(s.text, lang)}
                </p>
              </section>
              {i === 1 && <StyleFigure n={2} />}
              {i === 3 && <StyleFigure n={3} />}
            </div>
          )
        })}
      </div>

      {/* Explore more */}
      <div className="mt-10 px-5">
        <h3 className="mb-4 font-serif text-lg font-semibold text-stone-900">
          {t('exploreMore', lang)}
        </h3>
        <div className="flex flex-wrap gap-2">
          {others.map((c) => (
            <Link
              key={c.slug}
              to={`/country/${c.slug}`}
              className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600 shadow-sm transition-colors hover:border-[#c2603a]/40"
            >
              <span>{c.flag}</span>
              {pick(c.name, lang)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
