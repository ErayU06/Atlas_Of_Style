import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'

/**
 * Light/dark plumbing for the Atlas palette. `next-themes` was already a
 * dependency (ui/sonner reads from it) but nothing ever mounted the provider,
 * so the `.dark` token set could never activate.
 *
 * The hooks that read this live in `@/hooks/useThemeMode`.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      storageKey="aos-theme"
    >
      {children}
    </NextThemeProvider>
  )
}
