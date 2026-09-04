import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { eras, getEra, type Era } from '@/data/eras'
import { countries } from '@/data/countries'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'
import { useIsDark } from '@/hooks/useThemeMode'
import EraTimeline from '@/components/EraTimeline'
import SmartImage from '@/components/SmartImage'
import SectionHeading from '@/components/SectionHeading'
import FashionCard from '@/components/FashionCard'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { Button } from '@/components/ui/button'

/** How long the outgoing decade stays mounted underneath the new one. */
const CROSSFADE_MS = 700

export default function TimeTravelPage() {
  const { eraId } = useParams()
  const navigate = useNavigate()
  const { lang, discover } = useApp()
  const isDark = useIsDark()

  // The URL is the single source of truth for which decade is showing, so
  // deep links, the timeline and browser back/forward all agree with no
  // duplicated state to keep in sync.
  const era = (eraId && getEra(eraId)) || eras[1]
  const index = eras.findIndex((e) => e.id === era.id)

  // The decade being left behind — kept just long enough to crossfade under
  // the incoming one, so the hero never flashes an empty placeholder.
  const [outgoing, setOutgoing] = useState<Era | null>(null)

  // Opening an era stamps the passport.
  useEffect(() => {
    discover('era', era.id)
  }, [era.id, discover])

  const select = (id: string) => {
    if (id === era.id) return
    setOutgoing(era) // the decade we are leaving, kept for the crossfade
    navigate(`/time-travel/${id}`, { replace: true })
  }

  useEffect(() => {
    if (!outgoing) return
    const timer = window.setTimeout(() => setOutgoing(null), CROSSFADE_MS)
    return () => window.clearTimeout(timer)
  }, [outgoing])

  const tint = isDark ? era.tintDark : era.tint
  const wash = isDark ? era.washDark : era.wash

  const linked = useMemo(
    () =>
      era.countries
        .map((slug) => countries.find((c) => c.slug === slug))
        .filter((c): c is (typeof countries)[number] => Boolean(c)),
    [era.countries],
  )

  return (
    <div
      className="relative mx-auto max-w-md pb-28"
      // Both custom properties drive Tailwind's `era-*` colours, so the whole
      // screen re-tints from one place when the decade changes.
      style={{ ['--era-tint' as string]: tint, ['--era-wash' as string]: wash }}
    >
      {/* Ambient atmosphere: a slow wash that carries the era's palette. */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 transition-colors duration-700 ease-out"
        style={{ backgroundColor: `hsl(${wash})` }}
        aria-hidden
      />

      <header className="px-5 pt-9">
        <div className="flex items-center justify-between">
          <p className="kicker">{t('timeTravel', lang)}</p>
          <LanguageSwitcher />
        </div>
        <h1 className="mt-3 font-serif text-[34px] font-semibold leading-[1.1] text-atlas-ink">
          {t('timeTravelTitle', lang)}
        </h1>
        <p className="mt-2.5 text-sm leading-relaxed text-atlas-muted">
          {t('timeTravelSubtitle', lang)}
        </p>
      </header>

      <div className="mt-7 px-5">
        <EraTimeline
          eras={eras}
          activeId={era.id}
          onSelect={select}
          label={t('timeline', lang)}
        />
      </div>

      {/* --- Era portal ------------------------------------------------- */}
      <div className="relative mt-5 overflow-hidden">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-atlas-soft">
          {outgoing && (
            <img
              key={`out-${outgoing.id}`}
              src={outgoing.image}
              alt=""
              aria-hidden
              className="animate-portal-out absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div key={`in-${era.id}`} className="animate-portal-in absolute inset-0">
            <SmartImage
              src={era.image}
              alt={`${era.label} fashion silhouette`}
              ratio="fill"
              priority
              placeholder={!outgoing}
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"
            aria-hidden
          />

          <div key={`text-${era.id}`} className="animate-fade-up absolute inset-x-0 bottom-0 p-6 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/75">
              {era.span}
            </p>
            <h2 className="mt-2 font-serif text-[38px] font-semibold leading-[1.05] drop-shadow-sm">
              {pick(era.title, lang)}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              {pick(era.tagline, lang)}
            </p>
          </div>
        </div>

        {/* Step controls sit over the image edges — thumb-reachable on mobile. */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-3">
          <button
            type="button"
            aria-label={t('prevEra', lang)}
            disabled={index === 0}
            onClick={() => select(eras[index - 1].id)}
            className="tap pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-md transition-opacity disabled:opacity-0"
          >
            <ChevronLeft size={20} className="rtl:rotate-180" />
          </button>
          <button
            type="button"
            aria-label={t('nextEra', lang)}
            disabled={index === eras.length - 1}
            onClick={() => select(eras[index + 1].id)}
            className="tap pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-md transition-opacity disabled:opacity-0"
          >
            <ChevronRight size={20} className="rtl:rotate-180" />
          </button>
        </div>
      </div>

      {/* --- Full-width editorial passage ------------------------------- */}
      <section key={`body-${era.id}`} className="animate-fade-in px-6 pt-8">
        <p className="font-serif text-[19px] leading-[1.6] text-atlas-ink">
          {pick(era.description, lang)}
        </p>
      </section>

      {/* --- Pieces of the era ------------------------------------------ */}
      <section key={`items-${era.id}`} className="animate-fade-up mt-10 px-5">
        <SectionHeading kicker={era.label} title={t('eraItems', lang)} />
        <ol className="divide-y divide-atlas-line">
          {era.items.map((item, i) => (
            <li key={item.name.en} className="flex gap-4 py-4">
              <span className="mt-0.5 shrink-0 font-serif text-sm font-semibold text-era-tint">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0">
                <h4 className="font-serif text-[18px] font-semibold leading-snug text-atlas-ink">
                  {pick(item.name, lang)}
                </h4>
                <p className="mt-1 text-[13px] leading-relaxed text-atlas-muted">
                  {pick(item.note, lang)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* --- Countries carrying this era -------------------------------- */}
      <section className="mt-10 px-5">
        <SectionHeading kicker={t('eras', lang)} title={t('eraCountries', lang)} />
        <div className="space-y-2.5">
          {linked.map((c, i) => (
            <FashionCard
              key={c.slug}
              variant="row"
              to={`/country/${c.slug}`}
              image={`/images/${c.slug}-1.jpg`}
              imageAlt={`${c.name.en} everyday street style`}
              emblem={c.flag}
              title={pick(c.name, lang)}
              description={pick(c.tagline, lang)}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* --- Step to the next decade ------------------------------------ */}
      {index < eras.length - 1 && (
        <div className="mt-9 px-5">
          <Button
            variant="atlasSoft"
            size="pill"
            className="w-full"
            onClick={() => select(eras[index + 1].id)}
          >
            {eras[index + 1].label} · {pick(eras[index + 1].title, lang)}
            <ChevronRight size={16} className="rtl:rotate-180" />
          </Button>
        </div>
      )}

      <div className="mt-4 px-5">
        <Link
          to="/"
          className="tap block rounded-full border border-atlas-line bg-atlas-surface py-3 text-center text-sm font-medium text-atlas-muted shadow-card"
        >
          {t('backHome', lang)}
        </Link>
      </div>
    </div>
  )
}
