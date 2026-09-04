import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { allLangs, type Lang } from '@/types/country'
import { useAuth } from '@/hooks/useAuth'
import { trpc } from '@/providers/trpc'

export type DiscoveryKind = 'country' | 'era'

/** Countries and eras the traveller has opened at least once. */
export interface Discovery {
  countries: string[]
  eras: string[]
}

/** The newest stamp, handed to the unlock celebration then cleared. */
export interface Unlock {
  kind: DiscoveryKind
  id: string
  /** Bumped on every unlock so the same id can re-trigger the animation. */
  key: number
}

interface AppState {
  lang: Lang
  setLang: (l: Lang) => void
  favorites: string[]
  toggleFavorite: (slug: string) => void
  isFavorite: (slug: string) => boolean
  notes: Record<string, string>
  saveNote: (slug: string, note: string) => void
  discovery: Discovery
  discover: (kind: DiscoveryKind, id: string) => void
  isDiscovered: (kind: DiscoveryKind, id: string) => boolean
  unlock: Unlock | null
  clearUnlock: () => void
}

const AppContext = createContext<AppState | null>(null)

const FAV_KEY = 'aos-favorites'
const LANG_KEY = 'aos-lang'
const NOTES_KEY = 'aos-notes'
const DISCOVERY_KEY = 'aos-passport'

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

  // The Fashion Passport is a purely local record of what has been opened, so
  // it needs no backend or schema change. Guests and signed-in users share it.
  const [discovery, setDiscovery] = useState<Discovery>(() => {
    const saved = readJSON<Partial<Discovery>>(DISCOVERY_KEY, {})
    return {
      countries: Array.isArray(saved.countries) ? saved.countries : [],
      eras: Array.isArray(saved.eras) ? saved.eras : [],
    }
  })
  const [unlock, setUnlock] = useState<Unlock | null>(null)

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
  useEffect(() => {
    localStorage.setItem(DISCOVERY_KEY, JSON.stringify(discovery))
  }, [discovery])

  /**
   * Every stamp already in the passport, as `kind:id` keys. Held in a ref and
   * written only from `discover`, so the "is this new?" test is synchronous
   * and idempotent — a screen effect that fires twice under StrictMode still
   * celebrates once.
   */
  const stampedRef = useRef<Set<string> | null>(null)
  if (stampedRef.current === null) {
    stampedRef.current = new Set([
      ...discovery.countries.map((c) => `country:${c}`),
      ...discovery.eras.map((e) => `era:${e}`),
    ])
  }

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

  const isDiscovered = (kind: DiscoveryKind, id: string) =>
    (kind === 'country' ? discovery.countries : discovery.eras).includes(id)

  const discover = useCallback((kind: DiscoveryKind, id: string) => {
    const stamped = stampedRef.current!
    const key = `${kind}:${id}`
    if (stamped.has(key)) return
    stamped.add(key)

    const field = kind === 'country' ? 'countries' : 'eras'
    setDiscovery((prev) =>
      prev[field].includes(id) ? prev : { ...prev, [field]: [...prev[field], id] },
    )
    setUnlock({ kind, id, key: Date.now() })
  }, [])

  const clearUnlock = useCallback(() => setUnlock(null), [])

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        favorites,
        toggleFavorite,
        isFavorite,
        notes,
        saveNote,
        discovery,
        discover,
        isDiscovered,
        unlock,
        clearUnlock,
      }}
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
