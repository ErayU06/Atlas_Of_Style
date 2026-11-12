import { Link } from 'react-router'
import { countries } from '@/data/countries'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { regionLabel } from '@/i18n'

/**
 * Ülke adının görselin üstünde nasıl duracağına dair varyant denemesi.
 * Yalnızca `/demo-titles` rotasında; hiçbir uygulama bileşenine dokunmuyor.
 */

const INK = '#0C1116'
const CLAY = '#c2603a'
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")"

const SAMPLE = ['turkiye', 'japan', 'morocco']

export default function DemoTitlesPage() {
  const { lang } = useApp()
  const list = SAMPLE.map((s) => countries.find((c) => c.slug === s)!).filter(Boolean)

  return (
    <div className="min-h-screen px-5 pb-20" style={{ background: INK, paddingTop: 'calc(1.5rem + var(--safe-top))' }}>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40"
        style={{ backgroundImage: GRAIN, opacity: 0.045, mixBlendMode: 'overlay' }}
      />
      <h1 className="font-serif text-[24px] font-semibold text-white">Ülke adı — varyantlar</h1>
      <p className="mt-1 text-[13px] text-white/50">Aynı kart, dört ayrı yazı yerleşimi.</p>

      {[
        { n: 'A', t: 'Editoryal — ince çizgi + gölgeli serif', C: VariantA },
        { n: 'B', t: 'Pasaport damgası — mühür rozeti', C: VariantB },
        { n: 'C', t: 'Cam levha — buzlu panel', C: VariantC },
        { n: 'D', t: 'Taşan başlık — görselin kenarını aşan isim', C: VariantD },
        { n: 'E', t: 'Binen başlık — isim görselin alt kenarına biniyor', C: VariantE },
      ].map(({ n, t, C }) => (
        <section key={n} className="mt-9">
          <div className="flex items-baseline gap-2">
            <span
              className="grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold text-white"
              style={{ background: CLAY }}
            >
              {n}
            </span>
            <h2 className="text-[13px] font-semibold text-white/80">{t}</h2>
          </div>
          <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto pb-1">
            {list.map((c) => (
              <C key={c.slug} c={c} lang={lang} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

type Props = { c: (typeof countries)[number]; lang: ReturnType<typeof useApp>['lang'] }

function Shell({ c, children, extra = '' }: { c: Props['c']; children: React.ReactNode; extra?: string }) {
  return (
    <Link
      to={`/country/${c.slug}`}
      className={`relative w-[176px] shrink-0 overflow-hidden rounded-[20px] ${extra}`}
      style={{ boxShadow: '0 16px 34px -20px rgba(0,0,0,.9)' }}
    >
      <img src={`/images/${c.slug}-1.jpg`} alt="" className="aspect-[3/4] w-full object-cover" />
      {children}
    </Link>
  )
}

/** A — ince terracotta çizgi, harf aralıklı bölge, gölgeli serif isim. */
function VariantA({ c, lang }: Props) {
  return (
    <Shell c={c}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-8">
        <span className="block h-[2px] w-7 rounded-full" style={{ background: CLAY }} />
        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.26em] text-white/65">
          {regionLabel(c.region, lang)}
        </p>
        <h3
          className="mt-1 font-serif text-[25px] font-semibold leading-none text-white"
          style={{ textShadow: '0 2px 22px rgba(0,0,0,.75)' }}
        >
          {pick(c.name, lang)}
        </h3>
      </div>
    </Shell>
  )
}

/** B — pasaport mührü: hafif döndürülmüş çerçeve içinde bayrak + bölge. */
function VariantB({ c, lang }: Props) {
  return (
    <Shell c={c}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/12 to-transparent" />
      <div
        className="absolute right-3 top-3 rounded-[10px] px-2 py-1 text-center"
        style={{
          border: '1.5px solid rgba(255,255,255,.55)',
          transform: 'rotate(-7deg)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <span className="text-[13px] leading-none">{c.flag}</span>
        <p className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.18em] text-white/85">
          {regionLabel(c.region, lang)}
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-8">
        <h3
          className="font-serif text-[26px] font-semibold leading-none text-white"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,.8)' }}
        >
          {pick(c.name, lang)}
        </h3>
        <p className="mt-1.5 line-clamp-1 text-[10px] text-white/60">{pick(c.tagline, lang)}</p>
      </div>
    </Shell>
  )
}

/** C — altta buzlu cam levha; isim panelin içinde. */
function VariantC({ c, lang }: Props) {
  return (
    <Shell c={c}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
      <div
        className="absolute inset-x-2.5 bottom-2.5 rounded-[14px] px-3 py-2.5"
        style={{
          background: 'rgba(12,17,22,.55)',
          backdropFilter: 'blur(14px)',
          border: '1px solid rgba(255,255,255,.14)',
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] leading-none">{c.flag}</span>
          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/60">
            {regionLabel(c.region, lang)}
          </p>
        </div>
        <h3 className="mt-1 font-serif text-[21px] font-semibold leading-none text-white">
          {pick(c.name, lang)}
        </h3>
      </div>
    </Shell>
  )
}

/** D — isim görselin alt kenarını aşıyor, zemine taşıyor. */
function VariantD({ c, lang }: Props) {
  return (
    <div className="relative w-[176px] shrink-0 pb-9">
      <Link
        to={`/country/${c.slug}`}
        className="relative block overflow-hidden rounded-[20px]"
        style={{ boxShadow: '0 16px 34px -20px rgba(0,0,0,.9)' }}
      >
        <img src={`/images/${c.slug}-1.jpg`} alt="" className="aspect-[3/4] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
      </Link>
      <div className="absolute inset-x-0 bottom-0 px-1">
        <h3
          className="font-serif text-[27px] font-semibold leading-none text-white"
          style={{ textShadow: '0 3px 16px rgba(12,17,22,.95)' }}
        >
          {pick(c.name, lang)}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
          <span className="inline-block h-[2px] w-4 rounded-full" style={{ background: CLAY }} />
          {regionLabel(c.region, lang)}
        </p>
      </div>
    </div>
  )
}

/** E — isim görselin alt kenarına biniyor: yarısı görselde, yarısı zeminde. */
function VariantE({ c, lang }: Props) {
  return (
    <div className="relative w-[176px] shrink-0 pb-6">
      <Link
        to={`/country/${c.slug}`}
        className="relative block overflow-hidden rounded-[20px]"
        style={{ boxShadow: '0 16px 34px -20px rgba(0,0,0,.9)' }}
      >
        <img src={`/images/${c.slug}-1.jpg`} alt="" className="aspect-[3/4] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-3 px-3">
          <p className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
            <span className="inline-block h-[2px] w-4 rounded-full" style={{ background: CLAY }} />
            {regionLabel(c.region, lang)}
          </p>
        </div>
      </Link>
      {/* isim kartın alt kenarını keserek aşağı taşıyor */}
      <h3
        className="pointer-events-none absolute inset-x-0 -bottom-0.5 px-2 font-serif text-[30px] font-semibold leading-none text-white"
        style={{ textShadow: '0 2px 14px rgba(12,17,22,.9), 0 0 32px rgba(12,17,22,.7)' }}
      >
        {pick(c.name, lang)}
      </h3>
    </div>
  )
}
