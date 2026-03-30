import { useRef, useEffect, useState } from 'react'
import './BenefitsCarousel.css'

const benefits = [
  {
    title: 'Melhora do Equilíbrio e Coordenação',
    desc: 'Um simulador de surf de qualidade ativa profundamente o core e os músculos estabilizadores. Os modelos da Yow Surf, graças ao Meraki S5, elevam esse treino a outro nível, exigindo controle real de borda e transferência de peso — exatamente como no surf.',
    icon: '⚖️',
  },
  {
    title: 'Desenvolvimento de Memória Muscular',
    desc: 'A precisão do movimento é fundamental para criar memória muscular eficiente. O sistema da Yow Surf permite repetir movimentos com fidelidade absoluta, algo que simuladores inferiores simplesmente não conseguem entregar.',
    icon: '🧠',
  },
  {
    title: 'Treino Fora do Mar',
    desc: 'Treinar com um simulador de surf Yow significa manter evolução constante, independentemente das condições do mar. A consistência do equipamento garante que cada sessão seja produtiva.',
    icon: '🏄',
  },
  {
    title: 'Condicionamento Físico',
    desc: 'Além de técnico, o treino com simulador de surf Yow é extremamente físico. A resposta dinâmica do Meraki S5 exige força, resistência e mobilidade, entregando um treino completo.',
    icon: '💪',
  },
]

export default function BenefitsCarousel() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="benefits section" ref={sectionRef}>
      <div className="container">
        <div className="benefits__header animate">
          <h2 className="benefits__title">Benefícios do Simulador de Surf para o Treinamento</h2>
          <p className="benefits__subtitle">
            O uso do simulador de surf oferece vantagens significativas para surfistas de todos os níveis — especialmente quando falamos de equipamentos de alta performance como os da Yow Surf.
          </p>
        </div>

        <div className="benefits__carousel animate">
          {benefits.map((b, i) => (
            <div key={i} className="benefits__card">
              <div className="benefits__icon">{b.icon}</div>
              <h3 className="benefits__card-title">{b.title}</h3>
              <p className="benefits__card-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
