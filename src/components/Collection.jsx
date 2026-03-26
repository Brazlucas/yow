import { useRef, useEffect } from 'react'
import './Collection.css'

const STORE_URL = 'https://yowsurfskate.com.br'
const img = (file, folder = 'REVISADAS IANARA') =>
  folder
    ? `/YOW SURF 2026/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`
    : `/YOW SURF 2026/${encodeURIComponent(file)}`

const products = [
  {
    name: 'Snapper 26a',
    size: '32.5"',
    price: 'R$ 3.090',
    tag: 'Novo 2026',
    image: img('Snapper_26a_complete_top_and_bottom.png'),
    link: `${STORE_URL}/collections/todas`,
  },
  {
    name: 'Medina Panthera',
    size: '32"',
    price: 'R$ 3.490',
    tag: 'G. Medina',
    image: img('Medina Panthera_26a_complete_top_and_bottom.png'),
    link: `${STORE_URL}/collections/todas`,
  },
  {
    name: 'Pyzel Red Tiger',
    size: '26a',
    price: 'R$ 3.290',
    tag: 'Collab',
    image: img('Pyzel Red Tiger_26a_complete_top_and_bottom.png'),
    link: `${STORE_URL}/collections/todas`,
  },
  {
    name: 'Fanning Falcon',
    size: '2025 FW',
    price: 'R$ 3.190',
    tag: 'Mick Fanning',
    image: img('Fanning Falcon Performer_2025_FW_complete_top_and_bottom.png'),
    link: `${STORE_URL}/collections/todas`,
  },
  {
    name: 'Christenson Skalle',
    size: '26a',
    price: 'R$ 3.390',
    tag: 'Novo 2026',
    image: img('Christenson Skalle_26a_complete_top_and_bottom.png'),
    link: `${STORE_URL}/collections/todas`,
  },
  {
    name: 'Sophia Medina Roses',
    size: 'HP 33"',
    price: 'R$ 3.490',
    tag: 'S. Medina',
    image: img('Sophia Medina Roses hp 33_top_and_bottom_complete.png'),
    link: `${STORE_URL}/collections/todas`,
  },
  {
    name: 'Mundaka',
    size: '26a',
    price: 'R$ 2.890',
    tag: 'Clássico',
    image: img('Mundaka_26a_complete_top_and_bottom.png'),
    link: `${STORE_URL}/collections/todas`,
  },
  {
    name: 'Outer Banks',
    size: '26a',
    price: 'R$ 2.990',
    tag: 'Novo 2026',
    image: img('Outer Banks_26a_complete_top_and_bottom.png'),
    link: `${STORE_URL}/collections/todas`,
  },
]

export default function Collection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.product-card').forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.07}s`
              el.classList.add('product-card--visible')
            })
            entry.target.querySelectorAll('.animate').forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.1}s`
              el.classList.add('animated')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="collection section" ref={sectionRef}>
      <div className="container">
        <div className="collection__header animate">
          <h2 className="collection__title">COLEÇÃO 2026</h2>
          <a
            href={`${STORE_URL}/collections/todas`}
            target="_blank" rel="noreferrer"
            className="collection__view-all"
          >
            Ver Todos →
          </a>
        </div>

        <div className="collection__grid">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.link}
              target="_blank" rel="noreferrer"
              className="product-card"
            >
              <div className="product-card__img-wrap">
                <img
                  src={product.image}
                  alt={`${product.name} ${product.size}`}
                  loading="lazy"
                />
                <div className="product-card__tag">{product.tag}</div>
                <div className="product-card__hover-cta">
                  <span>Ver Produto</span>
                </div>
              </div>
              <div className="product-card__info">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__size">{product.size}</p>
                <p className="product-card__price">{product.price}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="collection__cta animate">
          <a
            href={`${STORE_URL}/collections/todas`}
            target="_blank" rel="noreferrer"
            className="btn btn--primary"
          >
            Ver Coleção Completa
          </a>
        </div>
      </div>
    </section>
  )
}
