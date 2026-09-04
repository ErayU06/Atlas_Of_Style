import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { countries } from '@/data/countries'
import { eras } from '@/data/eras'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'
import PassportStamp from '@/components/PassportStamp'
import { cn } from '@/lib/utils'

interface FashionPassportProps {
  /** `preview` shows counters plus a teaser row; `full` shows every stamp. */
  variant?: 'preview' | 'full'
  className?: string
}

function ProgressRow({ label, done, total }: { label: string; done: number; total: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="kicker">{label}</p>
        <p className="font-serif text-sm font-semibold text-atlas-ink">
          {done}
          <span className="text-atlas-muted">/{total}</span>
        </p>
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-atlas-line">
        <div
          className="h-full rounded-full bg-atlas-clay transition-[width] duration-700 ease-out"
          style={{ width: `${total ? (done / total) * 100 : 0}%` }}
        />
      </div>
    </div>
  )
}

/**
 * The Fashion Passport: a stamped record of the countries and eras the reader
 * has opened. Backed entirely by local discovery state, so it works signed in
 * or out.
 */
export default function FashionPassport({
  variant = 'full',
  className,
}: FashionPassportProps) {
  const { lang, discovery, unlock } = useApp()

  const countryDone = discovery.countries.length
  const eraDone = discovery.eras.length
  const total = countries.length + eras.length
  const earned = countryDone + eraDone

  // Sort earned stamps first so a half-filled passport still looks collected.
  const countryStamps = [...countries].sort((a, b) => {
    const av = discovery.countries.includes(a.slug) ? 0 : 1
    const bv = discovery.countries.includes(b.slug) ? 0 : 1
    return av - bv
  })

  const paper = (
    <div className="relative overflow-hidden rounded-3xl border border-atlas-line bg-atlas-surface p-5 shadow-card">
      {/* A real passport page has grain. Kept faint and multiplied so it reads
          as paper without touching the contrast of anything on top of it. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-multiply dark:opacity-[0.07]"
        style={{
          backgroundImage: 'url(/images/eras/passport-paper.jpg)',
          backgroundSize: '240px',
        }}
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="kicker">{t('passport', lang)}</p>
            <p className="mt-1.5 font-serif text-[22px] font-semibold leading-tight text-atlas-ink">
              {earned} {t('stampsCount', lang)}
            </p>
          </div>
          <div className="shrink-0 rounded-full border border-atlas-clay/30 bg-atlas-clay/[0.07] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-atlas-clay">
            {Math.round((earned / total) * 100)}%
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <ProgressRow
            label={t('passportCountryStamps', lang)}
            done={countryDone}
            total={countries.length}
          />
          <ProgressRow
            label={t('passportEraStamps', lang)}
            done={eraDone}
            total={eras.length}
          />
        </div>

        {earned === 0 && (
          <p className="mt-5 text-[13px] leading-relaxed text-atlas-muted">
            {t('passportEmpty', lang)}
          </p>
        )}

        {variant === 'preview' && earned > 0 && (
          <>
            <div className="mt-5 grid grid-cols-5 gap-2">
              {countryStamps.slice(0, 5).map((c) => (
                <PassportStamp
                  key={c.slug}
                  kind="country"
                  emblem={c.flag}
                  label={pick(c.name, lang)}
                  earned={discovery.countries.includes(c.slug)}
                />
              ))}
            </div>
            <Link
              to="/profile"
              className="tap mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-atlas-clay"
            >
              {t('viewAll', lang)}
              <ArrowRight size={13} className="rtl:rotate-180" />
            </Link>
          </>
        )}
      </div>
    </div>
  )

  if (variant === 'preview') return <div className={className}>{paper}</div>

  return (
    <div className={cn('space-y-5', className)}>
      {paper}

      <div>
        <p className="kicker mb-3">{t('passportEraStamps', lang)}</p>
        <div className="grid grid-cols-4 gap-2.5">
          {eras.map((e) => (
            <PassportStamp
              key={e.id}
              kind="era"
              emblem={e.label}
              label={pick(e.title, lang)}
              earned={discovery.eras.includes(e.id)}
              celebrate={unlock?.kind === 'era' && unlock.id === e.id}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="kicker mb-3">{t('passportCountryStamps', lang)}</p>
        <div className="grid grid-cols-4 gap-2.5">
          {countryStamps.map((c) => (
            <PassportStamp
              key={c.slug}
              kind="country"
              emblem={c.flag}
              label={pick(c.name, lang)}
              earned={discovery.countries.includes(c.slug)}
              celebrate={unlock?.kind === 'country' && unlock.id === c.slug}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
