import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { allLangs, type Lang } from '@/types/country'
import type { StyleGender } from '@/data/style-gender'
import { useAuth } from '@/hooks/useAuth'
import { trpc } from '@/providers/trpc'
import {
  clearOrphans,
  emptyPassport,
  isEmpty,
  normalize,
  peekOrphans,
  pending,
  readPassport,
  stampKeys,
  stashOrphans,
  union,
  withStamp,
  writePassport,
  type Passport,
} from '@/lib/passport'
import { registerPassportFlush } from '@/lib/passportFlush'

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
  /** Drives the gendered half of the style advice. null = show the shared set. */
  styleGender: StyleGender | null
  setStyleGender: (g: StyleGender | null) => void
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
const GENDER_KEY = 'aos-style-gender'

/** How long to wait before re-sending stamps after a failed attempt. */
const RETRY_SEND_MS = 30_000

function readJSON<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || '') as T
  } catch {
    return fallback
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, user } = useAuth()
  const utils = trpc.useUtils()

  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(LANG_KEY)
    return allLangs.includes(saved as Lang) ? (saved as Lang) : 'tr'
  })
  // Held locally so a guest gets personalised advice too. Once signed in the
  // account answers instead — see the derivation below.
  const [localGender, setLocalGender] = useState<StyleGender | null>(() => {
    const saved = localStorage.getItem(GENDER_KEY)
    return saved === 'male' || saved === 'female' ? saved : null
  })
  const [localFavs, setLocalFavs] = useState<string[]>(() => readJSON(FAV_KEY, []))
  const [localNotes, setLocalNotes] = useState<Record<string, string>>(() => readJSON(NOTES_KEY, {}))

  /**
   * The stamps this device is holding. For a guest that is the whole
   * passport; once signed in it is a write-ahead log, emptied only when the
   * server confirms it holds the same stamps. See src/lib/passport.ts.
   */
  const [localPassport, setLocalPassport] = useState<Passport>(readPassport)
  /** Bumped by a failed send so the retry effect runs again after a pause. */
  const [sendAttempt, setSendAttempt] = useState(0)
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
  const genderMutation = trpc.traveler.setGender.useMutation({
    onSuccess: () => utils.auth.me.invalidate(),
  })

  const passportQuery = trpc.traveler.discoveries.useQuery(undefined, {
    enabled: isAuthenticated,
  })
  const discoverMutation = trpc.traveler.discover.useMutation({
    onSuccess: (data) => utils.traveler.discoveries.setData(undefined, data),
  })
  const mergePassportMutation = trpc.traveler.mergeDiscoveries.useMutation({
    onSuccess: (data) => utils.traveler.discoveries.setData(undefined, data),
  })

  const serverPassport = useMemo(
    () => (isAuthenticated ? normalize(passportQuery.data) : emptyPassport()),
    [isAuthenticated, passportQuery.data],
  )

  /**
   * What the passport screens read: the union of what the account holds and
   * what this device has not handed over yet. A union is safe precisely
   * because stamps are append-only — there is no deletion for a stale local
   * copy to undo — and it means a stamp is on screen the instant it is
   * earned, whether or not the network agrees yet.
   */
  const discovery: Discovery = useMemo(
    () => (isAuthenticated ? union(serverPassport, localPassport) : localPassport),
    [isAuthenticated, serverPassport, localPassport],
  )

  /**
   * Derived, not synchronised: the signed-in account answers, and the local
   * choice covers a guest and anyone whose account has no answer yet. Copying
   * the account value into state instead would mean a second render on every
   * sign-in, and two places that could disagree.
   */
  const styleGender: StyleGender | null = isAuthenticated
    ? ((user?.gender ?? localGender) as StyleGender | null)
    : localGender

  const setStyleGender = useCallback(
    (g: StyleGender | null) => {
      setLocalGender(g)
      if (g) localStorage.setItem(GENDER_KEY, g)
      else localStorage.removeItem(GENDER_KEY)
      if (isAuthenticated) genderMutation.mutate({ gender: g })
    },
    // genderMutation is a new object each render; its identity is not state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isAuthenticated],
  )

  // Carry a guest's answer up on first sign-in rather than dropping it. Only
  // a mutation fires here — nothing local changes, so no cascading render.
  const genderPushedRef = useRef(false)
  useEffect(() => {
    if (!isAuthenticated || !user) {
      genderPushedRef.current = false
      return
    }
    if (genderPushedRef.current) return
    genderPushedRef.current = true
    if (!user.gender && localGender) genderMutation.mutate({ gender: localGender })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, user])

  // On login: merge guest data into the account, then clear local copies
  const mergedRef = useRef(false)
  useEffect(() => {
    if (isAuthenticated && !mergedRef.current) {
      mergedRef.current = true
      // Each device copy is dropped only once the account confirms it has
      // the data. Firing the request and clearing in the same breath, as this
      // did before, threw a guest's work away whenever the request failed —
      // signing in on a dead connection lost it outright.
      if (localFavs.length > 0) {
        mergeFavMutation.mutate(
          { slugs: localFavs },
          {
            onSuccess: () => {
              setLocalFavs([])
              localStorage.removeItem(FAV_KEY)
            },
          },
        )
      }
      const entries = Object.entries(localNotes).filter(([, n]) => n.trim())
      for (const [slug, note] of entries) {
        saveNoteMutation.mutate(
          { slug, note },
          {
            onSuccess: () => {
              // Drop just this note, and only if it has not been edited
              // since the request left.
              setLocalNotes((prev) => {
                if (prev[slug] !== note) return prev
                const next = { ...prev }
                delete next[slug]
                return next
              })
            },
          },
        )
      }
    }
    if (!isAuthenticated) mergedRef.current = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  /**
   * Hands the account every stamp this device is still holding, then lets go.
   *
   * Runs whenever something is outstanding rather than once per sign-in, so a
   * stamp earned offline leaves on the next successful request instead of
   * waiting for the reader to sign in again. The device copy is cleared only
   * inside onSuccess: until the account says it has them, this is the only
   * place they exist.
   */
  const sendingRef = useRef(false)
  const retryTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => {
    if (!isAuthenticated || !user || passportQuery.isLoading) return
    if (sendingRef.current) return

    const outstanding = union(
      pending(localPassport, serverPassport),
      peekOrphans(user.unionId),
    )
    if (isEmpty(outstanding)) return

    const unionId = user.unionId
    sendingRef.current = true
    mergePassportMutation.mutate(outstanding, {
      onSuccess: () => {
        sendingRef.current = false
        clearOrphans(unionId)
        setLocalPassport(emptyPassport())
      },
      onError: () => {
        // Nothing is lost — both copies stay exactly as they are. Back off
        // instead of retrying on the next render, which would spin.
        retryTimer.current = setTimeout(() => {
          sendingRef.current = false
          setSendAttempt((a) => a + 1)
        }, RETRY_SEND_MS)
      },
    })
    // mergePassportMutation is a new object each render; its identity is not state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isAuthenticated,
    user,
    passportQuery.isLoading,
    localPassport,
    serverPassport,
    sendAttempt,
  ])

  useEffect(
    () => () => {
      if (retryTimer.current) clearTimeout(retryTimer.current)
    },
    [],
  )

  /**
   * Signing out must not drop stamps that never reached the account, and must
   * not leave them where the next person to sign in would inherit them. So
   * they are filed under their owner first — a local write that cannot fail —
   * and only then sent, while the session is still valid. Whichever way that
   * request goes, the stamps come back on that account's next sign-in.
   */
  useEffect(() => {
    if (!isAuthenticated || !user) {
      registerPassportFlush(null)
      return
    }
    const unionId = user.unionId
    registerPassportFlush(() => {
      const outstanding = union(
        pending(localPassport, serverPassport),
        peekOrphans(unionId),
      )
      if (isEmpty(outstanding)) return
      stashOrphans(unionId, outstanding)
      setLocalPassport(emptyPassport())
      mergePassportMutation.mutate(outstanding, {
        onSuccess: () => clearOrphans(unionId),
      })
    })
    return () => registerPassportFlush(null)
    // mergePassportMutation is a new object each render; its identity is not state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, user, localPassport, serverPassport])

  useEffect(() => {
    localStorage.setItem(FAV_KEY, JSON.stringify(localFavs))
  }, [localFavs])
  useEffect(() => {
    localStorage.setItem(NOTES_KEY, JSON.stringify(localNotes))
  }, [localNotes])
  useEffect(() => {
    writePassport(localPassport)
  }, [localPassport])

  /**
   * Every stamp already in the passport, as `kind:id` keys. Held in a ref so
   * the "is this new?" test in `discover` is synchronous and idempotent — a
   * screen effect that fires twice under StrictMode still celebrates once.
   *
   * Kept in step with the passport rather than frozen at first render: stamps
   * earned on another device arrive after the first paint, and a set that
   * never learned about them would re-announce a country as new to someone
   * who has already been there.
   */
  const stampedRef = useRef<Set<string> | null>(null)
  if (stampedRef.current === null) {
    stampedRef.current = new Set(stampKeys(discovery))
  }
  useEffect(() => {
    const stamped = stampedRef.current!
    for (const key of stampKeys(discovery)) stamped.add(key)
  }, [discovery])

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

  /**
   * Writes to the device first and unconditionally, then tells the server.
   * The order is the whole point: a stamp earned on a plane is kept and sent
   * later, instead of riding on a request that is about to fail.
   */
  const discover = useCallback(
    (kind: DiscoveryKind, id: string) => {
      const stamped = stampedRef.current!
      const key = `${kind}:${id}`
      if (stamped.has(key)) return
      stamped.add(key)

      setLocalPassport((prev) => withStamp(prev, kind, id))
      if (isAuthenticated) discoverMutation.mutate({ kind, slug: id })
      setUnlock({ kind, id, key: Date.now() })
    },
    // discoverMutation is a new object each render; its identity is not state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isAuthenticated],
  )

  const clearUnlock = useCallback(() => setUnlock(null), [])

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        styleGender,
        setStyleGender,
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
