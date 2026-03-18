import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'

function About() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h1>Built for owners who notice every detail</h1>
            <p>
              Blackline Detail started as a one-bay studio focused on correction and protection for premium daily-driven vehicles.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <Reveal>
            <h2>Experience and craftsmanship</h2>
            <p>
              With years of hands-on detailing, we combine modern paint-care techniques with strict process control. Every car is
              inspected under professional lighting before, during, and after the service.
            </p>
            <p>
              We are obsessed with consistency, clear communication, and premium presentation, from first contact to final handover.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="about-stats">
            <div>
              <strong>1,200+</strong>
              <span>Vehicles Detailed</span>
            </div>
            <div>
              <strong>7+</strong>
              <span>Years Experience</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Average Rating</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-banner">
          <Reveal>
            <h2>Trust your car to proven professionals</h2>
            <p>From weekend sports cars to executive daily drivers, we treat every vehicle with the same precision.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link className="btn btn-primary" to="/contact">
              Schedule Appointment
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}

export default About
