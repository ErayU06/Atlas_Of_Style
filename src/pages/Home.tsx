import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { Search, Sparkles } from 'lucide-react'
import { countries } from '@/data/countries'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { t, regions } from '@/i18n'
import CountryCard from '@/components/CountryCard'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function HomePage() {
  const { lang } = useApp()
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

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-10">
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500">
            {t('appName', lang)}
          </p>
          <LanguageSwitcher />
        </div>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-stone-900">
          {t('heroTitle', lang)}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-stone-500">
          {t('heroSubtitle', lang)}
        </p>
      </header>

      {/* Featured country of the week */}
      {(() => {
        const weekIndex = Math.floor(Date.now() / (7 * 24 * 3600 * 1000)) % countries.length
        const featured = countries[weekIndex]
        return (
          <Link
            to={`/country/${featured.slug}`}
            className="group relative mb-6 block overflow-hidden rounded-2xl shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <img
              src={`/images/${featured.slug}-1.jpg`}
              alt={featured.name.en}
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
            <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#c2603a] backdrop-blur">
              <Sparkles size={12} />
              {t('featured', lang)}
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h2 className="font-serif text-2xl font-semibold drop-shadow">
                {featured.flag} {pick(featured.name, lang)}
              </h2>
              <p className="mt-0.5 line-clamp-1 text-sm text-white/85">
                {pick(featured.tagline, lang)}
              </p>
            </div>
          </Link>
        )
      })()}

      {/* Search */}
      <div className="relative mb-4">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('searchPlaceholder', lang)}
          className="w-full rounded-full border border-stone-200 bg-white py-3 pl-11 pr-4 text-sm text-stone-800 shadow-sm outline-none transition-colors placeholder:text-stone-400 focus:border-[#c2603a]/50"
        />
      </div>

      {/* Region filters */}
      <div className="mb-5 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {regions.map((r) => (
          <button
            key={r.key}
            onClick={() => setRegion(r.key)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
              region === r.key
                ? 'bg-[#c2603a] text-white shadow-sm'
                : 'border border-stone-200 bg-white text-stone-500 hover:border-stone-300'
            }`}
          >
            {pick(r.label, lang)}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="mb-3 text-xs text-stone-400">
        {filtered.length} {t('countriesCount', lang)}
      </p>

      {/* List */}
      <div className="space-y-3">
        {filtered.map((c) => (
          <CountryCard key={c.slug} country={c} />
        ))}
        {filtered.length === 0 && (
          <p className="rounded-2xl border border-dashed border-stone-200 bg-white/60 p-8 text-center text-sm text-stone-400">
            {t('noResults', lang)}
          </p>
        )}
      </div>

      <footer className="mt-10 text-center text-[11px] text-stone-400">
        {t('footer', lang)}
      </footer>
    </div>
  )
}
