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
            path='/DimensionaL/'
            element={<Main />}
          />
          <Route
            path='/DimensionaL/Collectible/:id'
            element={<CollectiblesDetails />}
          />
          <Route
            path='/DimensionaL/SmallFigure/:id'
            element={<SmallFiguresDetails />}
          />
          <Route
            path='/DimensionaL/Keychain/:id'
            element={<KeychainsDetails />}
          />
          <Route
            path='/DimensionaL/Manga/:id'
            element={<MangasDetails />}
          />
          <Route
            path='/DimensionaL/Data/About'
            element={<About />}
          />
          <Route
            path='/DimensionaL/Data/Terms-Conditions'
            element={<Terms />}
          />
          <Route
            path='/DimensionaL/Data/Contact'
            element={<Contact />}
          />
          <Route
            path='/DimensionaL/Collectibles/Figures'
            element={<CollectiblesOptions />}
          />
          <Route
            path='/DimensionaL/Mangas/Options'
            element={<MangasOptions />}
          />
          <Route
            path='/DimensionaL/SmallFigures/Options'
            element={<SmallFiguresOptions />}
          />
          <Route
            path='/DimensionaL/Keychains/Options'
            element={<KeychainsOptions />}
          />
          <Route
            path='/DimensionaL/*'
            element={<ErrorPage />}
          />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
