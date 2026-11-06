import { beforeEach, describe, expect, it } from 'vitest'
import {
  PASSPORT_KEY,
  PASSPORT_ORPHANS_KEY,
  clearOrphans,
  emptyPassport,
  isEmpty,
  normalize,
  peekOrphans,
  pending,
  readPassport,
  stampCount,
  stampKeys,
  stashOrphans,
  union,
  withStamp,
  writePassport,
  type Passport,
} from './passport'

/** Enough of the Storage API for these functions; the real one is a browser's. */
function installStorage() {
  const map = new Map<string, string>()
  const storage = {
    getItem: (k: string) => map.get(k) ?? null,
    setItem: (k: string, v: string) => void map.set(k, v),
    removeItem: (k: string) => void map.delete(k),
    clear: () => map.clear(),
    key: (i: number) => [...map.keys()][i] ?? null,
    get length() {
      return map.size
    },
  }
  ;(globalThis as { localStorage?: unknown }).localStorage = storage
  return map
}

const p = (countries: string[], eras: string[]): Passport => ({ countries, eras })

describe('normalize', () => {
  it('accepts a well formed passport unchanged', () => {
    expect(normalize(p(['italy'], ['1920s']))).toEqual(p(['italy'], ['1920s']))
  })

  it('survives anything localStorage might hand back', () => {
    for (const junk of [null, undefined, 42, 'nope', [], { countries: 'italy' }]) {
      expect(normalize(junk)).toEqual(emptyPassport())
    }
  })

  it('drops duplicates and non-strings', () => {
    const messy = { countries: ['italy', 'italy', 7, '', null], eras: ['1920s'] }
    expect(normalize(messy)).toEqual(p(['italy'], ['1920s']))
  })

  it('keeps the kinds apart', () => {
    expect(normalize({ eras: ['1920s'] })).toEqual(p([], ['1920s']))
  })
})

describe('union', () => {
  it('combines both sides without duplicating the overlap', () => {
    const a = p(['italy', 'france'], ['1920s'])
    const b = p(['france', 'japan'], ['1970s'])
    expect(union(a, b)).toEqual(p(['italy', 'france', 'japan'], ['1920s', '1970s']))
  })

  it('leaves the first side first, so the screen does not reshuffle', () => {
    expect(union(p(['italy'], []), p(['france'], [])).countries).toEqual([
      'italy',
      'france',
    ])
  })

  it('is a no-op against an empty passport', () => {
    const a = p(['italy'], ['1920s'])
    expect(union(a, emptyPassport())).toEqual(a)
    expect(union(emptyPassport(), a)).toEqual(a)
  })
})

describe('pending', () => {
  it('reports only what the server has not confirmed', () => {
    const local = p(['italy', 'france'], ['1920s', '1970s'])
    const server = p(['italy'], ['1920s'])
    expect(pending(local, server)).toEqual(p(['france'], ['1970s']))
  })

  it('is empty once the server has everything', () => {
    const local = p(['italy'], ['1920s'])
    expect(isEmpty(pending(local, p(['italy', 'japan'], ['1920s'])))).toBe(true)
  })

  it('treats an untouched device as nothing to send', () => {
    expect(isEmpty(pending(emptyPassport(), p(['italy'], [])))).toBe(true)
  })
})

describe('withStamp', () => {
  it('adds a stamp of each kind', () => {
    let v = withStamp(emptyPassport(), 'country', 'italy')
    v = withStamp(v, 'era', '1920s')
    expect(v).toEqual(p(['italy'], ['1920s']))
  })

  it('returns the same object when the stamp is already there', () => {
    const before = p(['italy'], [])
    expect(withStamp(before, 'country', 'italy')).toBe(before)
  })
})

describe('stampKeys', () => {
  it('namespaces by kind so a country and an era can share a slug', () => {
    expect(stampKeys(p(['x'], ['x']))).toEqual(['country:x', 'era:x'])
  })
})

describe('stampCount', () => {
  it('counts both kinds', () => {
    expect(stampCount(p(['italy', 'france'], ['1920s']))).toBe(3)
  })
})

describe('device storage', () => {
  beforeEach(() => installStorage())

  it('round-trips a passport', () => {
    writePassport(p(['italy'], ['1920s']))
    expect(readPassport()).toEqual(p(['italy'], ['1920s']))
  })

  it('reads an empty passport when nothing was ever written', () => {
    expect(readPassport()).toEqual(emptyPassport())
  })

  it('does not throw on a corrupted entry', () => {
    localStorage.setItem(PASSPORT_KEY, '{ not json')
    expect(readPassport()).toEqual(emptyPassport())
  })
})

describe('orphans left behind at sign-out', () => {
  beforeEach(() => installStorage())

  it('keeps each account’s stamps apart', () => {
    stashOrphans('local:ayse', p(['italy'], []))
    stashOrphans('local:mehmet', p(['japan'], []))
    expect(peekOrphans('local:ayse')).toEqual(p(['italy'], []))
    expect(peekOrphans('local:mehmet')).toEqual(p(['japan'], []))
  })

  it('shows nothing to an account that left none', () => {
    stashOrphans('local:ayse', p(['italy'], []))
    expect(peekOrphans('local:somebody-else')).toEqual(emptyPassport())
  })

  it('accumulates across repeated sign-outs instead of overwriting', () => {
    stashOrphans('local:ayse', p(['italy'], ['1920s']))
    stashOrphans('local:ayse', p(['france'], ['1920s']))
    expect(peekOrphans('local:ayse')).toEqual(p(['italy', 'france'], ['1920s']))
  })

  it('stores nothing for an empty hand-off', () => {
    stashOrphans('local:ayse', emptyPassport())
    expect(localStorage.getItem(PASSPORT_ORPHANS_KEY)).toBeNull()
  })

  it('clears only the account that was confirmed', () => {
    stashOrphans('local:ayse', p(['italy'], []))
    stashOrphans('local:mehmet', p(['japan'], []))
    clearOrphans('local:ayse')
    expect(peekOrphans('local:ayse')).toEqual(emptyPassport())
    expect(peekOrphans('local:mehmet')).toEqual(p(['japan'], []))
  })

  it('survives a corrupted entry', () => {
    localStorage.setItem(PASSPORT_ORPHANS_KEY, 'garbage')
    expect(peekOrphans('local:ayse')).toEqual(emptyPassport())
  })
})

describe('the sequence a reader actually goes through', () => {
  beforeEach(() => installStorage())

  it('carries a guest’s stamps into an account, loses none, repeats none', () => {
    // Guest earns two stamps on this device.
    let local = emptyPassport()
    local = withStamp(local, 'country', 'italy')
    local = withStamp(local, 'era', '1920s')
    writePassport(local)

    // Signs in to an account that already holds one of them from a phone.
    const server = p(['japan'], ['1920s'])
    const toSend = pending(readPassport(), server)
    expect(toSend).toEqual(p(['italy'], []))

    // What the screen shows while the send is in flight: everything, once.
    expect(union(server, readPassport())).toEqual(
      p(['japan', 'italy'], ['1920s']),
    )

    // Server confirms; the device copy is dropped and nothing disappears.
    const confirmed = union(server, toSend)
    writePassport(emptyPassport())
    expect(union(confirmed, readPassport())).toEqual(confirmed)
    expect(stampCount(confirmed)).toBe(3)
  })

  it('keeps a stamp earned offline until a send succeeds', () => {
    const server = p(['italy'], [])
    let local = emptyPassport()
    local = withStamp(local, 'country', 'france')
    writePassport(local)

    // The send fails: nothing is cleared, so the stamp is still on the device
    // and still on screen.
    expect(readPassport()).toEqual(p(['france'], []))
    expect(union(server, readPassport())).toEqual(p(['italy', 'france'], []))

    // It is still outstanding, so the next attempt picks it up.
    expect(pending(readPassport(), server)).toEqual(p(['france'], []))
  })

  it('hands unsent stamps to their owner at sign-out, not to the next reader', () => {
    const server = p(['italy'], [])
    writePassport(p(['italy', 'france'], []))

    // Sign-out: whatever the account has not confirmed is filed under it.
    const outstanding = pending(readPassport(), server)
    stashOrphans('local:ayse', outstanding)
    writePassport(emptyPassport())

    // The next person on this device starts clean.
    expect(readPassport()).toEqual(emptyPassport())
    expect(peekOrphans('local:mehmet')).toEqual(emptyPassport())

    // The owner gets them back.
    expect(peekOrphans('local:ayse')).toEqual(p(['france'], []))
  })
})
