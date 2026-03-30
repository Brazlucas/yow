import { useRef, useEffect } from 'react'
import './BlogHero.css'

const heroImg = '/foto-para-substituir.jpg.jpeg'

export default function BlogHero() {
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
    <section id="blog-guide" className="blog-hero" ref={sectionRef}>
      <div className="blog-hero__bg">
        <img src={heroImg} alt="Simulador de Surf Yow em ação" loading="lazy" />
        <div className="blog-hero__overlay"></div>
      </div>
      <div className="container blog-hero__content">
        <p className="blog-hero__eyebrow animate">SÉRIE ESPECIAL</p>
        <h1 className="blog-hero__title animate">
          SIMULADOR<br/>DE SURF:<br/>
          <span>O GUIA DEFINITIVO PARA EVOLUIR FORA D’ÁGUA</span>
        </h1>
        <div className="blog-hero__text animate">
          <p>
            O simulador de surf revolucionou a forma como surfistas treinam equilíbrio, técnica e performance fora do mar. 
            Seja você iniciante ou atleta experiente, o uso de um simulador de surf permite desenvolver habilidades essenciais 
            que impactam diretamente sua evolução nas ondas reais.
          </p>
          <p>
            Dentro desse cenário, a <strong>Yow Surf</strong> se destaca como a maior referência mundial em simulador de surf, 
            entregando um nível de qualidade incomparável. Seus produtos são fabricados na Europa com materiais de altíssimo padrão, 
            precisão extrema e durabilidade superior — características que colocam a marca no topo absoluto do mercado global.
          </p>
          <p>
            Neste guia completo, você vai entender o que é um simulador de surf, como funciona, seus benefícios, 
            como escolher o melhor modelo e por que a Yow Surf, com seu sistema Meraki S5, representa o que existe de mais avançado no mundo.
          </p>
        </div>
      </div>
    </section>
  )
}
