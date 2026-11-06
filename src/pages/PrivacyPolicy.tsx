import { Link } from 'react-router'
import { ChevronLeft } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { t, type UiKey } from '@/i18n'

/**
 * The address published in the policy and the one data-deletion requests are
 * expected to arrive at. Apple and the GDPR both want a contact that works,
 * so this has to be a mailbox somebody reads.
 *
 * TODO: replace with the address to publish. Left obviously wrong on purpose
 * rather than guessed at — whichever address goes here becomes public on the
 * App Store listing and inside the app.
 */
const CONTACT_EMAIL = 'SET_CONTACT_EMAIL@example.com'

/**
 * Translated like the rest of the interface rather than written once in one
 * language: the app ships in six, and a reader who picked Arabic should not
 * be handed a Turkish privacy policy.
 */
const sections: { title: UiKey; body: UiKey[] }[] = [
  {
    title: 'ppCollectT',
    body: [
      'ppCollect1',
      'ppCollect2',
      'ppCollect3',
      'ppCollect4',
      'ppCollect5',
      'ppCollect6',
    ],
  },
  {
    title: 'ppDeviceT',
    body: ['ppDevice1', 'ppDevice2', 'ppDevice3', 'ppDevice4'],
  },
  { title: 'ppUseT', body: ['ppUse1', 'ppUse2', 'ppUse3'] },
  { title: 'ppShareT', body: ['ppShare1', 'ppShare2', 'ppShare3'] },
  { title: 'ppKeepT', body: ['ppKeep1', 'ppKeep2'] },
  { title: 'ppDeleteT', body: ['ppDelete1', 'ppDelete2', 'ppDelete3'] },
]

export default function PrivacyPolicyPage() {
  const { lang } = useApp()

  return (
    <div className="mx-auto max-w-md px-5 pb-[calc(7rem+var(--safe-bottom))] pt-[calc(1.5rem+var(--safe-top))]">
      <Link
        to="/profile"
        className="tap inline-flex w-fit items-center gap-1 rounded-full border border-atlas-line bg-atlas-surface px-3 py-1.5 text-xs font-semibold text-atlas-body shadow-card"
      >
        <ChevronLeft size={16} className="rtl:rotate-180" />
        {t('back', lang)}
      </Link>

      <h1 className="mt-6 font-serif text-[32px] font-semibold leading-tight text-atlas-ink">
        {t('privacyPolicy', lang)}
      </h1>
      <p className="mt-2 text-sm text-atlas-muted">
        Atlas of Style · {t('ppUpdated', lang)}
      </p>

      <div className="mt-6 space-y-6">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-serif text-[19px] font-semibold text-atlas-ink">
              {t(s.title, lang)}
            </h2>
            <div className="mt-2 space-y-2">
              {s.body.map((key) => (
                <p key={key} className="text-sm leading-relaxed text-atlas-body">
                  {t(key, lang)}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* Last, and a real link rather than an address to copy out by hand:
            a contact nobody can reach is the same as no contact at all. */}
        <section>
          <h2 className="font-serif text-[19px] font-semibold text-atlas-ink">
            {t('ppContactT', lang)}
          </h2>
          <div className="mt-2 space-y-2">
            <p className="text-sm leading-relaxed text-atlas-body">
              {t('ppContact1', lang)}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              dir="ltr"
              className="tap inline-flex w-fit items-center rounded-full border border-atlas-line bg-atlas-surface px-3 py-1.5 text-sm font-semibold text-atlas-clay shadow-card"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
