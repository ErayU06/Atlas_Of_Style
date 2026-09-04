import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router'

/**
 * Screens that drive their own in-page transitions and keep local state while
 * the URL changes underneath them. Remounting these on every param change
 * would reset that state and fight their own animation.
 */
const SELF_ANIMATED = ['/time-travel']

function screenKey(pathname: string): string {
  const owner = SELF_ANIMATED.find((base) => pathname.startsWith(base))
  return owner ?? pathname
}

/**
 * Route-level polish: scroll a new screen to the top and let its content
 * arrive with one short fade/slide instead of a hard cut. Remounting on the
 * screen key is what restarts the animation.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const key = screenKey(pathname)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [key])

  return (
    <div key={key} className="animate-fade-up">
      {children}
    </div>
  )
}
