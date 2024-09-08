import Figure from './Figure'
import Manga from './Manga'
import Keychain from './Keychain'
import Box from './Box'
import Footer from './Footer'
import Header from './Header'
import SmallFigure from './SmallFigure'

function App() {
 
  return (
    <main>
    <Header />
    <div>
      <Figure />
    </div>
    <div>
      <SmallFigure/>
    </div>
    <div>
      <Box />
    </div>
    <div>
      <Manga />
    </div>
    <div>
      <Keychain />
    </div>
    <Footer />
  </main>
  )
}

export default App
