import { Routes, Route } from 'react-router'
import { AppProvider } from '@/context/AppContext'
import BottomNav from '@/components/BottomNav'
import HomePage from '@/pages/Home'
import CountryDetailPage from '@/pages/CountryDetail'
import FavoritesPage from '@/pages/Favorites'
import ToolsPage from '@/pages/Tools'
import PackingPage from '@/pages/Packing'
import QuizPage from '@/pages/Quiz'
import PremiumPage from '@/pages/Premium'
import GuideDetailPage from '@/pages/GuideDetail'
import CityDetailPage from '@/pages/CityDetail'
import ProfilePage from '@/pages/Profile'
import Login from '@/pages/Login'
import PrivacyPolicyPage from '@/pages/PrivacyPolicy'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#faf7f2]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:slug" element={<CountryDetailPage />} />
          <Route path="/city/:slug" element={<CityDetailPage />} />
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
        <BottomNav />
      </div>
    </AppProvider>
  )
}
