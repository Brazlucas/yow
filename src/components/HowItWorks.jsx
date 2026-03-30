import { useRef, useEffect } from 'react'
import './HowItWorks.css'

const steps = [
  {
    num: '01',
    icon: '⚙️',
    title: 'Sistema Meraki S5',
    description:
      'O coração do simulador. O eixo dianteiro Meraki S5 é o sistema mais avançado de simulação de surf do mundo, com molas de compressão e extensão que replicam o comportamento de uma prancha sobre a água.',
    detail: 'Engenharia europeia de precisão',
  },
  {
    num: '02',
    icon: '🛹',
    title: 'Shape em Maple Canadense',
    description:
      'Cada shape é fabricado com 7 lâminas de maple canadense selecionado e prensado com processos industriais de altíssima precisão, garantindo resistência, flexibilidade e durabilidade superiores.',
    detail: 'Padrão europeu de qualidade',
  },
  {
    num: '03',
    icon: '🔄',
    title: 'Rodas URA de Alta Performance',
    description:
      'As rodas Yow URA são fabricadas na HLC (País Basco), a maior fábrica de rodas da Europa. Disponíveis em 78A (Mayo), 80A (Mustard) e 82A (Ketchup) para diferentes estilos de surfe.',
    detail: 'Grip perfeito para cada manobra',
  },
  {
    num: '04',
    icon: '🌊',
    title: 'A Sensação do Surf',
    description:
      'Com todos os componentes integrados, o resultado é uma sensação de surf autêntica: bottom turns, cutbacks, carvings, snaps e pumping — tudo com fidelidade de movimento real.',
    detail: 'Your Own Wave — surfe em qualquer lugar',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.hiw-step').forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.15}s`
              el.classList.add('hiw-step--visible')
            })
            entry.target.querySelectorAll('.animate').forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.1}s`
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
    <section className="hiw section" ref={sectionRef}>
      <div className="container">
        <div className="hiw__header animate">
          <p className="hiw__eyebrow">TECNOLOGIA</p>
          <h2 className="hiw__title">
            Como Funciona o<br />
            <span>Simulador de Surf YOW</span>
          </h2>
          <p className="hiw__lead">
            Cada componente é projetado para replicar com máxima fidelidade a dinâmica do surf.
            Conheça a engenharia por trás do melhor simulador de surf do mundo.
          </p>
        </div>

        <div className="hiw__timeline">
          <div className="hiw__timeline-line" />
          {steps.map((step) => (
            <div key={step.num} className="hiw-step">
              <div className="hiw-step__num">{step.num}</div>
              <div className="hiw-step__card">
                <div className="hiw-step__icon">{step.icon}</div>
                <h3 className="hiw-step__title">{step.title}</h3>
                <p className="hiw-step__desc">{step.description}</p>
                <span className="hiw-step__detail">{step.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
