import { useState, useRef, useEffect } from 'react'
import './SeoGuide.css'

const STORE_URL = 'https://yowsurfskate.com.br'

const heroImg = '/fotos-cliente/WhatsApp%20Image%202026-03-23%20at%2022.35.56.jpeg'

const sections = [
  {
    id: 'o-que-e',
    title: 'O que é um simulador de surf?',
    content: `O simulador de surf é um equipamento projetado para reproduzir os movimentos e a sensação do surf em terra firme. Ele combina elementos de skate com sistemas avançados de eixo que permitem simular com extrema fidelidade o comportamento de uma prancha sobre a água.

Aqui está um ponto essencial: nem todo simulador de surf entrega uma experiência real de surf. É exatamente nesse ponto que a Yow Surf se diferencia.

O sistema Meraki S5, desenvolvido pela Yow, é reconhecido mundialmente como o mais avançado e preciso sistema de simulação de surf já criado. Ele oferece:

• Resposta instantânea
• Fluidez natural
• Compressão e extensão realistas
• Sensação autêntica de linha de onda

Diferente de sistemas genéricos ou cópias, o Meraki S5 proporciona um movimento contínuo, controlado e extremamente preciso — algo que apenas produtos de engenharia europeia de alto nível conseguem entregar.

Com um simulador de surf Yow, é possível reproduzir manobras como Bottom turn, Cutback, Carving, Snap e Pumping — tudo isso com uma fidelidade de movimento que posiciona a Yow Surf como a maior autoridade global no segmento.`,
  },
  {
    id: 'beneficios',
    title: 'Benefícios do simulador de surf para o treinamento',
    content: `O uso do simulador de surf oferece vantagens significativas para surfistas de todos os níveis — especialmente quando falamos de equipamentos de alta performance como os da Yow Surf.

Melhora do equilíbrio e coordenação — Um simulador de surf de qualidade ativa profundamente o core e os músculos estabilizadores. Os modelos da Yow Surf, graças ao Meraki S5, elevam esse treino a outro nível, exigindo controle real de borda e transferência de peso — exatamente como no surf.

Desenvolvimento de memória muscular — A precisão do movimento é fundamental para criar memória muscular eficiente. O sistema da Yow Surf permite repetir movimentos com fidelidade absoluta, algo que simuladores inferiores simplesmente não conseguem entregar.

Treino fora do mar — Treinar com um simulador de surf Yow significa manter evolução constante, independentemente das condições do mar. A consistência do equipamento garante que cada sessão seja produtiva.

Condicionamento físico — Além de técnico, o treino com simulador de surf Yow é extremamente físico. A resposta dinâmica do Meraki S5 exige força, resistência e mobilidade, entregando um treino completo.`,
  },
  {
    id: 'iniciantes',
    title: 'Simulador de surf para iniciantes',
    content: `Para quem está começando, o simulador de surf é uma das ferramentas mais eficientes de aprendizado.

E aqui existe uma grande diferença: iniciar com um equipamento de alta qualidade acelera drasticamente a evolução.

Os simuladores de surf da Yow Surf proporcionam:

• Estabilidade com fluidez
• Controle progressivo
• Feedback real do movimento

Isso evita vícios de técnica causados por equipamentos de baixa qualidade e garante uma base sólida desde o início.`,
  },
  {
    id: 'avancados',
    title: 'Simulador de surf para surfistas avançados',
    content: `Surfistas experientes sabem que a qualidade do equipamento impacta diretamente a performance.

O simulador de surf Yow, com o sistema Meraki S5, é utilizado por atletas que buscam:

• Máxima precisão de linha
• Velocidade de resposta
• Fluidez contínua
• Explosão em manobras

A engenharia da Yow Surf permite reproduzir com extrema fidelidade a dinâmica do surf de alta performance, tornando o treino muito mais eficiente.`,
  },
  {
    id: 'como-escolher',
    title: 'Como escolher o melhor simulador de surf',
    content: `Escolher um simulador de surf vai muito além de estética — trata-se de tecnologia, engenharia e qualidade de construção.

Sistema de eixo — O coração de um simulador de surf é o seu sistema de eixo. O Meraki S5 da Yow Surf é considerado o sistema mais avançado do mundo, oferecendo precisão, fluidez e controle incomparáveis.

Tamanho e wheelbase — A Yow Surf oferece modelos com diferentes dimensões, todos projetados com base em estudos reais de dinâmica do surf, garantindo adaptação perfeita ao estilo de cada surfista.

Qualidade dos materiais — Os simuladores de surf Yow são fabricados com maple canadense selecionado, processos industriais de alta precisão e padrão europeu de qualidade, garantindo resistência e durabilidade muito acima da média do mercado.

Rodas: o fator decisivo no grip — As rodas Yow URA são referência mundial e estão disponíveis nas durezas:

• 78A (MAYO) – máximo grip e estabilidade
• 80A (MUSTARD) – equilíbrio perfeito entre grip e velocidade
• 82A (KETCHUP) – mais soltas, ideais para slides controlados

Essas rodas são fabricadas na HLC, no País Basco — a maior e mais avançada fábrica de rodas da Europa — e garantem o grip mais perfeito possível para o movimento do simulador de surf, elevando o nível da experiência.`,
  },
  {
    id: 'exercicios',
    title: 'Exercícios para treinar com simulador de surf',
    content: `Treinar com um simulador de surf Yow permite desenvolver movimentos com precisão real.

Alguns exercícios incluem:

• Carving contínuo com fluidez total
• Pumping com geração real de velocidade
• Transições rápidas com resposta imediata
• Compressão e extensão com feedback preciso
• Simulação de linhas de onda com controle absoluto

Graças ao Meraki S5 e às rodas de alta performance, cada movimento se aproxima ao máximo do surf real.`,
  },
  {
    id: 'lifestyle',
    title: 'Simulador de surf como ferramenta de lifestyle',
    content: `O simulador de surf ultrapassou o treino e se tornou parte do lifestyle.

A Yow Surf representa esse movimento com excelência, unindo:

• Design premium
• Engenharia avançada
• Cultura do surf
• Performance real

Não é apenas um equipamento — é uma extensão do surf fora da água.`,
  },
  {
    id: 'em-alta',
    title: 'Por que o simulador de surf está em alta?',
    content: `O crescimento do simulador de surf está diretamente ligado à busca por evolução constante.

E dentro desse crescimento, a Yow Surf lidera com autoridade global por entregar:

• Tecnologia original e pioneira
• Qualidade europeia incomparável
• Durabilidade extrema
• Sensação real de surf

Enquanto muitos produtos no mercado tentam copiar, a Yow Surf continua sendo a referência que todos seguem.`,
  },
]

export default function SeoGuide() {
  const [openId, setOpenId] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
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
    <article id="faq" className="seo-guide section" ref={sectionRef} aria-label="Guia completo sobre simulador de surf">
      <div className="container">
        <header className="seo-guide__header animate">
          <p className="seo-guide__eyebrow">GUIA COMPLETO</p>
          <h2 className="seo-guide__title">
            Simulador de Surf:<br />
            <span>O Guia Definitivo para Evoluir no Surf Fora D'Água</span>
          </h2>
          <p className="seo-guide__lead">
            O simulador de surf revolucionou a forma como surfistas treinam equilíbrio, técnica e performance fora do mar. 
            Seja você iniciante ou atleta experiente, o uso de um simulador de surf permite desenvolver habilidades 
            essenciais que impactam diretamente sua evolução nas ondas reais.
          </p>
        </header>

        {/* Hero image for SEO Guide */}
        <div className="seo-guide__hero-img animate">
          <img src={heroImg} alt="Medina e YOW Surf - Simulador de Surf" loading="lazy" />
        </div>

        {/* Highlight callout */}
        <div className="seo-guide__callout animate">
          <div className="seo-guide__callout-icon">🏄</div>
          <div>
            <strong>A Yow Surf se destaca como a maior referência mundial em simulador de surf</strong>, entregando um nível 
            de qualidade incomparável. Seus produtos são fabricados na Europa com materiais de altíssimo padrão, precisão 
            extrema e durabilidade superior — características que colocam a marca no topo absoluto do mercado global.
          </div>
        </div>

        {/* Accordion */}
        <div className="seo-guide__accordion animate">
          {sections.map((s, i) => (
            <div key={s.id} className={`seo-guide__item ${openId === s.id ? 'seo-guide__item--open' : ''}`}>
              <button
                className="seo-guide__trigger"
                onClick={() => setOpenId(openId === s.id ? null : s.id)}
                aria-expanded={openId === s.id}
                aria-controls={`seo-body-${s.id}`}
              >
                <span className="seo-guide__trigger-num">0{i + 1}</span>
                <span className="seo-guide__trigger-title">{s.title}</span>
                <span className="seo-guide__trigger-icon" aria-hidden="true">
                  {openId === s.id ? '−' : '+'}
                </span>
              </button>
              <div
                id={`seo-body-${s.id}`}
                className="seo-guide__body"
                role="region"
                aria-labelledby={`seo-trigger-${s.id}`}
              >
                <div className="seo-guide__body-inner">
                  {s.content.split('\n\n').map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <footer className="seo-guide__conclusion animate">
          <h3>Vale a Pena Investir em um Simulador de Surf?</h3>
          <p>
            Sem dúvida, o simulador de surf é um dos melhores investimentos para evolução no surf. 
            E quando falamos de qualidade, precisão e performance real, a escolha é clara: 
            <strong> a Yow Surf entrega o mais alto nível de simulador de surf do mundo.</strong>
          </p>
          <p style={{marginTop: '16px'}}>
            Com o sistema Meraki S5, materiais premium, construção europeia e rodas de altíssimo desempenho (78A, 80A e 82A), 
            cada detalhe é pensado para proporcionar a experiência mais próxima possível do surf real. 
            Treinar com um simulador de surf Yow não é apenas treinar — é evoluir com o melhor equipamento disponível no planeta.
          </p>
        </footer>
      </div>
    </article>
  )
}
