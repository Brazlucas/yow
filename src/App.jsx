import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Athletes from './components/Athletes'
import MarqueeBanner from './components/MarqueeBanner'
import BlogHero from './components/BlogHero'
import WhatIsSimulator from './components/WhatIsSimulator'
import BenefitsCarousel from './components/BenefitsCarousel'
import LevelsSplit from './components/LevelsSplit'
import HowToChoose from './components/HowToChoose'
import LifestyleEditorial from './components/LifestyleEditorial'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <Athletes />
      <BlogHero />
      <WhatIsSimulator />
      <BenefitsCarousel />
      <LevelsSplit />
      <HowToChoose />
      <LifestyleEditorial />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
