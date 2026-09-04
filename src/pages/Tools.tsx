import { Link } from 'react-router'
import { Luggage, Sparkles, Crown, ChevronRight, Hourglass } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'
import ProBadge from '@/components/ProBadge'
import SectionHeading from '@/components/SectionHeading'

export default function ToolsPage() {
  const { lang } = useApp()

  const items = [
    {
      to: '/packing',
      icon: Luggage,
      title: t('packingCard', lang),
      desc: t('packingCardDesc', lang),
      pro: true,
    },
    {
      to: '/quiz',
      icon: Sparkles,
      title: t('quizCard', lang),
      desc: t('quizCardDesc', lang),
      pro: true,
    },
    {
      to: '/premium',
      icon: Crown,
      title: t('premiumCard', lang),
      desc: t('premiumCardDesc', lang),
      pro: true,
    },
    // Free, and the reason the app exists — so it sits with the rest.
    {
      to: '/time-travel',
      icon: Hourglass,
      title: t('timeTravel', lang),
      desc: t('timeTravelSubtitle', lang),
      pro: false,
    },
  ]

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-10">
      <header>
        <p className="kicker">{t('appName', lang)}</p>
        <h1 className="mt-2.5 font-serif text-[34px] font-semibold leading-[1.08] text-atlas-ink">
          {t('tools', lang)}
        </h1>
        <p className="mt-2.5 text-sm leading-relaxed text-atlas-muted">
          {t('toolsSubtitle', lang)}
        </p>
      </header>

      <div className="mt-9">
        <SectionHeading kicker={`${items.length}`} title={t('explore', lang)} />
        <div className="space-y-3">
          {items.map(({ to, icon: Icon, title, desc, pro }, i) => (
            <Link
              key={to}
              to={to}
              style={{ animationDelay: `${i * 70}ms` }}
              className="tap animate-fade-up group flex items-start gap-4 rounded-2xl border border-atlas-line bg-atlas-surface p-5 shadow-card transition-shadow duration-300 hover:shadow-lift"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-atlas-clay/[0.09] text-atlas-clay">
                <Icon size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-[20px] font-semibold leading-tight text-atlas-ink">
                    {title}
                  </h3>
                  {pro && <ProBadge />}
                </div>
                <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-atlas-muted">
                  {desc}
                </p>
              </div>
              <ChevronRight
                size={18}
                className="mt-3 shrink-0 text-atlas-muted/50 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
