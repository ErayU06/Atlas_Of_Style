import { useState } from 'react'
import { Link } from 'react-router'
import {
  Heart,
  StickyNote,
  LogOut,
  UserRound,
  ShieldCheck,
  Trash2,
  Hourglass,
  Monitor,
  Moon,
  Sun,
} from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { useAuth } from '@/hooks/useAuth'
import { useTheme } from '@/hooks/useThemeMode'
import { t } from '@/i18n'
import SectionHeading from '@/components/SectionHeading'
import FashionPassport from '@/components/FashionPassport'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

/** Small stat plate used in the identity row. */
function Stat({
  icon,
  value,
  label,
  to,
}: {
  icon: React.ReactNode
  value: number
  label: string
  to?: string
}) {
  const body = (
    <>
      <span className="text-atlas-clay">{icon}</span>
      <p className="mt-2 font-serif text-[26px] font-semibold leading-none text-atlas-ink">
        {value}
      </p>
      <p className="mt-1.5 text-[11px] leading-tight text-atlas-muted">{label}</p>
    </>
  )
  const className =
    'flex flex-1 flex-col items-center rounded-2xl border border-atlas-line bg-atlas-surface p-4 text-center shadow-card'

  return to ? (
    <Link to={to} className={cn(className, 'tap')}>
      {body}
    </Link>
  ) : (
    <div className={className}>{body}</div>
  )
}

function ThemePicker() {
  const { lang } = useApp()
  const { theme, setTheme } = useTheme()

  const options = [
    { key: 'light', icon: Sun, label: t('themeLight', lang) },
    { key: 'dark', icon: Moon, label: t('themeDark', lang) },
    { key: 'system', icon: Monitor, label: t('themeSystem', lang) },
  ] as const

  return (
    <div className="rounded-2xl border border-atlas-line bg-atlas-surface p-4 shadow-card">
      <p className="kicker">{t('appearance', lang)}</p>
      <div className="mt-3 flex gap-2">
        {options.map(({ key, icon: Icon, label }) => {
          const active = (theme ?? 'system') === key
          return (
            <button
              key={key}
              type="button"
              onClick={() => setTheme(key)}
              aria-pressed={active}
              className={cn(
                'tap flex flex-1 flex-col items-center gap-1.5 rounded-xl border py-3 text-[11px] font-semibold transition-colors',
                active
                  ? 'border-atlas-clay/40 bg-atlas-clay/[0.08] text-atlas-clay'
                  : 'border-atlas-line bg-atlas-soft/40 text-atlas-muted',
              )}
            >
              <Icon size={16} />
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function ProfilePage() {
  const { lang, favorites, notes, discovery } = useApp()
  const { user, isAuthenticated, isLoading, logout, deleteAccount, isDeletingAccount } = useAuth()
  const noteCount = Object.values(notes).filter((n) => n.trim()).length
  const [deleteError, setDeleteError] = useState<string | null>(null)

  const confirmDelete = async () => {
    setDeleteError(null)
    try {
      await deleteAccount()
    } catch {
      setDeleteError(t('errGeneric', lang))
    }
  }

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-10">
      <header>
        <div className="flex items-start justify-between gap-3">
          <p className="kicker mt-1">{t('profile', lang)}</p>
          <LanguageSwitcher />
        </div>
        <h1 className="mt-2.5 font-serif text-[34px] font-semibold leading-[1.08] text-atlas-ink">
          {t('fashionIdentity', lang)}
        </h1>
        <p className="mt-2.5 text-sm leading-relaxed text-atlas-muted">
          {t('profileSubtitle', lang)}
        </p>
      </header>

      {/* ---- Who you are ------------------------------------------------ */}
      {isAuthenticated && user ? (
        <div className="mt-6 flex items-center gap-4 rounded-3xl border border-atlas-line bg-atlas-surface p-5 shadow-card">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt=""
              className="h-14 w-14 rounded-full object-cover ring-2 ring-atlas-clay/20"
            />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-atlas-clay/[0.09] text-atlas-clay">
              <UserRound size={24} />
            </div>
          )}
          <div className="min-w-0">
            <h2 className="truncate font-serif text-[21px] font-semibold text-atlas-ink">
              {user.name || '—'}
            </h2>
            {user.email && (
              <p className="truncate text-sm text-atlas-muted">{user.email}</p>
            )}
          </div>
        </div>
      ) : (
        !isLoading && (
          <div className="mt-6 rounded-3xl border border-atlas-line bg-atlas-surface p-6 text-center shadow-card">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-atlas-soft text-atlas-muted">
              <UserRound size={24} />
            </div>
            <h2 className="mt-3.5 font-serif text-[22px] font-semibold text-atlas-ink">
              {t('guest', lang)}
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-[13px] leading-relaxed text-atlas-muted">
              {t('guestDesc', lang)}
            </p>
            <Button asChild variant="atlas" size="pill" className="mt-5">
              <Link to="/login">{t('loginButton', lang)}</Link>
            </Button>
          </div>
        )
      )}

      {/* ---- What you have gathered ------------------------------------- */}
      <div className="mt-4 flex gap-2.5">
        <Stat
          icon={<Heart size={19} />}
          value={favorites.length}
          label={t('favoriteCount', lang)}
          to="/favorites"
        />
        <Stat
          icon={<Hourglass size={19} />}
          value={discovery.eras.length}
          label={t('erasCount', lang)}
          to="/time-travel"
        />
        <Stat icon={<StickyNote size={19} />} value={noteCount} label={t('noteCount', lang)} />
      </div>

      {/* ---- Fashion Passport ------------------------------------------- */}
      <section className="mt-10">
        <SectionHeading
          kicker={t('collection', lang)}
          title={t('passport', lang)}
          standfirst={t('passportSubtitle', lang)}
        />
        <FashionPassport variant="full" />
      </section>

      {/* ---- Settings --------------------------------------------------- */}
      <section className="mt-10">
        <SectionHeading kicker={t('appName', lang)} title={t('settingsLabel', lang)} />
        <ThemePicker />

        <Button asChild variant="atlasOutline" size="pill" className="mt-3 w-full">
          <Link to="/privacy">
            <ShieldCheck size={16} />
            {t('privacyPolicy', lang)}
          </Link>
        </Button>

        {isAuthenticated && user && (
          <>
            <Button
              variant="atlasOutline"
              size="pill"
              onClick={logout}
              className="mt-3 w-full hover:border-destructive/40 hover:text-destructive"
            >
              <LogOut size={16} />
              {t('logout', lang)}
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="tap mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-destructive/25 bg-destructive/[0.07] py-3 text-sm font-semibold text-destructive transition-colors hover:bg-destructive/[0.12]">
                  <Trash2 size={16} />
                  {t('deleteAccount', lang)}
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{t('deleteAccountTitle', lang)}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {t('deleteAccountDesc', lang)}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                {deleteError && <p className="text-sm text-destructive">{deleteError}</p>}
                <AlertDialogFooter>
                  <AlertDialogCancel>{t('cancel', lang)}</AlertDialogCancel>
                  <AlertDialogAction
                    disabled={isDeletingAccount}
                    onClick={(e) => {
                      e.preventDefault()
                      void confirmDelete()
                    }}
                    className="bg-destructive text-white hover:bg-destructive/90"
                  >
                    {t('deleteAccountConfirm', lang)}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        )}
      </section>

      <footer className="mt-10 text-center text-[11px] text-atlas-muted">
        {t('footer', lang)}
      </footer>
    </div>
  )
}
