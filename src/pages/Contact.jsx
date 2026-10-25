import { useState } from 'react'
import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'
import useTitle from '../components/useTitle'

const EMAIL = 'bonjour@morela-studio.com'

export default function Contact() {
  useTitle('Contact')
  const [form, setForm] = useState({ nom: '', email: '', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Pas de back-end : on ouvre le client mail avec le message pré-rempli
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Projet — ${form.nom || 'Nouveau contact'}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.nom}\n${form.email}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Parlons d'un projet, d'une collaboration, d'un éditorial."
      />

      <div className="wrap section-pad" style={{ paddingTop: 'clamp(24px,4vw,40px)' }}>
        <div className="contact-layout">
          <Reveal className="contact-info">
            <div className="item">
              <span className="label">Email</span>
              <span className="val">{EMAIL}</span>
            </div>
            <div className="item">
              <span className="label">Atelier</span>
              <span className="val">Cotonou, Bénin</span>
            </div>
            <div className="item">
              <span className="label">Réseaux</span>
              <span className="val">Instagram — Pinterest</span>
            </div>
          </Reveal>

          <Reveal as="form" className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" name="nom" placeholder="Votre nom" value={form.nom} onChange={update} required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="vous@exemple.com" value={form.email} onChange={update} required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Décrivez votre projet ou votre idée de collaboration..."
                value={form.message}
                onChange={update}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Envoyer le message</button>
          </Reveal>
        </div>
      </div>
    </>
  )
}
