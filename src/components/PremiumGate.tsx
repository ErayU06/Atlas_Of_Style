import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Crown } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { useAuth } from '@/hooks/useAuth'
import { t } from '@/i18n'

export default function PremiumGate({ children }: { children: ReactNode }) {
  const { lang } = useApp()
  const { isAuthenticated, isLoading } = useAuth()

  if (isAuthenticated || isLoading) return <>{children}</>

  return (
    <div className="relative">
      <div className="pointer-events-none select-none blur-[6px] opacity-50" aria-hidden>
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-xs rounded-2xl border border-amber-200 bg-white/95 p-6 text-center shadow-xl backdrop-blur">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-sm">
            <Crown size={22} />
          </div>
          <h3 className="mt-3 font-serif text-lg font-semibold text-stone-900">
            {t('premiumFeature', lang)}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-stone-500">
            {t('premiumFeatureDesc', lang)}
          </p>
          <Link
            to="/login"
            className="mt-4 inline-block rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
          >
            {t('goPremium', lang)}
          </Link>
        </div>
      </div>
    </div>
  )
}
