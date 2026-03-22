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
            <p className="eyebrow">Naši paketi</p>
            <h1>Profesionalne usluge prilagođene vašem vozilu</h1>
            <p>Izaberite ciljanu uslugu detailinga ili kompletan plan zaštite prema vašim potrebama.</p>
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
            <h2>Potreban vam je paket po meri?</h2>
            <p>Kreiramo detailing plan prema stanju vozila, načinu upotrebe i željenom završnom efektu.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link className="btn btn-primary" to="/contact">
              Zatraži konsultaciju
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}

export default Services
