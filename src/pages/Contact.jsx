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
      nextErrors.name = 'Please enter your full name.'
    }

    if (!/^\+?[\d\s()-]{7,}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.'
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Please write at least 10 characters.'
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
            <p className="eyebrow">Contact Us</p>
            <h1>Book your detailing session</h1>
            <p>Call us directly or send a request and we will confirm your appointment quickly.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <h2>Send a booking request</h2>
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <label>
                Name
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  placeholder="John Doe"
                />
                {errors.name && <small>{errors.name}</small>}
              </label>

              <label>
                Phone
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                  placeholder="+381 60 123 4567"
                />
                {errors.phone && <small>{errors.phone}</small>}
              </label>

              <label>
                Message
                <textarea
                  rows="5"
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  placeholder="Tell us your vehicle model and service goal..."
                />
                {errors.message && <small>{errors.message}</small>}
              </label>

              <button className="btn btn-primary" type="submit">
                Submit Request
              </button>

              {submitted && <p className="form-success">Thank you. We will contact you soon to confirm your booking.</p>}
            </form>
          </Reveal>

          <Reveal delay={0.08} className="contact-info">
            <h3>Direct Booking</h3>
            <p>Phone: +381 60 123 4567</p>
            <p>Email: booking@blacklinedetail.com</p>
            <p>Location: New Belgrade, Serbia</p>
            <div className="map-placeholder">Map Placeholder</div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact
