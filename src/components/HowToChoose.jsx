import { useRef, useEffect } from 'react'
import './HowToChoose.css'

const steps = [
  {
    icon: '⚙️',
    title: 'Sistema de Eixo',
    description: 'O coração de um simulador de surf. O Meraki S5 da Yow Surf é considerado o sistema mais avançado do mundo, oferecendo precisão, fluidez e controle incomparáveis.',
  },
  {
    icon: '📏',
    title: 'Tamanho e Wheelbase',
    description: 'A Yow Surf oferece modelos com diferentes dimensões, todos projetados com base em estudos reais de dinâmica do surf, garantindo adaptação perfeita ao estilo de cada surfista.',
  },
  {
    icon: '🌲',
    title: 'Qualidade dos Materiais',
    description: 'Os simuladores Yow são fabricados com maple canadense selecionado, processos industriais de alta precisão e padrão europeu, garantindo durabilidade muito acima da média do mercado.',
  },
  {
    icon: '🛹',
    title: 'Rodas: Fator Decisivo',
    description: 'As rodas são fundamentais e as Yow URA são referência mundial, fabricadas na HLC no País Basco — a maior fábrica de rodas da Europa.',
    options: [
      { name: '78A (MAYO)', detail: 'Máximo grip e estabilidade' },
      { name: '80A (MUSTARD)', detail: 'Equilíbrio perfeito entre grip e velocidade' },
      { name: '82A (KETCHUP)', detail: 'Mais soltas, ideais para slides controlados' }
    ]
  }
]

export default function HowToChoose() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.1}s`
              el.classList.add('animated')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="htc section" ref={sectionRef}>
      <div className="container">
        <div className="htc__header animate">
          <h2 className="htc__title">Como Escolher o Melhor<br/><span>Simulador de Surf</span></h2>
          <p className="htc__subtitle">
            Escolher um simulador vai muito além de estética — trata-se de tecnologia, engenharia e qualidade de construção.
          </p>
        </div>

        <div className="htc__grid animate">
          {steps.map((step, idx) => (
            <div key={idx} className={`htc__card ${step.options ? 'htc__card--large' : ''}`}>
              <div className="htc__card-icon">{step.icon}</div>
              <h3 className="htc__card-title">{step.title}</h3>
              <p className="htc__card-desc">{step.description}</p>
              
              {step.options && (
                <ul className="htc__options">
                  {step.options.map((opt, i) => (
                    <li key={i}>
                      <strong>{opt.name}</strong> – {opt.detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
