import { useRef, useEffect } from 'react'
import './Athletes.css'

const realImg = (file) => `/fotos-cliente/${encodeURIComponent(file)}`;

const athletes = [
  {
    name: 'Surf de Linha',
    subtitle: 'FLUIDEZ CONSTANTE',
    description: 'Treine suas manobras e desenvolva uma linha de surf fluida conectando movimentos perfeitos no asfalto.',
    lifestyleImg: realImg('WhatsApp Image 2026-03-23 at 22.38.49.jpeg'),
    accentColor: '#d4a0b0',
  },
  {
    name: 'Força e Potência',
    subtitle: 'MANOBRAS CRÍTICAS',
    description: 'Aprimore a força das suas rasgadas e batidas usando as transições urbanas como o seu laboratório diário.',
    lifestyleImg: realImg('WhatsApp Image 2026-03-23 at 22.38.492.jpeg'),
    accentColor: '#e8c200',
  },
  {
    name: 'Memória Muscular',
    subtitle: 'REPETIÇÃO E TÉCNICA',
    description: 'Evolua muito mais rápido construindo a técnica correta de posicionamento do corpo através da repetição.',
    lifestyleImg: realImg('WhatsApp Image 2026-03-23 at 22.38.494.jpeg'),
    accentColor: '#4a90d9',
  },
  {
    name: 'Estilo & Atitude',
    subtitle: 'EXPRESSÃO NA PISTA',
    description: 'O simulador de surf é mais do que treino — é expressão. Leve seu estilo para bowls, rampas e qualquer terreno.',
    lifestyleImg: realImg('WhatsApp Image 2026-03-23 at 22.38.493.jpeg'),
    accentColor: '#e06c75',
  },
  {
    name: 'Treino em Qualquer Lugar',
    subtitle: 'SEM LIMITES',
    description: 'Com a Yow, qualquer rua vira sua wave. Mantenha o condicionamento e a técnica afiada, esteja onde estiver.',
    lifestyleImg: realImg('WhatsApp Image 2026-03-23 at 22.38.506.jpeg'),
    accentColor: '#56b6c2',
  },
]

export default function Athletes() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.athlete-card').forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.12}s`
              el.classList.add('athlete-card--visible')
            })
            entry.target.querySelectorAll('.animate').forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.08}s`
              el.classList.add('animated')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="comunidade" className="athletes section" ref={sectionRef}>
      <div className="container">
        <h2 className="athletes__title animate">Evolução Constante</h2>
        <p className="athletes__subtitle animate">Mantenha o seu preparo físico, mental e técnico sempre em dia.</p>
      </div>
      <div className="athletes__grid">
        {athletes.slice(0, 3).map(athlete => (
          <div key={athlete.name} className="athlete-card">
            <div className="athlete-card__bg">
              <img src={athlete.lifestyleImg} alt={athlete.name} loading="lazy" />
              <div className="athlete-card__bg-overlay" />
            </div>
            
            <div className="athlete-card__info">
              <p className="athlete-card__eyebrow" style={{ color: athlete.accentColor }}>{athlete.subtitle}</p>
              <h3 className="athlete-card__name">{athlete.name}</h3>
              <p className="athlete-card__desc">{athlete.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="athletes__grid athletes__grid--two">
        {athletes.slice(3).map(athlete => (
          <div key={athlete.name} className="athlete-card">
            <div className="athlete-card__bg">
              <img src={athlete.lifestyleImg} alt={athlete.name} loading="lazy" />
              <div className="athlete-card__bg-overlay" />
            </div>
            
            <div className="athlete-card__info">
              <p className="athlete-card__eyebrow" style={{ color: athlete.accentColor }}>{athlete.subtitle}</p>
              <h3 className="athlete-card__name">{athlete.name}</h3>
              <p className="athlete-card__desc">{athlete.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
