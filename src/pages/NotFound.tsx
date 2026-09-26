import { Link } from 'react-router'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const { lang } = useApp()

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-7 pb-[calc(7rem+var(--safe-bottom))] text-center">
      {/* An empty picture hook on a museum wall. */}
      <svg viewBox="0 0 120 100" fill="none" className="h-28 w-[8.5rem]" aria-hidden>
        <path d="M60 14v10" className="stroke-atlas-line" strokeWidth="2" strokeLinecap="round" />
        <circle cx="60" cy="12" r="3" className="stroke-atlas-clay/60" strokeWidth="1.6" />
        <rect
          x="30"
          y="26"
          width="60"
          height="52"
          rx="4"
          className="stroke-atlas-line"
          strokeWidth="2"
          strokeDasharray="6 5"
        />
        <path
          d="M46 62l10-12 8 9 6-6 8 9"
          className="stroke-atlas-clay/45"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className="kicker mt-5">404</p>
      <h1 className="mt-2.5 font-serif text-[27px] font-semibold leading-tight text-atlas-ink">
        {t('notFoundTitle', lang)}
      </h1>
      <p className="mt-2.5 max-w-[30ch] text-[13px] leading-relaxed text-atlas-muted">
        {t('notFoundDesc', lang)}
      </p>
      <Button asChild variant="atlas" size="pill" className="mt-7">
        <Link to="/">{t('backHome', lang)}</Link>
      </Button>
    </div>
  )
}
