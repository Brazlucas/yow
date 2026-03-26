import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Announcement from './components/Announcement'
import About from './components/About'
import Athletes from './components/Athletes'
import MarqueeBanner from './components/MarqueeBanner'
import SeoGuide from './components/SeoGuide'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Announcement />
      <Navbar />
      <Hero />
      <About />
      <MarqueeBanner />
      <Athletes />
      <SeoGuide />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
