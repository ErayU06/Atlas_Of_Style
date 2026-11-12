import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import {
  ArrowRight,
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
 * Görsel yön denemesi — referans mockup'a göre koyu tema.
 *
 * Bu sayfa yalnızca `/demo` rotasında yaşıyor ve uygulamanın hiçbir mevcut
 * ekranını, bileşenini veya token'ını kullanmıyor/değiştirmiyor. Beğenilirse
 * gerçek ekranlara taşınır; beğenilmezse tek dosya silinir.
 *
 * Renkler burada bilinçli olarak sabit (token değil): denemenin canlı temayı
 * kirletmemesi için.
 */

const INK = '#0E1418' // zemin
const CARD = '#172029' // kart yüzeyi
const LINE = '#243039' // ince çizgi
const CLAY = '#c2603a' // markanın aksan rengi

const WEEK_MS = 7 * 24 * 3600 * 1000
const STORY = countries[Math.floor(Date.now() / WEEK_MS) % countries.length]

export default function DemoHomePage() {
  const { lang, favorites, toggleFavorite, discovery } = useApp()
  const [query, setQuery] = useState('')

  const trending = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = q
      ? countries.filter(
          (c) =>
            pick(c.name, lang).toLowerCase().includes(q) ||
            pick(c.tagline, lang).toLowerCase().includes(q),
        )
      : countries.filter((c) => c.slug !== STORY.slug)
    return list.slice(0, 8)
  }, [query, lang])

  const guideCity = cities[0]
  const stamps = discovery.countries.length + discovery.eras.length

  return (
    <div
      className="min-h-screen pb-32"
      style={{ background: INK, paddingTop: 'calc(1rem + var(--safe-top))' }}
    >
      {/* ---- Başlık ------------------------------------------------- */}
      <header className="flex items-center gap-3 px-5 pt-3">
        <div className="min-w-0 flex-1">
          <h1 className="font-serif text-[26px] font-semibold leading-tight text-white">
            Merhaba, gezgin
          </h1>
          <p className="mt-0.5 text-[13px] text-white/55">Bugün hangi stile bakalım?</p>
        </div>
        <div
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-[13px] font-semibold text-white"
          style={{ background: CLAY }}
          aria-label={`${stamps} damga`}
        >
          {stamps}
        </div>
      </header>

      {/* ---- Arama --------------------------------------------------- */}
      <div className="mt-4 flex items-center gap-2 px-5">
        <div
          className="flex h-12 flex-1 items-center gap-2.5 rounded-2xl px-4"
          style={{ background: CARD, border: `1px solid ${LINE}` }}
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
          className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
          style={{ background: CARD, border: `1px solid ${LINE}` }}
          aria-label="Filtrele"
        >
          <SlidersHorizontal size={17} className="text-white/60" />
        </button>
      </div>

      {/* ---- Kapak kartı --------------------------------------------- */}
      <section className="mt-5 px-5">
        <Link
          to={`/country/${STORY.slug}`}
          className="relative block overflow-hidden rounded-[26px]"
        >
          <img
            src={`/images/${STORY.slug}-1.jpg`}
            alt=""
            className="aspect-[16/11] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end gap-3 p-5">
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Bu haftanın stili
              </p>
              <h2 className="mt-1 font-serif text-[30px] font-semibold leading-none text-white">
                {pick(STORY.name, lang)}
              </h2>
              <p className="mt-1.5 truncate text-[12px] uppercase tracking-[0.14em] text-white/70">
                {pick(STORY.tagline, lang)}
              </p>
            </div>
            <span
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full"
              style={{ background: CLAY }}
            >
              <ArrowRight size={18} className="text-white" />
            </span>
          </div>
        </Link>
        <div className="mt-3 flex justify-center gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === 0 ? 18 : 6,
                background: i === 0 ? CLAY : 'rgba(255,255,255,0.22)',
              }}
            />
          ))}
        </div>
      </section>

      {/* ---- Döneme göre keşfet --------------------------------------- */}
      <section className="mt-7">
        <SectionRow title="Döneme göre keşfet" to="/time-travel" />
        <div className="no-scrollbar mt-3 flex gap-4 overflow-x-auto px-5 pb-1">
          {eras.map((era) => (
            <Link key={era.id} to={`/time-travel/${era.id}`} className="w-[66px] shrink-0">
              <div
                className="h-[66px] w-[66px] overflow-hidden rounded-full"
                style={{ border: `1.5px solid ${LINE}` }}
              >
                <img src={era.image} alt="" className="h-full w-full object-cover" />
              </div>
              <p className="mt-2 text-center text-[11px] font-medium text-white/70">
                {era.label}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ---- Şehir rehberleri ----------------------------------------- */}
      <section className="mt-7 px-5">
        <Link
          to={`/guides/${guideCity.slug}`}
          className="relative block overflow-hidden rounded-[22px]"
        >
          <img
            src={`/images/city-${guideCity.slug}.jpg`}
            alt=""
            className="aspect-[16/8] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex max-w-[62%] flex-col justify-center p-5">
            <h3 className="font-serif text-[22px] font-semibold leading-tight text-white">
              Şehir rehberleri
            </h3>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
              21 şehir · stil rotaları
            </p>
          </div>
          <span
            className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full"
            style={{ background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(6px)' }}
          >
            <ArrowRight size={17} className="text-white" />
          </span>
        </Link>
      </section>

      {/* ---- Öne çıkan ülkeler ---------------------------------------- */}
      <section className="mt-7">
        <SectionRow title={query ? 'Sonuçlar' : 'Öne çıkan ülkeler'} to="/favorites" />
        <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5 pb-1">
          {trending.map((c) => {
            const fav = favorites.includes(c.slug)
            return (
              <div key={c.slug} className="relative w-[150px] shrink-0">
                <Link
                  to={`/country/${c.slug}`}
                  className="relative block overflow-hidden rounded-[20px]"
                >
                  <img
                    src={`/images/${c.slug}-1.jpg`}
                    alt=""
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <h3 className="font-serif text-[17px] font-semibold leading-tight text-white">
                      {pick(c.name, lang)}
                    </h3>
                    <p className="mt-0.5 truncate text-[9px] font-semibold uppercase tracking-[0.16em] text-white/65">
                      {pick(c.tagline, lang)}
                    </p>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => toggleFavorite(c.slug)}
                  className="absolute right-2.5 top-2.5 grid h-8 w-8 place-items-center rounded-full"
                  style={{ background: 'rgba(0,0,0,0.38)', backdropFilter: 'blur(6px)' }}
                  aria-label="Favori"
                >
                  <Heart
                    size={15}
                    className={fav ? 'text-white' : 'text-white/80'}
                    fill={fav ? CLAY : 'none'}
                    stroke={fav ? CLAY : 'currentColor'}
                  />
                </button>
              </div>
            )
          })}
        </div>
      </section>

      {/* ---- Sıradaki rotan -------------------------------------------- */}
      <section className="mt-7 px-5">
        <SectionRow title="Sıradaki rotan" to="/tools" inset />
        <Link
          to="/packing"
          className="mt-3 flex items-center gap-3 rounded-[20px] p-3"
          style={{ background: CARD, border: `1px solid ${LINE}` }}
        >
          <span
            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
            style={{ background: 'rgba(194,96,58,0.16)' }}
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

      {/* ---- Alt menü (demo) ------------------------------------------- */}
      <nav
        className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-around px-2 pt-2"
        style={{
          background: 'rgba(14,20,24,0.94)',
          backdropFilter: 'blur(14px)',
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

function SectionRow({
  title,
  to,
  inset = false,
}: {
  title: string
  to: string
  inset?: boolean
}) {
  return (
    <div className={`flex items-baseline justify-between ${inset ? '' : 'px-5'}`}>
      <h2 className="font-serif text-[19px] font-semibold text-white">{title}</h2>
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
      className="flex w-[66px] flex-col items-center gap-1"
      style={{ color: active ? CLAY : 'rgba(255,255,255,0.42)' }}
    >
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </span>
  )
}
