import { useState, useEffect } from 'react'
import './Navbar.css'

const STORE_URL = 'https://yowsurfskate.com.br'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <div className="navbar__logo" style={{ width: 60, visibility: 'hidden' }}>
          {/* Logo removed verbatim request */}
        </div>

        <ul className="navbar__links">
          <li><a href="#sobre">O que é?</a></li>
          <li><a href="#comunidade">Comunidade</a></li>
          <li><a href="#faq">Benefícios</a></li>
          <li><a href={`${STORE_URL}/pages/historia`} target="_blank" rel="noreferrer">História</a></li>
        </ul>

        <div className="navbar__actions">
          <a
            href={`${STORE_URL}`}
            target="_blank"
            rel="noreferrer"
            className="navbar__cta"
          >
            Descubra
          </a>
          <button
            className={`navbar__hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul>
          <li><a href="#sobre" onClick={() => setMenuOpen(false)}>O que é?</a></li>
          <li><a href="#comunidade" onClick={() => setMenuOpen(false)}>Comunidade</a></li>
          <li><a href="#faq" onClick={() => setMenuOpen(false)}>Benefícios</a></li>
          <li><a href={`${STORE_URL}/pages/historia`} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>História da Marca</a></li>
        </ul>
      </div>
    </nav>
  )
}
