import { Link } from 'react-router-dom'
import { services } from '../data/siteData'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'

function Services() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our Packages</p>
            <h1>Professional services tailored to your vehicle</h1>
            <p>Choose from focused detailing or complete protection plans to match your goals.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} delay={index * 0.08} />
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-banner">
          <Reveal>
            <h2>Need a custom package?</h2>
            <p>We design detailing plans around your vehicle condition, usage, and desired finish.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link className="btn btn-primary" to="/contact">
              Request Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}

export default Services
