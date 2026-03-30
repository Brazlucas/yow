import { useRef, useEffect, useState } from 'react'
import './Athletes.css'

const realImg = (file) => `/fotos-cliente/${encodeURIComponent(file)}`;

const athletes = [
  {
    name: 'Surf de Linha',
    subtitle: 'FLUIDEZ CONSTANTE',
    description: 'Treine suas manobras e desenvolva uma linha de surf fluida conectando movimentos perfeitos no asfalto.',
    extendedText: 'A fluidez constante do simulador de surf YOW permite que você entenda a transferência de peso entre as bordas, aprimorando seu estilo (flow). Treinando linhas contínuas, você desenvolve a habilidade de gerar velocidade de forma natural e sem esforço, essencial para conectar seções na onda real e não perder o timing.',
    lifestyleImg: realImg('WhatsApp Image 2026-03-23 at 22.38.49.jpeg'),
    accentColor: '#d4a0b0',
  },
  {
    name: 'Força e Potência',
    subtitle: 'MANOBRAS CRÍTICAS',
    description: 'Aprimore a força das suas rasgadas e batidas usando as transições urbanas como o seu laboratório diário.',
    extendedText: 'As manobras críticas exigem uma base forte e compressão correta. Usando o simulador em transições urbanas (como pistas de skate e ladeiras), você aplica grande pressão nas pernas, o que se traduz em batidas mais explosivas e rasgadas com muito mais projeção quando você voltar para a água.',
    lifestyleImg: realImg('WhatsApp Image 2026-03-23 at 22.38.492.jpeg'),
    accentColor: '#e8c200',
  },
  {
    name: 'Memória Muscular',
    subtitle: 'REPETIÇÃO E TÉCNICA',
    description: 'Evolua muito mais rápido construindo a técnica correta de posicionamento do corpo através da repetição.',
    extendedText: 'A repetição leva à perfeição. O sistema Meraki S5 copia exatamente a física da prancha. Ao realizar o movimento repetidas vezes fora d\'água — corrigindo postura, posicionamento dos braços e olhar — seu corpo automatiza a técnica. Dessa forma, suas decisões no mar se tornam instintiivas e precisas.',
    lifestyleImg: realImg('WhatsApp Image 2026-03-23 at 22.38.494.jpeg'),
    accentColor: '#4a90d9',
  },
  {
    name: 'Estilo & Atitude',
    subtitle: 'EXPRESSÃO NA PISTA',
    description: 'O simulador de surf é mais do que treino — é expressão. Leve seu estilo para bowls, rampas e qualquer terreno.',
    extendedText: 'Cada surfista tem sua própria assinatura na onda. O simulador permite que você explore e refine seu estilo pessoal, trazendo mais atitude para o seu surf. É a plataforma perfeita para soltar os braços, testar novas linhas em bowls e se expressar livremente, elevando a estética da sua performance.',
    lifestyleImg: realImg('WhatsApp Image 2026-03-23 at 22.38.493.jpeg'),
    accentColor: '#e06c75',
  },
  {
    name: 'Treino em Qualquer Lugar',
    subtitle: 'SEM LIMITES',
    description: 'Com a Yow, qualquer rua vira sua wave. Mantenha o condicionamento e a técnica afiada, esteja onde estiver.',
    extendedText: 'A maior vantagem do simulador YOW é a liberdade. Não importa se o mar está flat, se você mora longe da praia ou se tem pouco tempo livre. Qualquer superfície lisa, garagem ou ladeira se transforma na sua própria onda (Your Own Wave), garantindo que sua evolução não fique dependente da previsão do mar.',
    lifestyleImg: realImg('WhatsApp Image 2026-03-23 at 22.38.506.jpeg'),
    accentColor: '#56b6c2',
  },
]

export default function Athletes() {
  const sectionRef = useRef(null)
  const [activeModal, setActiveModal] = useState(null)

  // Desativar scroll quando o modal estiver aberto
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [activeModal])

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
          <div 
            key={athlete.name} 
            className="athlete-card" 
            onClick={() => setActiveModal(athlete)}
            role="button"
            tabIndex={0}
          >
            <div className="athlete-card__bg">
              <img src={athlete.lifestyleImg} alt={athlete.name} loading="lazy" />
              <div className="athlete-card__bg-overlay" />
            </div>
            
            <div className="athlete-card__info">
              <p className="athlete-card__eyebrow" style={{ color: athlete.accentColor }}>{athlete.subtitle}</p>
              <h3 className="athlete-card__name">{athlete.name}</h3>
              <p className="athlete-card__desc">{athlete.description}</p>
              <span className="athlete-card__cta" style={{ color: athlete.accentColor }}>Ler Mais +</span>
            </div>
          </div>
        ))}
      </div>
      <div className="athletes__grid athletes__grid--two">
        {athletes.slice(3).map(athlete => (
          <div 
            key={athlete.name} 
            className="athlete-card" 
            onClick={() => setActiveModal(athlete)}
            role="button"
            tabIndex={0}
          >
            <div className="athlete-card__bg">
              <img src={athlete.lifestyleImg} alt={athlete.name} loading="lazy" />
              <div className="athlete-card__bg-overlay" />
            </div>
            
            <div className="athlete-card__info">
              <p className="athlete-card__eyebrow" style={{ color: athlete.accentColor }}>{athlete.subtitle}</p>
              <h3 className="athlete-card__name">{athlete.name}</h3>
              <p className="athlete-card__desc">{athlete.description}</p>
              <span className="athlete-card__cta" style={{ color: athlete.accentColor }}>Ler Mais +</span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeModal && (
        <div className="athletes-modal active" onClick={() => setActiveModal(null)}>
          <div className="athletes-modal__overlay"></div>
          <div className="athletes-modal__content" onClick={e => e.stopPropagation()}>
            <button className="athletes-modal__close" onClick={() => setActiveModal(null)} aria-label="Fechar Modal">✕</button>
            <div className="athletes-modal__split">
              <div className="athletes-modal__img">
                <img src={activeModal.lifestyleImg} alt={activeModal.name} />
              </div>
              <div className="athletes-modal__text">
                <p className="athletes-modal__eyebrow" style={{ color: activeModal.accentColor }}>{activeModal.subtitle}</p>
                <h3 className="athletes-modal__title">{activeModal.name}</h3>
                <p className="athletes-modal__desc">{activeModal.description}</p>
                <div className="athletes-modal__extended">
                  <p>{activeModal.extendedText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
