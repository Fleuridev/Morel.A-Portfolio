import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Accueil from './pages/Accueil'
import Creations from './pages/Creations'
import CreationDetail from './pages/CreationDetail'
import Vision from './pages/Vision'
import Parcours from './pages/Parcours'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Accueil />} />
        <Route path="creations" element={<Creations />} />
        <Route path="creations/:slug" element={<CreationDetail />} />
        <Route path="vision" element={<Vision />} />
        <Route path="parcours" element={<Parcours />} />
        {/* Anciennes adresses, redirigées vers les nouvelles pages */}
        <Route path="univers" element={<Navigate to="/vision" replace />} />
        <Route path="process" element={<Navigate to="/vision" replace />} />
        <Route path="a-propos" element={<Navigate to="/parcours" replace />} />
        <Route path="archives" element={<Navigate to="/parcours" replace />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
