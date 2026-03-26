import { useRef, useEffect } from 'react'
import './About.css'

const lifestyleImg = '/fotos-cliente/WhatsApp%20Image%202026-03-23%20at%2022.38.495.jpeg'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.15}s`
              el.classList.add('animated')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" className="about section" ref={sectionRef}>
      <div className="container">
        <div className="about__inner">
          <div className="about__text">
            <h2 className="about__tagline animate">NO MORE FLAT DAYS</h2>
            <p className="about__desc animate">
              A YOW nasceu como uma alternativa de surf para dias sem onda e como uma 
              ferramenta para disponibilizar o surf para surfistas sem litoral. Após anos de 
              desenvolvimento, criamos um sistema que traz a sensação mais próxima do surf em terra.
            </p>
            <p className="about__desc animate">
              Com um YOW você pode surfar em qualquer lugar do mundo. Cave e rasgue as ruas com YOW.
            </p>
            <p className="about__origin animate">
              Made In Basque Country — Europe
            </p>
          </div>

          <div className="about__image animate">
            <img src={lifestyleImg} alt="Surfista praticando carving na rua com simulador de surf Yow" loading="lazy" />
          </div>

          <div className="about__stats animate">
            <div className="stat">
              <div className="stat__number">15+</div>
              <div className="stat__label">Anos de Inovação</div>
            </div>
            <div className="stat">
              <div className="stat__number">50+</div>
              <div className="stat__label">Países</div>
            </div>
            <div className="stat">
              <div className="stat__number">#1</div>
              <div className="stat__label">Simulador de Surf</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
