import { useState } from 'react'
import { Link } from 'react-router'
import { Heart, StickyNote, LogOut, UserRound, ShieldCheck, Trash2 } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { useAuth } from '@/hooks/useAuth'
import { t } from '@/i18n'
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

export default function ProfilePage() {
  const { lang, favorites, notes } = useApp()
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
      <h1 className="font-serif text-4xl font-semibold text-stone-900">{t('profile', lang)}</h1>

      {isAuthenticated && user ? (
        <>
          <div className="mt-6 flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            {user.avatar ? (
              <img src={user.avatar} alt="" className="h-14 w-14 rounded-full object-cover" />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c2603a]/10 text-[#c2603a]">
                <UserRound size={24} />
              </div>
            )}
            <div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                {user.name || '—'}
              </h3>
              {user.email && <p className="text-sm text-stone-500">{user.email}</p>}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link
              to="/favorites"
              className="rounded-2xl border border-stone-200 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-0.5"
            >
              <Heart size={20} className="mx-auto text-[#c2603a]" />
              <p className="mt-2 font-serif text-2xl font-semibold text-stone-900">
                {favorites.length}
              </p>
              <p className="text-xs text-stone-500">{t('favoriteCount', lang)}</p>
            </Link>
            <div className="rounded-2xl border border-stone-200 bg-white p-5 text-center shadow-sm">
              <StickyNote size={20} className="mx-auto text-[#c2603a]" />
              <p className="mt-2 font-serif text-2xl font-semibold text-stone-900">{noteCount}</p>
              <p className="text-xs text-stone-500">{t('noteCount', lang)}</p>
            </div>
          </div>

          <button
            onClick={logout}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-stone-300 bg-white py-3 text-sm font-medium text-stone-600 shadow-sm transition-colors hover:border-red-300 hover:text-red-600"
          >
            <LogOut size={16} />
            {t('logout', lang)}
          </button>

          <Link
            to="/privacy"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-white py-3 text-sm font-medium text-stone-500 shadow-sm transition-colors hover:text-stone-700"
          >
            <ShieldCheck size={16} />
            {t('privacyPolicy', lang)}
          </Link>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 py-3 text-sm font-medium text-red-600 shadow-sm transition-colors hover:bg-red-100"
              >
                <Trash2 size={16} />
                {t('deleteAccount', lang)}
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{t('deleteAccountTitle', lang)}</AlertDialogTitle>
                <AlertDialogDescription>{t('deleteAccountDesc', lang)}</AlertDialogDescription>
              </AlertDialogHeader>
              {deleteError && <p className="text-sm text-red-600">{deleteError}</p>}
              <AlertDialogFooter>
                <AlertDialogCancel>{t('cancel', lang)}</AlertDialogCancel>
                <AlertDialogAction
                  disabled={isDeletingAccount}
                  onClick={(e) => {
                    e.preventDefault()
                    void confirmDelete()
                  }}
                  className="bg-red-600 text-white hover:bg-red-700"
                >
                  {t('deleteAccountConfirm', lang)}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      ) : (
        !isLoading && (
          <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-stone-100 text-stone-400">
              <UserRound size={24} />
            </div>
            <h3 className="mt-3 font-serif text-xl font-semibold text-stone-900">
              {t('guest', lang)}
            </h3>
            <p className="mx-auto mt-1.5 max-w-xs text-sm leading-relaxed text-stone-500">
              {t('guestDesc', lang)}
            </p>
            <Link
              to="/login"
              className="mt-5 inline-block rounded-full bg-[#c2603a] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#a9512f]"
            >
              {t('loginButton', lang)}
            </Link>
            <Link
              to="/privacy"
              className="mt-3 flex items-center justify-center gap-1.5 text-xs text-stone-400 hover:text-stone-600"
            >
              <ShieldCheck size={13} />
              {t('privacyPolicy', lang)}
            </Link>
          </div>
        )
      )}
    </div>
  )
}
