import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Heart,
  Home as HomeIcon,
  Hourglass,
  Plane,
  Search,
  SlidersHorizontal,
  User,
} from 'lucide-react'
import { countries } from '@/data/countries'
import { eras } from '@/data/eras'
import { cities } from '@/data/cities'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'

/**
 * Görsel yön denemesi — koyu tema, zenginleştirilmiş hâli.
 *
 * Yalnızca `/demo` rotasında yaşıyor. Uygulamanın hiçbir bileşenini,
 * token'ını veya stilini kullanmıyor/değiştirmiyor; renkleri yerel sabit,
 * böylece deneme canlı temaya sızamıyor. Beğenilmezse bu dosya silinir ve
 * uygulama bayt bayt eskisi olur.
 */

const INK = '#0C1116'
const INK_2 = '#121A21'
const CARD = '#172029'
const LINE = '#25313B'
const CLAY = '#c2603a'

/** Grenli doku: koyu yüzeylerin "düz dijital" durmasını engelleyen şey bu. */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")"

const WEEK_MS = 7 * 24 * 3600 * 1000
const START = Math.floor(Date.now() / WEEK_MS) % countries.length
const FEATURED = Array.from({ length: 5 }, (_, i) => countries[(START + i) % countries.length])
const TEXTURE = ['nigeria', 'india', 'morocco', 'norway', 'spain', 'japan']

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const on = () => setReduced(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduced
}

/** Bölümler görünür alana girdiğinde aşağıdan yumuşakça beliriyor. */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  const reduced = useReducedMotion()
  useEffect(() => {
    if (reduced) return setShown(true)
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { rootMargin: '-40px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduced])
  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(18px)',
        transition: `opacity .6s ease ${delay}ms, transform .6s cubic-bezier(.2,.7,.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function DemoHomePage() {
  const { lang, favorites, toggleFavorite, discovery } = useApp()
  const [query, setQuery] = useState('')
  const [slide, setSlide] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const touchX = useRef(0)
  const reduced = useReducedMotion()

  /* Kapak karuseli kendiliğinden ilerliyor; parmakla da kaydırılıyor. */
  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setSlide((s) => (s + 1) % FEATURED.length), 5200)
    return () => clearInterval(id)
  }, [reduced])

  /* Kaydırmada: başlık çubuğu belirir, kapak görseli yavaş kayar (paralaks). */
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        setScrolled(y > 28)
        if (heroRef.current && !reduced) {
          heroRef.current.style.transform = `translate3d(0, ${Math.min(y * 0.18, 60)}px, 0) scale(1.08)`
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [reduced])

  const trending = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = q
      ? countries.filter(
          (c) =>
            pick(c.name, lang).toLowerCase().includes(q) ||
            pick(c.tagline, lang).toLowerCase().includes(q),
        )
      : countries.filter((c) => c.slug !== FEATURED[slide].slug)
    return list.slice(0, 10)
  }, [query, lang, slide])

  const hero = FEATURED[slide]
  const guideCities = cities.slice(0, 6)
  const stamps = discovery.countries.length + discovery.eras.length

  return (
    <div className="relative min-h-screen pb-32" style={{ background: INK }}>
      {/* Gren — bütün sayfanın üstünde, tıklanamaz. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40"
        style={{ backgroundImage: GRAIN, opacity: 0.045, mixBlendMode: 'overlay' }}
      />
      {/* Kapağın arkasındaki sıcak ışık. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background: `radial-gradient(120% 70% at 50% 0%, rgba(194,96,58,.26) 0%, rgba(194,96,58,.05) 45%, transparent 72%)`,
        }}
      />

      {/* ---- Üst çubuk (kaydırınca beliriyor) --------------------------- */}
      <div
        className="fixed inset-x-0 top-0 z-30 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(12,17,22,.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: `1px solid ${scrolled ? LINE : 'transparent'}`,
          paddingTop: 'var(--safe-top)',
        }}
      >
        <div className="flex items-center gap-3 px-5 py-3">
          <div className="min-w-0 flex-1">
            <h1
              className="font-serif font-semibold leading-tight text-white transition-all duration-300"
              style={{ fontSize: scrolled ? 17 : 26 }}
            >
              Merhaba, gezgin
            </h1>
            {!scrolled && (
              <p className="mt-0.5 text-[13px] text-white/55">Bugün hangi stile bakalım?</p>
            )}
          </div>
          <div
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[13px] font-semibold text-white shadow-lg"
            style={{ background: CLAY, boxShadow: '0 6px 20px rgba(194,96,58,.35)' }}
          >
            {stamps}
          </div>
        </div>
      </div>

      <div style={{ paddingTop: 'calc(var(--safe-top) + 76px)' }}>
        {/* ---- Arama ------------------------------------------------- */}
        <div className="relative z-10 flex items-center gap-2 px-5">
          <div
            className="flex h-12 flex-1 items-center gap-2.5 rounded-2xl px-4"
            style={{ background: 'rgba(23,32,41,.75)', border: `1px solid ${LINE}`, backdropFilter: 'blur(8px)' }}
          >
            <Search size={17} className="shrink-0 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ülke, şehir, dönem ara…"
              className="min-w-0 flex-1 bg-transparent text-[14px] text-white placeholder:text-white/35 focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition active:scale-95"
            style={{ background: 'rgba(23,32,41,.75)', border: `1px solid ${LINE}`, backdropFilter: 'blur(8px)' }}
            aria-label="Filtrele"
          >
            <SlidersHorizontal size={17} className="text-white/60" />
          </button>
        </div>

        {/* ---- Kapak karuseli ----------------------------------------- */}
        <section className="relative z-10 mt-5 px-5">
          <div
            className="relative overflow-hidden rounded-[28px]"
            style={{ boxShadow: '0 24px 60px -24px rgba(0,0,0,.9)' }}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const d = e.changedTouches[0].clientX - touchX.current
              if (Math.abs(d) > 45)
                setSlide((s) => (s + (d < 0 ? 1 : FEATURED.length - 1)) % FEATURED.length)
            }}
          >
            <Link to={`/country/${hero.slug}`} className="block">
              <div className="relative aspect-[16/11] overflow-hidden">
                {FEATURED.map((c, i) => (
                  <div
                    key={c.slug}
                    ref={i === slide ? heroRef : undefined}
                    className="absolute inset-0 transition-opacity duration-[900ms]"
                    style={{ opacity: i === slide ? 1 : 0, transform: 'scale(1.08)' }}
                  >
                    <img
                      src={`/images/${c.slug}-1.jpg`}
                      alt=""
                      className="h-full w-full object-cover"
                      style={{ objectPosition: 'center 28%' }}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-black/10" />
                {/* kenar parlaması */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[28px]"
                  style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,.14)' }}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end gap-3 p-5">
                  <div className="min-w-0 flex-1">
                    <span
                      className="inline-block rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white"
                      style={{ background: 'rgba(255,255,255,.14)', backdropFilter: 'blur(8px)' }}
                    >
                      {hero.flag} Bu haftanın stili
                    </span>
                    <h2 className="mt-2 font-serif text-[32px] font-semibold leading-none text-white">
                      {pick(hero.name, lang)}
                    </h2>
                    <p className="mt-1.5 line-clamp-1 text-[12px] text-white/70">
                      {pick(hero.tagline, lang)}
                    </p>
                  </div>
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full transition active:scale-90"
                    style={{ background: CLAY, boxShadow: '0 8px 24px rgba(194,96,58,.45)' }}
                  >
                    <ArrowRight size={19} className="text-white" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-3 flex justify-center gap-1.5">
            {FEATURED.map((c, i) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => setSlide(i)}
                aria-label={pick(c.name, lang)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === slide ? 20 : 6,
                  background: i === slide ? CLAY : 'rgba(255,255,255,.2)',
                }}
              />
            ))}
          </div>
        </section>

        {/* ---- Dönemler ------------------------------------------------ */}
        <Reveal>
          <section className="mt-8">
            <Row title="Döneme göre keşfet" to="/time-travel" />
            <div className="no-scrollbar mt-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-1">
              {eras.map((era) => (
                <Link
                  key={era.id}
                  to={`/time-travel/${era.id}`}
                  className="w-[68px] shrink-0 snap-start transition active:scale-95"
                >
                  <div
                    className="relative h-[68px] w-[68px] overflow-hidden rounded-full"
                    style={{ boxShadow: `0 0 0 1.5px ${LINE}, 0 8px 18px -8px rgba(0,0,0,.8)` }}
                  >
                    <img src={era.image} alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  </div>
                  <p className="mt-2 text-center text-[11px] font-medium text-white/70">
                    {era.label}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ---- Yakın plan doku şeridi ---------------------------------- */}
        <Reveal delay={60}>
          <section className="mt-8">
            <Row title="Dokuya yakından bak" to="/" />
            <div className="no-scrollbar mt-3 flex gap-2.5 overflow-x-auto px-5 pb-1">
              {TEXTURE.map((slug) => (
                <Link
                  key={slug}
                  to={`/country/${slug}`}
                  className="relative h-[104px] w-[104px] shrink-0 overflow-hidden rounded-2xl transition active:scale-95"
                  style={{ border: `1px solid ${LINE}` }}
                >
                  <img
                    src={`/images/${slug}-1.jpg`}
                    alt=""
                    className="h-full w-full object-cover"
                    style={{ objectPosition: 'center 42%', transform: 'scale(2.1)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ---- Şehir rehberleri --------------------------------------- */}
        <Reveal delay={60}>
          <section className="mt-8">
            <Row title="Şehir rehberleri" to="/tools" />
            <div className="no-scrollbar mt-3 flex snap-x gap-3 overflow-x-auto px-5 pb-1">
              {guideCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/guides/${city.slug}`}
                  className="relative aspect-[5/6] w-[128px] shrink-0 snap-start overflow-hidden rounded-[18px] transition active:scale-95"
                >
                  <img
                    src={`/images/city-${city.slug}.jpg`}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="font-serif text-[15px] font-semibold leading-tight text-white">
                      {pick(city.name, lang)}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="absolute right-2.5 top-2.5 text-white/75"
                  />
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ---- Ülkeler -------------------------------------------------- */}
        <Reveal delay={60}>
          <section className="mt-8">
            <Row title={query ? 'Sonuçlar' : 'Öne çıkan ülkeler'} to="/favorites" />
            <div className="no-scrollbar mt-3 flex snap-x gap-3 overflow-x-auto px-5 pb-1">
              {trending.map((c) => {
                const fav = favorites.includes(c.slug)
                return (
                  <div key={c.slug} className="relative w-[156px] shrink-0 snap-start">
                    <Link
                      to={`/country/${c.slug}`}
                      className="relative block overflow-hidden rounded-[20px] transition active:scale-[0.97]"
                      style={{ boxShadow: '0 14px 30px -18px rgba(0,0,0,.9)' }}
                    >
                      <img
                        src={`/images/${c.slug}-1.jpg`}
                        alt=""
                        className="aspect-[3/4] w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 px-3 pb-3.5 pt-6">
                        <h3 className="font-serif text-[17px] font-semibold leading-tight text-white">
                          {pick(c.name, lang)}
                        </h3>
                        <p className="mt-0.5 line-clamp-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/60">
                          {pick(c.tagline, lang)}
                        </p>
                      </div>
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(c.slug)}
                      className="absolute right-2.5 top-2.5 grid h-8 w-8 place-items-center rounded-full transition active:scale-90"
                      style={{ background: 'rgba(0,0,0,.4)', backdropFilter: 'blur(8px)' }}
                      aria-label="Favori"
                    >
                      <Heart
                        size={15}
                        className="text-white/85"
                        fill={fav ? CLAY : 'none'}
                        stroke={fav ? CLAY : 'currentColor'}
                      />
                    </button>
                  </div>
                )
              })}
            </div>
          </section>
        </Reveal>

        {/* ---- Tam genişlik editoryal bölüm ----------------------------- */}
        <Reveal delay={60}>
          <section className="relative mt-9 overflow-hidden">
            <img
              src="/images/eras/era-1920.jpg"
              alt=""
              className="h-[320px] w-full object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${INK} 4%, rgba(12,17,22,.55) 45%, rgba(12,17,22,.25) 100%)`,
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em]" style={{ color: CLAY }}>
                Zaman yolculuğu
              </p>
              <h3 className="mt-2 max-w-[18ch] font-serif text-[27px] font-semibold leading-[1.12] text-white">
                Bir yüzyıl, sekiz dönem, tek bir çizgi
              </h3>
              <Link
                to="/time-travel"
                className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold text-white transition active:scale-95"
                style={{ background: 'rgba(255,255,255,.13)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,.16)' }}
              >
                Çizgide ilerle <ArrowRight size={15} />
              </Link>
            </div>
          </section>
        </Reveal>

        {/* ---- Sıradaki rotan ------------------------------------------- */}
        <Reveal delay={60}>
          <section className="mt-8 px-5">
            <Row title="Sıradaki rotan" to="/tools" inset />
            <Link
              to="/packing"
              className="mt-3 flex items-center gap-3 rounded-[20px] p-3 transition active:scale-[0.98]"
              style={{ background: CARD, border: `1px solid ${LINE}` }}
            >
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
                style={{ background: 'rgba(194,96,58,.16)' }}
              >
                <Plane size={19} style={{ color: CLAY }} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[15px] font-semibold text-white">Ne giymeliyim?</p>
                <p className="mt-0.5 truncate text-[12px] text-white/50">
                  Ülke ve ay seç, bavul listeni al
                </p>
              </div>
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full"
                style={{ background: CLAY }}
              >
                <ArrowRight size={16} className="text-white" />
              </span>
            </Link>
          </section>
        </Reveal>
      </div>

      {/* ---- Alt menü -------------------------------------------------- */}
      <nav
        className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around px-2 pt-2"
        style={{
          background: `linear-gradient(to top, ${INK_2} 60%, rgba(18,26,33,.85))`,
          backdropFilter: 'blur(18px)',
          borderTop: `1px solid ${LINE}`,
          paddingBottom: 'calc(0.5rem + var(--safe-bottom))',
        }}
      >
        <Tab icon={<HomeIcon size={19} />} label="Ana Sayfa" active />
        <Tab icon={<Hourglass size={19} />} label="Dönemler" />
        <Tab icon={<Compass size={19} />} label="Araçlar" />
        <Tab icon={<Heart size={19} />} label="Koleksiyon" />
        <Tab icon={<User size={19} />} label="Profil" />
      </nav>
    </div>
  )
}

function Row({ title, to, inset = false }: { title: string; to: string; inset?: boolean }) {
  return (
    <div className={`flex items-baseline justify-between ${inset ? '' : 'px-5'}`}>
      <h2 className="font-serif text-[20px] font-semibold text-white">{title}</h2>
      <Link to={to} className="text-[12px] font-medium" style={{ color: CLAY }}>
        Tümü
      </Link>
    </div>
  )
}

function Tab({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <span
      className="relative flex w-[66px] flex-col items-center gap-1"
      style={{ color: active ? CLAY : 'rgba(255,255,255,.4)' }}
    >
      {active && (
        <span
          className="absolute -top-2 h-[3px] w-6 rounded-full"
          style={{ background: CLAY }}
        />
      )}
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </span>
  )
}
