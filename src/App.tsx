import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router'
import { AppProvider } from '@/context/AppContext'
import BottomNav from '@/components/BottomNav'
import PageTransition from '@/components/PageTransition'
import PageLoader from '@/components/PageLoader'
import UnlockToast from '@/components/UnlockToast'
import HomePage from '@/pages/Home'

/**
 * Home ships in the entry chunk so the first screen paints without a second
 * request. Every other route is split out, which keeps the initial download
 * off the packing lists, quiz, guides and city data — all six translations of
 * each — that most sessions never open.
 */
const CountryDetailPage = lazy(() => import('@/pages/CountryDetail'))
const CityDetailPage = lazy(() => import('@/pages/CityDetail'))
const TimeTravelPage = lazy(() => import('@/pages/TimeTravel'))
const FavoritesPage = lazy(() => import('@/pages/Favorites'))
const ToolsPage = lazy(() => import('@/pages/Tools'))
const PackingPage = lazy(() => import('@/pages/Packing'))
const QuizPage = lazy(() => import('@/pages/Quiz'))
const PremiumPage = lazy(() => import('@/pages/Premium'))
const GuideDetailPage = lazy(() => import('@/pages/GuideDetail'))
const ProfilePage = lazy(() => import('@/pages/Profile'))
const Login = lazy(() => import('@/pages/Login'))
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicy'))
const NotFound = lazy(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <AppProvider>
      {/* bg-background resolves to the Atlas paper token, so light and dark
          are driven from one place instead of a hardcoded hex. */}
      <div className="min-h-screen bg-background">
        <PageTransition>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/country/:slug" element={<CountryDetailPage />} />
              <Route path="/city/:slug" element={<CityDetailPage />} />
              <Route path="/time-travel" element={<TimeTravelPage />} />
              <Route path="/time-travel/:eraId" element={<TimeTravelPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/packing" element={<PackingPage />} />
              <Route path="/packing/:slug" element={<PackingPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/premium" element={<PremiumPage />} />
              <Route path="/guides/:slug" element={<GuideDetailPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
        <BottomNav />
        <UnlockToast />
      </div>
    </AppProvider>
  )
}
