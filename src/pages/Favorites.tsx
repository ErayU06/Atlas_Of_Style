import { useState } from 'react'
import { Link } from 'react-router'
import { Heart, StickyNote, Check } from 'lucide-react'
import { countries } from '@/data/countries'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'
import CountryCard from '@/components/CountryCard'

function NoteEditor({ slug }: { slug: string }) {
  const { lang, notes, saveNote } = useApp()
  const [value, setValue] = useState(notes[slug] ?? '')
  const [saved, setSaved] = useState(false)

  const save = () => {
    saveNote(slug, value)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
        <StickyNote size={13} />
        {t('notesLabel', lang)}
        {saved && (
          <span className="ml-auto flex items-center gap-1 text-[#c2603a]">
            <Check size={12} /> {t('notesSaved', lang)}
          </span>
        )}
      </div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={save}
        placeholder={t('notesPlaceholder', lang)}
        rows={2}
        className="mt-2 w-full resize-none rounded-xl border border-stone-200 bg-stone-50 p-3 text-sm text-stone-700 outline-none transition-colors placeholder:text-stone-400 focus:border-[#c2603a]/50"
      />
    </div>
  )
}

export default function FavoritesPage() {
  const { lang, favorites } = useApp()
  const favCountries = countries.filter((c) => favorites.includes(c.slug))

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-10">
      <h1 className="font-serif text-4xl font-semibold text-stone-900">
        {t('favoritesTitle', lang)}
      </h1>
      <p className="mt-1.5 text-sm text-stone-500">{t('favoritesSubtitle', lang)}</p>

      {favCountries.length > 0 ? (
        <>
          <p className="mb-3 mt-6 text-xs text-stone-400">
            {favCountries.length} {t('countriesCount', lang)}
          </p>
          <div className="space-y-4">
            {favCountries.map((c) => (
              <div key={c.slug} className="space-y-2">
                <CountryCard country={c} />
                <NoteEditor slug={c.slug} />
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] text-stone-400">
            {t('favoritesHint', lang)}
          </p>
        </>
      ) : (
        <div className="mt-8 flex flex-col items-center rounded-2xl border border-dashed border-stone-200 bg-white/60 p-10 text-center">
          <Heart size={32} className="mb-3 text-stone-300" />
          <p className="text-sm leading-relaxed text-stone-500">{t('favoritesEmpty', lang)}</p>
          <Link
            to="/"
            className="mt-5 rounded-full bg-[#c2603a] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#a9512f]"
          >
            {t('browseCountries', lang)}
          </Link>
        </div>
      )}
    </div>
  )
}
