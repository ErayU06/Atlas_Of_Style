import { Link } from 'react-router'
import { Luggage, Sparkles, Crown, ChevronRight } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'
import ProBadge from '@/components/ProBadge'

export default function ToolsPage() {
  const { lang } = useApp()

  const items = [
    {
      to: '/packing',
      icon: Luggage,
      title: t('packingCard', lang),
      desc: t('packingCardDesc', lang),
    },
    {
      to: '/quiz',
      icon: Sparkles,
      title: t('quizCard', lang),
      desc: t('quizCardDesc', lang),
    },
    {
      to: '/premium',
      icon: Crown,
      title: t('premiumCard', lang),
      desc: t('premiumCardDesc', lang),
    },
  ]

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-10">
      <h1 className="font-serif text-4xl font-semibold text-stone-900">{t('tools', lang)}</h1>
      <p className="mt-1.5 text-sm text-stone-500">{t('toolsSubtitle', lang)}</p>

      <div className="mt-8 space-y-3">
        {items.map(({ to, icon: Icon, title, desc }) => (
          <Link
            key={to}
            to={to}
            className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#c2603a]/10 text-[#c2603a]">
              <Icon size={22} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg font-semibold text-stone-900">{title}</h3>
                <ProBadge />
              </div>
              <p className="text-sm text-stone-500">{desc}</p>
            </div>
            <ChevronRight size={18} className="text-stone-300 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </div>
  )
}
