import Manga from './Manga'
import Keychain from './Keychain'
import Box from './Box'
import Footer from './Footer'
import Header from './Header'
import SmallFigure from './SmallFigure'

function App() {
  return (
    <main>
      <div>
        <Header />
      </div>
      <div>
        <SmallFigure />
      </div>
      <div>
        <Keychain />
      </div>
      <div>
        <Box />
      </div>
      <div>
        <Manga />
      </div>
      <Footer />
    </main>
  )
}

export default App
