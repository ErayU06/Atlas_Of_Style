import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation, useNavigationType } from 'react-router'

/**
 * Screens that drive their own in-page transitions and keep local state while
 * the URL changes underneath them. Remounting these on every param change
 * would reset that state and fight their own animation.
 */
const SELF_ANIMATED = ['/time-travel']

/** The bottom nav's destinations. Moving between these is a lateral jump. */
const TAB_ROOTS = ['/', '/time-travel', '/tools', '/favorites', '/profile']

function screenKey(pathname: string): string {
  const owner = SELF_ANIMATED.find((base) => pathname.startsWith(base))
  return owner ?? pathname
}

function isTab(key: string): boolean {
  return TAB_ROOTS.includes(key)
}

type Direction = 'push' | 'pop' | 'swap'

/**
 * `useNavigationType` tells a back button from a link, but not a tab switch
 * from a step deeper — both are a PUSH. Two peers in the nav bar are never
 * "deeper" than one another, so that pairing is resolved by where they sit
 * rather than by how the history entry was made.
 */
function directionFor(from: string, to: string, navType: string): Direction {
  if (isTab(from) && isTab(to)) return 'swap'
  return navType === 'POP' ? 'pop' : 'push'
}

const ENTER: Record<Direction, string> = {
  push: 'animate-screen-push-in',
  pop: 'animate-screen-pop-in',
  swap: 'animate-screen-swap-in',
}
const LEAVE: Record<Direction, string> = {
  push: 'animate-screen-push-out',
  pop: 'animate-screen-pop-out',
  swap: 'animate-screen-swap-out',
}

/** Must outlast the longest animation in tailwind.config.js (280ms). */
const CLEAR_AFTER_MS = 300

type Screen = { key: string; node: ReactNode }

/**
 * Route-level motion: the arriving screen and the leaving one are on stage
 * together for the length of the transition, which is what separates a step
 * from a cut. A remount-and-fade can only animate the arrival — the screen
 * being left disappears on the same frame the URL changes.
 *
 * The outgoing screen is held in state and taken out of flow, so the incoming
 * one lays out against the real viewport and the page never grows to fit both.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const navType = useNavigationType()
  const key = screenKey(pathname)

  const [current, setCurrent] = useState<Screen>({ key, node: children })
  const [leaving, setLeaving] = useState<Screen | null>(null)
  const [direction, setDirection] = useState<Direction>('swap')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Render-phase state adjustment: React's documented way to react to a prop
  // change without the extra commit an effect would cost. Doing this in an
  // effect would paint the new screen once, unanimated, before the transition
  // started — visible as a flash on a slow device.
  if (key !== current.key) {
    setDirection(directionFor(current.key, key, navType))
    setLeaving(current)
    setCurrent({ key, node: children })
  } else if (current.node !== children) {
    // Same screen, new render (a context or data change). Swap the content
    // through without restarting the animation.
    setCurrent({ key, node: children })
  }

  useEffect(() => {
    if (!leaving) return
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setLeaving(null), CLEAR_AFTER_MS)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [leaving])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [current.key])

  return (
    // Clipped, so a screen sliding in from the trailing edge cannot widen the
    // document and hand the page a horizontal scrollbar mid-transition.
    <div className="relative overflow-x-clip">
      {leaving && (
        <div
          key={leaving.key}
          className={`pointer-events-none absolute inset-x-0 top-0 ${LEAVE[direction]}`}
          aria-hidden
        >
          {leaving.node}
        </div>
      )}
      <div key={current.key} className={ENTER[direction]}>
        {current.node}
      </div>
    </div>
  )
}
