import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, Search, Sparkles } from 'lucide-react'
import { countries } from '@/data/countries'
import { eraOfTheDay } from '@/data/eras'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { t, regions, regionLabel } from '@/i18n'
import FashionCard from '@/components/FashionCard'
import FavoriteButton from '@/components/FavoriteButton'
import FashionPassport from '@/components/FashionPassport'
import SectionHeading from '@/components/SectionHeading'
import SmartImage from '@/components/SmartImage'
import EmptyState from '@/components/EmptyState'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { Button } from '@/components/ui/button'

/**
 * Both rotations are resolved once, when the module loads. Reading the clock
 * during render is impure — and a session lasts minutes, so there is nothing
 * to gain from re-deriving them on every re-render.
 */
const WEEK_MS = 7 * 24 * 3600 * 1000
const STORY_OF_THE_WEEK = countries[Math.floor(Date.now() / WEEK_MS) % countries.length]
const ERA_OF_THE_DAY = eraOfTheDay()

export default function HomePage() {
  const { lang, favorites, discovery } = useApp()
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return countries.filter((c) => {
      const matchesRegion = region === 'all' || c.region === region
      const matchesQuery =
        !q ||
        c.name.tr.toLowerCase().includes(q) ||
        c.name.en.toLowerCase().includes(q) ||
        pick(c.tagline, lang).toLowerCase().includes(q)
      return matchesRegion && matchesQuery
    })
  }, [query, region, lang])

  // Same weekly / daily rotation the app already used, resolved at module load.
  const story = STORY_OF_THE_WEEK
  const era = ERA_OF_THE_DAY

  // Recently opened countries, newest first, minus the one already featured.
  const continueList = useMemo(
    () =>
      [...discovery.countries]
        .reverse()
        .filter((slug) => slug !== story.slug)
        .map((slug) => countries.find((c) => c.slug === slug))
        .filter((c): c is (typeof countries)[number] => Boolean(c))
        .slice(0, 6),
    [discovery.countries, story.slug],
  )

  const favCountries = countries.filter((c) => favorites.includes(c.slug))

  return (
    <div className="mx-auto max-w-md pb-28">
      {/* ---- Hero: the first three seconds ------------------------------ */}
      <header className="relative">
        <SmartImage
          src="/images/eras/atlas-hero.jpg"
          alt="Garments from different decades displayed in a fashion museum"
          ratio="portrait"
          priority
        >
          {/* The plate dissolves into the page rather than ending on a hard
              edge, and the headline rides the blank wall at the top. */}
          <div
            className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-atlas-paper/80 via-atlas-paper/25 to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-atlas-paper to-transparent"
            aria-hidden
          />
        </SmartImage>

        <div className="absolute inset-x-0 top-0 px-6 pt-7">
          <div className="flex items-start justify-between gap-3">
            <p className="kicker mt-1 text-atlas-clay">{t('homeKicker', lang)}</p>
            <LanguageSwitcher />
          </div>
          <h1 className="mt-3 max-w-[11ch] font-serif text-[34px] font-semibold leading-[1.05] text-atlas-ink">
            {t('timeTravelTitle', lang)}
          </h1>
        </div>

        <div className="relative -mt-3 px-6">
          <p className="max-w-[34ch] text-[13px] leading-relaxed text-atlas-body">
            {t('heroSubtitle', lang)}
          </p>
          <Button asChild variant="atlas" size="pill" className="mt-4">
            <Link to="/time-travel">
              {t('startTravelling', lang)}
              <ArrowRight size={16} className="rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </header>

      {/* ---- Today's fashion story -------------------------------------- */}
      <section className="mt-9 px-5">
        <SectionHeading kicker={t('storyKicker', lang)} title={t('todaysStory', lang)} />
        <FashionCard
          to={`/country/${story.slug}`}
          image={`/images/${story.slug}-1.jpg`}
          imageAlt={`${story.name.en} everyday street style`}
          ratio="story"
          kicker={regionLabel(story.region, lang)}
          emblem={story.flag}
          title={pick(story.name, lang)}
          description={pick(story.tagline, lang)}
          cta={t('readStory', lang)}
          badge={
            <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-atlas-clay backdrop-blur">
              <Sparkles size={11} />
              {t('featured', lang)}
            </span>
          }
          action={<FavoriteButton slug={story.slug} variant="glass" size={17} />}
        />
      </section>

      {/* ---- Featured era ----------------------------------------------- */}
      <section className="mt-10 px-5">
        <SectionHeading
          kicker={t('timeTravel', lang)}
          title={t('featuredEra', lang)}
          action={{ to: '/time-travel', label: t('timeline', lang) }}
        />
        <FashionCard
          to={`/time-travel/${era.id}`}
          image={era.image}
          imageAlt={`${era.label} fashion silhouette`}
          ratio="story"
          kicker={era.span}
          title={pick(era.title, lang)}
          description={pick(era.tagline, lang)}
          cta={t('exploreEra', lang)}
        />
      </section>

      {/* ---- Continue exploring ----------------------------------------- */}
      {continueList.length > 0 && (
        <section className="mt-10">
          <div className="px-5">
            <SectionHeading
              kicker={t('passport', lang)}
              title={t('continueExploring', lang)}
            />
          </div>
          <div className="no-scrollbar flex gap-3 overflow-x-auto px-5 pb-2">
            {continueList.map((c, i) => (
              <FashionCard
                key={c.slug}
                to={`/country/${c.slug}`}
                image={`/images/${c.slug}-1.jpg`}
                imageAlt={`${c.name.en} everyday street style`}
                size="sm"
                ratio="portrait"
                title={pick(c.name, lang)}
                index={i}
                className="w-[132px] shrink-0"
              />
            ))}
          </div>
        </section>
      )}

      {/* ---- Explore by country ----------------------------------------- */}
      <section className="mt-10 px-5">
        <SectionHeading
          kicker={`${countries.length} ${t('countriesCount', lang)}`}
          title={t('exploreByCountry', lang)}
        />

        <div className="relative">
          <Search
            size={17}
            className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-atlas-muted/60"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('searchPlaceholder', lang)}
            aria-label={t('searchPlaceholder', lang)}
            className="w-full rounded-full border border-atlas-line bg-atlas-surface py-3 pe-4 ps-11 text-sm text-atlas-ink shadow-card outline-none transition-colors placeholder:text-atlas-muted/70 focus:border-atlas-clay/50"
          />
        </div>

        <div className="no-scrollbar -mx-5 mt-3.5 flex gap-2 overflow-x-auto px-5 pb-1">
          {regions.map((r) => (
            <button
              key={r.key}
              onClick={() => setRegion(r.key)}
              aria-pressed={region === r.key}
              className={`tap shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                region === r.key
                  ? 'bg-atlas-clay text-white shadow-card'
                  : 'border border-atlas-line bg-atlas-surface text-atlas-muted hover:border-atlas-clay/30'
              }`}
            >
              {pick(r.label, lang)}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-4 grid grid-cols-2 gap-3">
            {filtered.map((c, i) => (
              <FashionCard
                key={c.slug}
                to={`/country/${c.slug}`}
                image={`/images/${c.slug}-1.jpg`}
                imageAlt={`${c.name.en} everyday street style`}
                size="sm"
                ratio="editorial"
                kicker={regionLabel(c.region, lang)}
                title={pick(c.name, lang)}
                index={i}
                action={<FavoriteButton slug={c.slug} variant="glass" size={15} />}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            className="mt-5"
            illustration="search"
            title={t('noResultsTitle', lang)}
            description={t('noResults', lang)}
            action={
              <Button
                variant="atlasSoft"
                size="pill-sm"
                onClick={() => {
                  setQuery('')
                  setRegion('all')
                }}
              >
                {t('browseCountries', lang)}
              </Button>
            }
          />
        )}
      </section>

      {/* ---- Your collection -------------------------------------------- */}
      <section className="mt-11 px-5">
        <SectionHeading
          kicker={t('collection', lang)}
          title={t('yourCollection', lang)}
          action={
            favCountries.length > 0
              ? { to: '/favorites', label: t('viewAll', lang) }
              : undefined
          }
        />
        {favCountries.length > 0 && (
          <div className="no-scrollbar -mx-5 mb-4 flex gap-3 overflow-x-auto px-5 pb-2">
            {favCountries.slice(0, 6).map((c, i) => (
              <FashionCard
                key={c.slug}
                to={`/country/${c.slug}`}
                image={`/images/${c.slug}-1.jpg`}
                imageAlt={`${c.name.en} everyday street style`}
                size="sm"
                ratio="portrait"
                title={pick(c.name, lang)}
                index={i}
                className="w-[132px] shrink-0"
              />
            ))}
          </div>
        )}
        <FashionPassport variant="preview" />
      </section>

      <footer className="mt-10 px-5 text-center text-[11px] text-atlas-muted">
        {t('footer', lang)}
      </footer>
    </div>
  )
}
