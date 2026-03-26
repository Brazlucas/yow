import { useEffect, useRef } from 'react'
import './Hero.css'

const STORE_URL = 'https://yowsurfskate.com.br'

const CLIENT_IMG = '/fotos-cliente/WhatsApp%20Image%202026-03-23%20at%2022.38.48.jpeg'

export default function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const els = [subtitleRef.current, titleRef.current, ctaRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.animationDelay = `${0.2 + i * 0.2}s`
      el.classList.add('hero-animate')
    })
  }, [])

  return (
    <section className="hero">
      <div className="hero__bg">
        <img src={CLIENT_IMG} alt="Lifestyle Yow Surf" className="hero__bg-img" />
      </div>
      <div className="hero__overlay" />
      <div className="hero__content container">
        {/* Left: text */}
        <div className="hero__text">
          <p className="hero__eyebrow" ref={subtitleRef}>SENTIMENTO DE SURF, EM QUALQUER LUGAR</p>
          <h1 className="hero__title" ref={titleRef}>
            SIMULADOR<br />DE <span className="hero__title-accent">SURF</span>
          </h1>
          <p className="hero__sub">
            A verdadeira sensação de surfar o asfalto. Mantenha sua técnica afiada nos dias sem onda.
            <span className="hero__sub-highlight"> Seu surfe não pode parar.</span>
          </p>
          <div className="hero__ctas" ref={ctaRef}>
            <a
              href="#sobre"
              className="btn btn--primary"
            >
              Descubra o Movimento
            </a>
            <a
              href="#faq"
              className="btn btn--outline"
            >
              Ver Benefícios
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-dot" />
      </div>
    </section>
  )
}
