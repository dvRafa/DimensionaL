import Header from './Header'
import Keychains from './Keychains/Keychains'
import KeychainsDetails from './Keychains/KeychainDetails'
import KeychainsOptions from './Keychains/KeychainsOptions'
import Collectibles from './Collectibles/Collectibles'
import CollectiblesDetails from './Collectibles/CollectiblesDetails'
import CollectiblesOptions from './Collectibles/CollectiblesOptions'
import SmallFigures from './SmallFigures/SmallFigures'
import SmallFiguresDetails from './SmallFigures/SmallFiguresDetails'
import MangaA from './Mangas/MangaA'
import MangasDetails from './Mangas/MangasDetails'
import MangasOptions from './Mangas/MangasOptions'
import Footer from './Footer'

import ErrorPage from './ErrorPage'

import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import SmallFiguresOptions from './SmallFigures/SmallFiguresOptions'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function Main() {

  return (
    <main>
      <Collectibles />
      <Keychains />
      <SmallFigures />
      <MangaA />
    </main>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main>
        <Header />
        <Routes>
          <Route
            path='/dimm/'
            element={<Main />}
          />
          <Route
            path='/dimm/Collectible/:id'
            element={<CollectiblesDetails />}
          />
          <Route
            path='/dimm/SmallFigure/:id'
            element={<SmallFiguresDetails />}
          />
          <Route
            path='/dimm/Keychain/:id'
            element={<KeychainsDetails />}
          />
          <Route
            path='/dimm/Manga/:id'
            element={<MangasDetails />}
          />
          <Route
            path='/dimm/Collectibles/Figures'
            element={<CollectiblesOptions />}
          />
          <Route
            path='/dimm/Mangas/Options'
            element={<MangasOptions />}
          />
          <Route
            path='/dimm/SmallFigures/Options'
            element={<SmallFiguresOptions />}
          />
          <Route
            path='/dimm/Keychains/Options'
            element={<KeychainsOptions />}
          />
          <Route
            path='/dimm/*'
            element={<ErrorPage />}
          />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
