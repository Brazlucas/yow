import './MarqueeBanner.css'

const items = [
  'YOW SURF',
  'SIMULADOR DE SURF',
  'NO MORE FLAT DAYS',
  'MADE IN BASQUE COUNTRY',
  'YOUR OWN WAVE',
  'SURFE EM QUALQUER LUGAR',
]

export default function MarqueeBanner() {
  const repeated = [...items, ...items]

  return (
    <div className="marquee-banner">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-dot">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}
