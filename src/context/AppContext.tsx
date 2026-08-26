import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { allLangs, type Lang } from '@/types/country'
import { useAuth } from '@/hooks/useAuth'
import { trpc } from '@/providers/trpc'

interface AppState {
  lang: Lang
  setLang: (l: Lang) => void
  favorites: string[]
  toggleFavorite: (slug: string) => void
  isFavorite: (slug: string) => boolean
  notes: Record<string, string>
  saveNote: (slug: string, note: string) => void
}

const AppContext = createContext<AppState | null>(null)

const FAV_KEY = 'aos-favorites'
const LANG_KEY = 'aos-lang'
const NOTES_KEY = 'aos-notes'

function readJSON<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || '') as T
  } catch {
    return fallback
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth()
  const utils = trpc.useUtils()

  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(LANG_KEY)
    return allLangs.includes(saved as Lang) ? (saved as Lang) : 'tr'
  })
  const [localFavs, setLocalFavs] = useState<string[]>(() => readJSON(FAV_KEY, []))
  const [localNotes, setLocalNotes] = useState<Record<string, string>>(() => readJSON(NOTES_KEY, {}))

  const favQuery = trpc.traveler.favorites.useQuery(undefined, { enabled: isAuthenticated })
  const notesQuery = trpc.traveler.notes.useQuery(undefined, { enabled: isAuthenticated })

  const toggleMutation = trpc.traveler.toggleFavorite.useMutation({
    onSuccess: (data) => utils.traveler.favorites.setData(undefined, data),
  })
  const mergeFavMutation = trpc.traveler.mergeFavorites.useMutation({
    onSuccess: (data) => utils.traveler.favorites.setData(undefined, data),
  })
  const saveNoteMutation = trpc.traveler.saveNote.useMutation({
    onSuccess: (data) => utils.traveler.notes.setData(undefined, data),
  })

  // On login: merge guest data into the account, then clear local copies
  const mergedRef = useRef(false)
  useEffect(() => {
    if (isAuthenticated && !mergedRef.current) {
      mergedRef.current = true
      if (localFavs.length > 0) {
        mergeFavMutation.mutate({ slugs: localFavs })
        setLocalFavs([])
        localStorage.removeItem(FAV_KEY)
      }
      const entries = Object.entries(localNotes).filter(([, n]) => n.trim())
      for (const [slug, note] of entries) {
        saveNoteMutation.mutate({ slug, note })
      }
      if (entries.length > 0) {
        setLocalNotes({})
        localStorage.removeItem(NOTES_KEY)
      }
    }
    if (!isAuthenticated) mergedRef.current = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  useEffect(() => {
    localStorage.setItem(FAV_KEY, JSON.stringify(localFavs))
  }, [localFavs])
  useEffect(() => {
    localStorage.setItem(NOTES_KEY, JSON.stringify(localNotes))
  }, [localNotes])

  const favorites: string[] = isAuthenticated
    ? (favQuery.data ?? localFavs)
    : localFavs

  const notes: Record<string, string> = isAuthenticated
    ? Object.fromEntries((notesQuery.data ?? []).map((n) => [n.countrySlug, n.note]))
    : localNotes

  const setLang = (l: Lang) => {
    if (!allLangs.includes(l)) return
    setLangState(l)
    localStorage.setItem(LANG_KEY, l)
  }

  // RTL for Arabic
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  const toggleFavorite = (slug: string) => {
    if (isAuthenticated) {
      toggleMutation.mutate({ slug })
    } else {
      setLocalFavs((prev) =>
        prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
      )
    }
  }

  const isFavorite = (slug: string) => favorites.includes(slug)

  const saveNote = (slug: string, note: string) => {
    if (isAuthenticated) {
      saveNoteMutation.mutate({ slug, note })
    } else {
      setLocalNotes((prev) => {
        const next = { ...prev }
        if (note.trim()) next[slug] = note
        else delete next[slug]
        return next
      })
    }
  }

  return (
    <AppContext.Provider
      value={{ lang, setLang, favorites, toggleFavorite, isFavorite, notes, saveNote }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
