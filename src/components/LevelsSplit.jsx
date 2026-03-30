import { useRef, useEffect } from 'react'
import './LevelsSplit.css'

const levelData = {
  iniciantes: {
    title: 'Simulador de Surf para Iniciantes',
    desc: 'Para quem está começando, o simulador de surf é uma das ferramentas mais eficientes de aprendizado. E aqui existe uma grande diferença: iniciar com um equipamento de alta qualidade acelera drasticamente a evolução.',
    points: ['Estabilidade com fluidez', 'Controle progressivo', 'Feedback real do movimento'],
    conclusion: 'Isso evita vícios de técnica causados por equipamentos de baixa qualidade e garante uma base sólida desde o início.'
  },
  avancados: {
    title: 'Simulador de Surf para Avançados',
    desc: 'Surfistas experientes sabem que a qualidade do equipamento impacta diretamente a performance. O simulador de surf Yow, com o sistema Meraki S5, é utilizado por atletas que buscam alcançar o próximo nível.',
    points: ['Máxima precisão de linha', 'Velocidade de resposta', 'Fluidez contínua', 'Explosão em manobras'],
    conclusion: 'A engenharia da Yow Surf permite reproduzir com extrema fidelidade a dinâmica do surf de alta performance, tornando o treino eficiente.'
  }
}

export default function LevelsSplit() {
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
    <section className="levels" ref={sectionRef}>
      <div className="levels__half levels__half--iniciantes">
        <div className="levels__content animate">
          <div className="levels__tag">INICIANTE</div>
          <h2 className="levels__title">{levelData.iniciantes.title}</h2>
          <p className="levels__desc">{levelData.iniciantes.desc}</p>
          
          <div className="levels__points">
            <p className="levels__points-title">Os simuladores Yow proporcionam:</p>
            <ul>
              {levelData.iniciantes.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
          
          <p className="levels__conclusion">{levelData.iniciantes.conclusion}</p>
        </div>
      </div>

      <div className="levels__half levels__half--avancados">
        <div className="levels__content animate">
          <div className="levels__tag levels__tag--dark">AVANÇADO</div>
          <h2 className="levels__title">{levelData.avancados.title}</h2>
          <p className="levels__desc">{levelData.avancados.desc}</p>
          
          <div className="levels__points">
            <p className="levels__points-title">Atletas buscam:</p>
            <ul>
              {levelData.avancados.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
          
          <p className="levels__conclusion">{levelData.avancados.conclusion}</p>
        </div>
      </div>
    </section>
  )
}
