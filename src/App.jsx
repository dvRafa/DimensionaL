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
import About from './Data/About'
import Terms from './Data/Terns'
import Contact from './Data/Conatct'
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
import HomePage from './HomePage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function Main() {
  return (
    <>
      {/* <HomePage/> */}
      <Collectibles />
      <Keychains />
      <SmallFigures />
      <MangaA />
    </>
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
            path='/Anime-Goods/'
            element={<Main />}
          />
          <Route
            path='/Anime-Goods/Collectible/:id'
            element={<CollectiblesDetails />}
          />
          <Route
            path='/Anime-Goods/SmallFigure/:id'
            element={<SmallFiguresDetails />}
          />
          <Route
            path='/Anime-Goods/Keychain/:id'
            element={<KeychainsDetails />}
          />
          <Route
            path='/Anime-Goods/Manga/:id'
            element={<MangasDetails />}
          />
          <Route
            path='/Anime-Goods/Data/About'
            element={<About />}
          />
          <Route
            path='/Anime-Goods/Data/Terms-Conditions'
            element={<Terms />}
          />
          <Route
            path='/Anime-Goods/Data/Contact'
            element={<Contact />}
          />
          <Route
            path='/Anime-Goods/Collectibles/Figures'
            element={<CollectiblesOptions />}
          />
          <Route
            path='/Anime-Goods/Mangas/Options'
            element={<MangasOptions />}
          />
          <Route
            path='/Anime-Goods/SmallFigures/Options'
            element={<SmallFiguresOptions />}
          />
          <Route
            path='/Anime-Goods/Keychains/Options'
            element={<KeychainsOptions />}
          />
          <Route
            path='/Anime-Goods/*'
            element={<ErrorPage />}
          />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
