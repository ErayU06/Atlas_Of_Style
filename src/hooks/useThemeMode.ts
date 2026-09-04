import { useTheme } from 'next-themes'

/**
 * True when the app is currently painting the dark token set. Screens that
 * pick colours in JS (the Time Travel era atmosphere) need to know which of
 * the two palettes is live, since inline styles cannot be overridden by the
 * `.dark` class.
 */
export function useIsDark(): boolean {
  const { resolvedTheme } = useTheme()
  return resolvedTheme === 'dark'
}

export { useTheme }
