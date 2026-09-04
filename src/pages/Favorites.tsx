import { useState } from 'react'
import { Link } from 'react-router'
import { StickyNote, Check } from 'lucide-react'
import { countries } from '@/data/countries'
import type { Country } from '@/types/country'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { t, regionLabel } from '@/i18n'
import SmartImage from '@/components/SmartImage'
import SectionHeading from '@/components/SectionHeading'
import FavoriteButton from '@/components/FavoriteButton'
import FashionPassport from '@/components/FashionPassport'
import EmptyState from '@/components/EmptyState'
import { Button } from '@/components/ui/button'

function NoteEditor({ slug }: { slug: string }) {
  const { lang, notes, saveNote } = useApp()
  const [value, setValue] = useState(notes[slug] ?? '')
  const [saved, setSaved] = useState(false)

  const save = () => {
    saveNote(slug, value)
    setSaved(true)
    window.setTimeout(() => setSaved(false), 1600)
  }

  return (
    <div className="border-t border-atlas-line p-4">
      <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-atlas-muted">
        <StickyNote size={12} />
        {t('notesLabel', lang)}
        {/* The save confirmation is a fade-in, not a toast — it belongs to
            the field the reader just left. */}
        {saved && (
          <span className="animate-fade-in ms-auto flex items-center gap-1 text-atlas-clay">
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
        className="mt-2 w-full resize-none rounded-xl border border-atlas-line bg-atlas-soft/60 p-3 text-sm text-atlas-body outline-none transition-colors placeholder:text-atlas-muted/70 focus:border-atlas-clay/50"
      />
    </div>
  )
}

/** One piece in the vitrine: the plate, its label and its note, as one object. */
function CollectionPiece({ country, index }: { country: Country; index: number }) {
  const { lang } = useApp()

  return (
    <article
      className="animate-fade-up overflow-hidden rounded-3xl border border-atlas-line bg-atlas-surface shadow-card"
      style={{ animationDelay: `${Math.min(index, 6) * 70}ms` }}
    >
      <Link to={`/country/${country.slug}`} className="tap group relative block">
        <SmartImage
          src={`/images/${country.slug}-1.jpg`}
          alt={`${country.name.en} everyday street style`}
          ratio="story"
          imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
        >
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
            aria-hidden
          />
        </SmartImage>
        <div className="absolute right-3 top-3">
          <FavoriteButton slug={country.slug} variant="glass" size={17} />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/75">
            {regionLabel(country.region, lang)}
          </p>
          <h3 className="mt-1 flex items-center gap-2 font-serif text-[23px] font-semibold leading-tight">
            <span>{country.flag}</span>
            {pick(country.name, lang)}
          </h3>
        </div>
      </Link>
      <NoteEditor slug={country.slug} />
    </article>
  )
}

export default function FavoritesPage() {
  const { lang, favorites, notes } = useApp()
  const favCountries = countries.filter((c) => favorites.includes(c.slug))
  const noteCount = Object.values(notes).filter((n) => n.trim()).length

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-10">
      <header>
        <p className="kicker">{t('collection', lang)}</p>
        <h1 className="mt-2.5 font-serif text-[34px] font-semibold leading-[1.08] text-atlas-ink">
          {t('yourCollection', lang)}
        </h1>
        <p className="mt-2.5 text-sm leading-relaxed text-atlas-muted">
          {t('collectionSubtitle', lang)}
        </p>
      </header>

      {favCountries.length > 0 ? (
        <>
          <div className="mt-6 flex gap-2.5">
            <div className="flex-1 rounded-2xl border border-atlas-line bg-atlas-surface p-4 shadow-card">
              <p className="font-serif text-[26px] font-semibold leading-none text-atlas-ink">
                {favCountries.length}
              </p>
              <p className="mt-1.5 text-[11px] font-medium text-atlas-muted">
                {t('favoriteCount', lang)}
              </p>
            </div>
            <div className="flex-1 rounded-2xl border border-atlas-line bg-atlas-surface p-4 shadow-card">
              <p className="font-serif text-[26px] font-semibold leading-none text-atlas-ink">
                {noteCount}
              </p>
              <p className="mt-1.5 text-[11px] font-medium text-atlas-muted">
                {t('noteCount', lang)}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <SectionHeading
              kicker={`${favCountries.length} ${t('countriesCount', lang)}`}
              title={t('favoritesTitle', lang)}
            />
            <div className="space-y-4">
              {favCountries.map((c, i) => (
                <CollectionPiece key={c.slug} country={c} index={i} />
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-[11px] text-atlas-muted">
            {t('favoritesHint', lang)}
          </p>
        </>
      ) : (
        <EmptyState
          className="mt-8"
          illustration="collection"
          title={t('collectionEmptyTitle', lang)}
          description={t('favoritesEmpty', lang)}
          action={
            <Button asChild variant="atlas" size="pill">
              <Link to="/">{t('browseCountries', lang)}</Link>
            </Button>
          }
        />
      )}

      <div className="mt-10">
        <SectionHeading
          kicker={t('fashionIdentity', lang)}
          title={t('passport', lang)}
          standfirst={t('passportSubtitle', lang)}
        />
        <FashionPassport variant="preview" />
      </div>
    </div>
  )
}
