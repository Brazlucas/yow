import { useRef, useEffect } from 'react'
import './WhatIsSimulator.css'

const sideImg = '/fotos-cliente/WhatsApp%20Image%202026-03-23%20at%2022.38.495.jpeg'

const features = [
  'Resposta instantânea',
  'Fluidez natural',
  'Compressão e extensão realistas',
  'Sensação autêntica de linha de onda'
]

const maneuvers = ['Bottom turn', 'Cutback', 'Carving', 'Snap', 'Pumping']

export default function WhatIsSimulator() {
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
    <section className="whatis section" ref={sectionRef}>
      <div className="container">
        <div className="whatis__grid">
          
          <div className="whatis__content">
            <h2 className="whatis__title animate">O que é um Simulador de Surf?</h2>
            <div className="whatis__text animate">
              <p>
                O simulador de surf é um equipamento projetado para reproduzir os movimentos e a sensação do surf em terra firme. 
                Ele combina elementos de skate com sistemas avançados de eixo que permitem simular com extrema fidelidade o comportamento de uma prancha sobre a água.
              </p>
              <p className="whatis__highlight">
                <strong>Aqui está um ponto essencial:</strong> nem todo simulador de surf entrega uma experiência real de surf. É exatamente nesse ponto que a Yow Surf se diferencia.
              </p>
              <p>
                O sistema Meraki S5, desenvolvido pela Yow, é reconhecido mundialmente como o mais avançado e preciso sistema de simulação de surf já criado. Ele oferece:
              </p>
            </div>

            <ul className="whatis__features animate">
              {features.map((f, i) => (
                <li key={i}>
                  <span className="whatis__check">✓</span> {f}
                </li>
              ))}
            </ul>

            <div className="whatis__text animate mt-4">
              <p>
                Diferente de sistemas genéricos ou cópias, o Meraki S5 proporciona um movimento contínuo, 
                controlado e extremamente preciso — algo que apenas produtos de engenharia europeia de alto nível conseguem entregar.
              </p>
              <p className="mt-4">
                Com um simulador de surf Yow, é possível reproduzir manobras com fidelidade absoluta:
              </p>
            </div>

            <div className="whatis__tags animate">
              {maneuvers.map(m => (
                <span key={m} className="whatis__tag">{m}</span>
              ))}
            </div>
            
            <p className="whatis__text whatis__conclusion animate mt-4">
              Tudo isso com uma fidelidade de movimento que posiciona a Yow Surf como a maior autoridade global no segmento.
            </p>
          </div>

          <div className="whatis__image animate">
            <div className="whatis__image-wrapper">
              <img src={sideImg} alt="Engenharia do Simulador de Surf Yow" loading="lazy" />
              <div className="whatis__image-badge">SISTEMA MERAKI S5</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
