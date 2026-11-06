/**
 * Fashion Passport storage and merge rules.
 *
 * Stamps are append-only: a country or era is opened once and the record of
 * it is never taken back. That single property is what the whole sync design
 * rests on — it means two copies of a passport can always be combined by
 * taking their union, with no way for a stale device to resurrect something
 * the account removed, because nothing is ever removed.
 *
 * The device copy is therefore a write-ahead log, not a cache: `discover`
 * writes here first and unconditionally, so a stamp survives a dead network,
 * a failed request or a crash, and is cleared only once the server has
 * confirmed it holds the same stamps.
 */

export type StampKind = 'country' | 'era'

export type Passport = {
  countries: string[]
  eras: string[]
}

/** Where a device keeps stamps the server has not confirmed yet. */
export const PASSPORT_KEY = 'aos-passport'

/**
 * Where stamps go when their owner signs out before they could be sent.
 *
 * Keyed by account, because the alternative — leaving them in PASSPORT_KEY —
 * would hand one person's stamps to whoever signs in on the device next.
 * Draining it is deferred to that account's next sign-in, which is the first
 * moment the app can send them and know whose they are.
 */
export const PASSPORT_ORPHANS_KEY = 'aos-passport-orphans'

export function emptyPassport(): Passport {
  return { countries: [], eras: [] }
}

export function isEmpty(p: Passport): boolean {
  return p.countries.length === 0 && p.eras.length === 0
}

export function stampCount(p: Passport): number {
  return p.countries.length + p.eras.length
}

/** Guards against a hand-edited or half-written localStorage entry. */
export function normalize(value: unknown): Passport {
  const v = (value ?? {}) as Partial<Record<keyof Passport, unknown>>
  const list = (x: unknown) =>
    Array.isArray(x)
      ? Array.from(new Set(x.filter((s): s is string => typeof s === 'string' && s.length > 0)))
      : []
  return { countries: list(v.countries), eras: list(v.eras) }
}

/** Order follows `a` then the additions from `b`, so the UI does not reshuffle. */
export function union(a: Passport, b: Passport): Passport {
  const merge = (x: string[], y: string[]) => Array.from(new Set([...x, ...y]))
  return {
    countries: merge(a.countries, b.countries),
    eras: merge(a.eras, b.eras),
  }
}

/** Everything in `local` that `server` has not confirmed — what still has to be sent. */
export function pending(local: Passport, server: Passport): Passport {
  const missing = (mine: string[], theirs: string[]) => {
    const have = new Set(theirs)
    return mine.filter((s) => !have.has(s))
  }
  return {
    countries: missing(local.countries, server.countries),
    eras: missing(local.eras, server.eras),
  }
}

export function withStamp(p: Passport, kind: StampKind, slug: string): Passport {
  const field = kind === 'country' ? 'countries' : 'eras'
  if (p[field].includes(slug)) return p
  return { ...p, [field]: [...p[field], slug] }
}

/** `kind:slug` keys for the set that decides whether a stamp is new. */
export function stampKeys(p: Passport): string[] {
  return [
    ...p.countries.map((c) => `country:${c}`),
    ...p.eras.map((e) => `era:${e}`),
  ]
}

// ---- localStorage ---------------------------------------------------------
//
// Every read and write is wrapped: Safari in private mode throws on access,
// and a passport is never worth taking the app down for.

function readJSON(key: string): unknown {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function writeJSON(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage unavailable or full — the server copy is the durable one */
  }
}

export function readPassport(): Passport {
  return normalize(readJSON(PASSPORT_KEY))
}

export function writePassport(p: Passport): void {
  writeJSON(PASSPORT_KEY, p)
}

type Orphans = Record<string, Passport>

function readOrphans(): Orphans {
  const raw = readJSON(PASSPORT_ORPHANS_KEY)
  if (!raw || typeof raw !== 'object') return {}
  const out: Orphans = {}
  for (const [id, value] of Object.entries(raw as Record<string, unknown>)) {
    const p = normalize(value)
    if (!isEmpty(p)) out[id] = p
  }
  return out
}

/**
 * Hands unsent stamps to their owner for safekeeping and clears the shared
 * device copy, so signing out can never leak them to the next person — nor
 * lose them.
 */
export function stashOrphans(unionId: string, p: Passport): void {
  if (isEmpty(p)) return
  const all = readOrphans()
  all[unionId] = union(all[unionId] ?? emptyPassport(), p)
  writeJSON(PASSPORT_ORPHANS_KEY, all)
}

export function peekOrphans(unionId: string): Passport {
  return readOrphans()[unionId] ?? emptyPassport()
}

/** Called only once the server has confirmed it holds them. */
export function clearOrphans(unionId: string): void {
  const all = readOrphans()
  if (!(unionId in all)) return
  delete all[unionId]
  writeJSON(PASSPORT_ORPHANS_KEY, all)
}
