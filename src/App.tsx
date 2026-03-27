import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { HomePage } from './pages/HomePage'
import { BondWatchPage } from './pages/BondWatchPage'
import { FightBondPage } from './pages/FightBondPage'
import { RequestHelpPage } from './pages/RequestHelpPage'
import { AboutSupportPage } from './pages/AboutSupportPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/bond-watch" element={<BondWatchPage />} />
        <Route path="/how-to-fight" element={<FightBondPage />} />
        <Route path="/request-help" element={<RequestHelpPage />} />
        <Route path="/about" element={<AboutSupportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
