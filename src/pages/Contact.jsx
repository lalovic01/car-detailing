import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'

const initialForm = {
  name: '',
  phone: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Unesite ime i prezime.'
    }

    if (!/^\+?[\d\s()-]{7,}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Unesite ispravan broj telefona.'
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Unesite najmanje 10 karaktera.'
    }

    return nextErrors
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setForm(initialForm)
    }
  }

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Kontaktirajte nas</p>
            <h1>Zakažite svoj detailing termin</h1>
            <p>Pozovite nas direktno ili pošaljite upit, a mi ćemo brzo potvrditi vaš termin.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <h2>Pošaljite zahtev za zakazivanje</h2>
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <label>
                Ime i prezime
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  placeholder="Petar Petrović"
                />
                {errors.name && <small>{errors.name}</small>}
              </label>

              <label>
                Telefon
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                  placeholder="+381 60 123 4567"
                />
                {errors.phone && <small>{errors.phone}</small>}
              </label>

              <label>
                Poruka
                <textarea
                  rows="5"
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  placeholder="Napišite model vozila i koju uslugu želite..."
                />
                {errors.message && <small>{errors.message}</small>}
              </label>

              <button className="btn btn-primary" type="submit">
                Pošalji zahtev
              </button>

              {submitted && <p className="form-success">Hvala. Kontaktiraćemo vas uskoro radi potvrde termina.</p>}
            </form>
          </Reveal>

          <Reveal delay={0.08} className="contact-info">
            <h3>Direktno zakazivanje</h3>
            <p>Telefon: +381 60 123 4567</p>
            <p>Email: booking@blacklinedetail.com</p>
            <p>Lokacija: Jabuka, Srbija</p>
            <div className="map-placeholder">Mapa lokacije</div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact
