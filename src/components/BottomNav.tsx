import { Link, useLocation } from 'react-router'
import { Home, Heart, Compass, UserRound } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'

export default function BottomNav() {
  const { lang } = useApp()
  const { pathname } = useLocation()

  const items = [
    { to: '/', icon: Home, label: t('home', lang), active: pathname === '/' },
    { to: '/tools', icon: Compass, label: t('tools', lang), active: pathname.startsWith('/tools') || pathname.startsWith('/packing') || pathname.startsWith('/quiz') || pathname.startsWith('/premium') || pathname.startsWith('/guides') },
    { to: '/favorites', icon: Heart, label: t('favorites', lang), active: pathname === '/favorites' },
    { to: '/profile', icon: UserRound, label: t('profile', lang), active: pathname === '/profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-stone-200 bg-[#fdfbf8]/95 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-around py-2">
        {items.map(({ to, icon: Icon, label, active }) => (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center gap-0.5 px-4 py-1 text-[11px] transition-colors ${
              active ? 'text-[#c2603a]' : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            <Icon size={21} strokeWidth={active ? 2.2 : 1.8} />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
