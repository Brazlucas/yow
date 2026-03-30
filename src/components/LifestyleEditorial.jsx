import { useRef, useEffect } from 'react'
import './LifestyleEditorial.css'

const exerciseImg = '/fotos-cliente/WhatsApp%20Image%202026-03-23%20at%2022.38.494.jpeg'
const conclusionImg = '/fotos-cliente/WhatsApp%20Image%202026-03-23%20at%2022.38.506.jpeg'

export default function LifestyleEditorial() {
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
    <section className="editorial" ref={sectionRef}>
      
      {/* EXERCISES & LIFESTYLE */}
      <div className="container editorial__split panel-exercises">
        <div className="editorial__text animate">
          <p className="editorial__eyebrow">A CULTURA DO SURF NO ASFALTO</p>
          <h2 className="editorial__title">Ferramenta de Lifestyle</h2>
          <p className="editorial__lead">
            O simulador de surf ultrapassou o treino e se tornou parte do lifestyle. A Yow Surf representa esse movimento com excelência, 
            unindo design premium, engenharia avançada e performance real. Não é apenas um equipamento — é uma extensão do surf fora da água.
          </p>
          
          <div className="editorial__box">
            <h3>Exercícios para treinar com Yow:</h3>
            <ul>
              <li>Carving contínuo com fluidez total</li>
              <li>Pumping com geração real de velocidade</li>
              <li>Transições rápidas com resposta imediata</li>
              <li>Compressão e extensão com feedback preciso</li>
              <li>Simulação de linhas de onda com controle absoluto</li>
            </ul>
            <p className="mt-2 text-sm italic opacity-70">Graças ao Meraki S5 e às rodas de alta performance, cada movimento se aproxima ao máximo do surf real.</p>
          </div>
          
          <div className="editorial__trending mt-4">
            <h3>Por que o simulador de surf está em alta?</h3>
            <p>O crescimento está diretamente ligado à busca por evolução constante. A Yow lidera com autoridade global por entregar tecnologia pioneira, qualidade incomparável e sensação real de surf. Enquanto muitos copiam, a Yow continua sendo a referência.</p>
          </div>
        </div>

        <div className="editorial__image animate delay-1">
          <img src={exerciseImg} alt="Lifestyle e cultura Yow" loading="lazy" />
        </div>
      </div>

      {/* CONCLUSION BANNER */}
      <div className="editorial__conclusion">
        <div className="editorial__conclusion-bg animate">
          <img src={conclusionImg} alt="Conclusão e Investimento Yow Surf" loading="lazy" />
          <div className="editorial__conclusion-overlay" />
        </div>
        
        <div className="container editorial__conclusion-content animate delay-2">
          <h2>Conclusão: vale a pena investir em um simulador de surf?</h2>
          <p className="large-text block-quote">
            "Sem dúvida, o simulador de surf é um dos melhores investimentos para evolução. A Yow Surf entrega o mais alto nível do mundo."
          </p>
          <p>
            Com o sistema Meraki S5, materiais premium, construção europeia e rodas de altíssimo desempenho (78A, 80A e 82A), 
            cada detalhe é pensado para proporcionar a experiência mais próxima possível do surf real.
          </p>
          <p className="highlight-text">
            Treinar com um simulador de surf Yow não é apenas treinar — é evoluir com o melhor equipamento disponível no planeta.
          </p>
        </div>
      </div>

    </section>
  )
}
