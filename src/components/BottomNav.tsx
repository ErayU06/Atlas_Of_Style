import { Link, useLocation } from 'react-router'
import { Home, Heart, Compass, UserRound, Hourglass } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'
import { cn } from '@/lib/utils'

export default function BottomNav() {
  const { lang } = useApp()
  const { pathname } = useLocation()

  const items = [
    { to: '/', icon: Home, label: t('home', lang), active: pathname === '/' },
    {
      to: '/time-travel',
      icon: Hourglass,
      label: t('eras', lang),
      active: pathname.startsWith('/time-travel'),
    },
    {
      to: '/tools',
      icon: Compass,
      label: t('tools', lang),
      active:
        pathname.startsWith('/tools') ||
        pathname.startsWith('/packing') ||
        pathname.startsWith('/quiz') ||
        pathname.startsWith('/premium') ||
        pathname.startsWith('/guides'),
    },
    {
      to: '/favorites',
      icon: Heart,
      label: t('collection', lang),
      active: pathname === '/favorites',
    },
    { to: '/profile', icon: UserRound, label: t('profile', lang), active: pathname === '/profile' },
  ]

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-atlas-line bg-atlas-paper/90 backdrop-blur-xl"
      style={{
        // The home indicator sits inside the bar's own background, so the
        // padding goes on the bar and the row of tabs lifts clear of it.
        paddingBottom: 'var(--safe-bottom)',
        // Landscape on a notched phone insets one side; without these the
        // outermost tab disappears under the rounded corner.
        paddingLeft: 'var(--safe-left)',
        paddingRight: 'var(--safe-right)',
      }}
    >
      <div className="mx-auto flex max-w-md items-stretch justify-around py-1.5">
        {items.map(({ to, icon: Icon, label, active }) => (
          <Link
            key={to}
            to={to}
            aria-current={active ? 'page' : undefined}
            className="tap relative flex flex-1 flex-col items-center gap-1 px-1 py-1.5"
          >
            {/* A single travelling pip marks the active tab. */}
            <span
              className={cn(
                'absolute -top-0.5 h-1 w-1 rounded-full bg-atlas-clay transition-all duration-300 ease-out',
                active ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
              )}
              aria-hidden
            />
            <Icon
              size={21}
              strokeWidth={active ? 2.2 : 1.7}
              className={cn(
                'transition-all duration-300 ease-out',
                active ? 'scale-105 text-atlas-clay' : 'text-atlas-muted',
              )}
            />
            {/* Fixed height: a two-line label (Arabic "الملف الشخصي" at 320px)
                must not shove this tab's icon out of line with the others. */}
            <span
              className={cn(
                'flex h-6 items-start justify-center text-center text-[10px] leading-[1.15] transition-colors duration-300',
                active ? 'font-semibold text-atlas-clay' : 'font-medium text-atlas-muted',
              )}
            >
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
