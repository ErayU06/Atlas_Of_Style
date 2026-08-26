import { Link } from 'react-router'
import { Heart } from 'lucide-react'
import type { Country } from '@/types/country'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { regionLabel } from '@/i18n'

export default function CountryCard({ country }: { country: Country }) {
  const { lang, toggleFavorite, isFavorite } = useApp()
  const fav = isFavorite(country.slug)

  return (
    <Link
      to={`/country/${country.slug}`}
      className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-stone-100">
        <img
          src={`/images/${country.slug}-1.jpg`}
          alt={country.name.en}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="absolute bottom-0.5 left-0.5 text-sm drop-shadow">
          {country.flag}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-serif text-lg font-semibold text-stone-900">
            {pick(country.name, lang)}
          </h3>
        </div>
        <p className="text-[11px] font-medium uppercase tracking-widest text-stone-400">
          {regionLabel(country.region, lang)}
        </p>
        <p className="mt-0.5 truncate text-sm text-stone-500">
          {pick(country.tagline, lang)}
        </p>
      </div>
      <button
        aria-label="favorite"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggleFavorite(country.slug)
        }}
        className="rounded-full p-2 transition-colors hover:bg-stone-100"
      >
        <Heart
          size={20}
          className={fav ? 'fill-[#c2603a] text-[#c2603a]' : 'text-stone-300'}
        />
      </button>
    </Link>
  )
}
