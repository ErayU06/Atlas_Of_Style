import { useEffect, useMemo } from 'react'
import { Link, useParams, Navigate } from 'react-router'
import { ChevronLeft, Camera, ArrowRight } from 'lucide-react'
import { countries } from '@/data/countries'
import { citiesByCountry } from '@/data/cities'
import { eras } from '@/data/eras'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { t, regionLabel, sectionMeta } from '@/i18n'
import ProBadge from '@/components/ProBadge'
import PremiumGate from '@/components/PremiumGate'
import SmartImage from '@/components/SmartImage'
import SectionHeading from '@/components/SectionHeading'
import FashionCard from '@/components/FashionCard'
import FavoriteButton from '@/components/FavoriteButton'
import { Button } from '@/components/ui/button'

export default function CountryDetailPage() {
  const { slug } = useParams()
  const { lang, discover } = useApp()
  const country = countries.find((c) => c.slug === slug)

  // Opening a country stamps the passport. Guarded on the slug so a re-render
  // never re-fires it.
  useEffect(() => {
    if (country) discover('country', country.slug)
  }, [country, discover])

  const linkedEras = useMemo(
    () => (country ? eras.filter((e) => e.countries.includes(country.slug)) : []),
    [country],
  )

  if (!country) return <Navigate to="/" replace />

  const others = countries.filter((c) => c.slug !== country.slug).slice(0, 6)
  const countryCities = citiesByCountry(country.slug)

  const img = (n: number) => `/images/${country.slug}-${n}.jpg`
  const imgAlt = `${country.name.en} everyday street style`

  /** A full-bleed photographic plate, the way a museum breaks up wall text. */
  const Plate = ({ n }: { n: number }) => (
    <figure className="mt-8">
      <SmartImage src={img(n)} alt={imgAlt} ratio="editorial" />
      <figcaption className="flex items-center gap-1.5 px-6 pt-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-atlas-muted">
        <Camera size={12} />
        {t('everydayStyle', lang)} · {pick(country.name, lang)}
      </figcaption>
    </figure>
  )

  return (
    <div className="mx-auto max-w-md pb-[calc(7rem+var(--safe-bottom))]">
      {/* ---- Hero plate -------------------------------------------------- */}
      <div className="relative">
        <SmartImage src={img(1)} alt={imgAlt} ratio="portrait" priority>
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25"
            aria-hidden
          />
        </SmartImage>

        <div className="absolute inset-x-5 top-[calc(1.25rem+var(--safe-top))] flex items-center justify-between">
          <Link
            to="/"
            className="tap flex items-center gap-1 rounded-full bg-atlas-surface/85 px-3 py-1.5 text-xs font-semibold text-atlas-body shadow-card backdrop-blur-md"
          >
            <ChevronLeft size={16} className="rtl:rotate-180" />
            {t('back', lang)}
          </Link>
          <FavoriteButton slug={country.slug} variant="glass" size={18} />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <div className="text-3xl leading-none">{country.flag}</div>
          <h1 className="mt-2 font-serif text-[40px] font-semibold leading-[1.02] drop-shadow-sm">
            {pick(country.name, lang)}
          </h1>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
            {regionLabel(country.region, lang)}
          </p>
        </div>
      </div>

      {/* ---- Standfirst: full-width, no card ---------------------------- */}
      <div className="px-6 pt-7">
        <h2 className="font-serif text-[24px] font-semibold leading-snug text-atlas-ink">
          {pick(country.tagline, lang)}
        </h2>
        <p className="mt-3 text-[15px] leading-[1.65] text-atlas-body">
          {pick(country.intro, lang)}
        </p>
      </div>

      <div className="mt-6 px-5">
        <Button asChild variant="atlasSoft" size="pill" className="w-full">
          <Link to={`/packing/${country.slug}`}>
            🧳 {t('whatToWear', lang)}
            <ProBadge />
          </Link>
        </Button>
      </div>

      {/* ---- This country through time --------------------------------- */}
      {linkedEras.length > 0 && (
        <section className="mt-10">
          <div className="px-5">
            <SectionHeading kicker={t('timeTravel', lang)} title={t('eras', lang)} />
          </div>
          <div className="no-scrollbar flex gap-3 overflow-x-auto px-5 pb-2">
            {linkedEras.map((e, i) => (
              <FashionCard
                key={e.id}
                to={`/time-travel/${e.id}`}
                image={e.image}
                imageAlt={`${e.label} fashion silhouette`}
                size="sm"
                ratio="portrait"
                kicker={e.label}
                title={pick(e.title, lang)}
                index={i}
                className="w-[140px] shrink-0"
              />
            ))}
          </div>
        </section>
      )}

      {/* ---- City destinations (premium) -------------------------------- */}
      {countryCities.length > 0 && (
        <section className="mt-10 px-5">
          <SectionHeading
            kicker={t('citiesSubtitle', lang)}
            title={t('destinations', lang)}
          />
          <PremiumGate>
            <div className="flex flex-col gap-2.5">
              {countryCities.map((city, i) => (
                <FashionCard
                  key={city.slug}
                  variant="row"
                  to={`/city/${city.slug}`}
                  image={`/images/city-${city.slug}.jpg`}
                  imageAlt={`${city.name.en} ambiance`}
                  title={pick(city.name, lang)}
                  description={pick(city.tagline, lang)}
                  index={i}
                />
              ))}
            </div>
          </PremiumGate>
        </section>
      )}

      {/* ---- Wall labels: numbered chapters, photography between -------- */}
      <div className="mt-10">
        <div className="px-5">
          <SectionHeading
            kicker={pick(country.name, lang)}
            title={t('storyKicker', lang)}
          />
        </div>
        {country.sections.map((s, i) => {
          const meta = sectionMeta[s.key]
          return (
            <div key={s.key}>
              <section className="px-6 py-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-sm font-semibold text-atlas-clay">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-[21px] font-semibold leading-tight text-atlas-ink">
                      {pick(meta.title, lang)}
                    </h3>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-atlas-muted">
                      {pick(meta.subtitle, lang)}
                    </p>
                  </div>
                </div>
                <p className="mt-3.5 text-[15px] leading-[1.65] text-atlas-body">
                  {pick(s.text, lang)}
                </p>
              </section>
              {i === 1 && <Plate n={2} />}
              {i === 3 && <Plate n={3} />}
              {i !== 1 && i !== 3 && i < country.sections.length - 1 && (
                <div className="mx-6 h-px bg-atlas-line" />
              )}
            </div>
          )
        })}
      </div>

      {/* ---- Explore more ---------------------------------------------- */}
      <section className="mt-10 px-5">
        <SectionHeading
          kicker={t('exploreByCountry', lang)}
          title={t('exploreMore', lang)}
        />
        <div className="flex flex-wrap gap-2">
          {others.map((c) => (
            <Link
              key={c.slug}
              to={`/country/${c.slug}`}
              className="tap flex items-center gap-2 rounded-full border border-atlas-line bg-atlas-surface px-4 py-2 text-sm text-atlas-body shadow-card transition-colors hover:border-atlas-clay/40"
            >
              <span>{c.flag}</span>
              {pick(c.name, lang)}
            </Link>
          ))}
        </div>
        <Link
          to="/time-travel"
          className="tap mt-5 flex items-center justify-center gap-1.5 text-xs font-semibold text-atlas-clay"
        >
          {t('timeTravelTitle', lang)}
          <ArrowRight size={14} className="rtl:rotate-180" />
        </Link>
      </section>
    </div>
  )
}
