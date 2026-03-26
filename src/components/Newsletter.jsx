import { useState } from 'react'
import './Newsletter.css'

const bgImg = '/fotos-cliente/WhatsApp%20Image%202026-03-23%20at%2022.38.506.jpeg'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="newsletter">
      <div className="newsletter__bg">
        <img src={bgImg} alt="Surfista treinando com simulador de surf" />
        <div className="newsletter__bg-overlay" />
      </div>
      <div className="container newsletter__inner">
        <div className="newsletter__text">
          <h2 className="newsletter__title">
            FAÇA PARTE DA YOW E DIGA ADEUS AOS DIAS FLATS!
          </h2>
          <p className="newsletter__sub">
            Inscreva-se para atualizações, lançamentos de produtos e muito mais.
          </p>
        </div>

        {submitted ? (
          <div className="newsletter__success">
            ✓ Obrigado! Você está na lista. 🤙
          </div>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="newsletter__input"
            />
            <button type="submit" className="newsletter__btn">
              Inscrever
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
