import { Link } from 'react-router-dom'
import { Car, ShieldCheck, Sparkles } from 'lucide-react'
import { highlights, services, testimonials } from '../data/siteData'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'

function Home() {
  return (
    <PageTransition>
      <section className="hero-section">
        <div className="container hero-grid">
          <Reveal>
            <p className="eyebrow">Luksuzni auto detailing</p>
            <h1>Vratite svoj automobil u salonsko stanje</h1>
            <p className="hero-text">
              Precizan detailing, korekcija laka i keramička zaštita za vlasnike koji očekuju vrhunski rezultat.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Zakaži odmah
              </Link>
              <Link className="btn btn-outline" to="/services">
                Pogledaj usluge
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="hero-media">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80"
              alt="Luksuzni automobil pod detailing osvetljenjem"
              loading="eager"
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container intro-panel">
          <Reveal>
            <h2>Detailing koji prevazilazi obično pranje</h2>
            <p>
              Svaki paket je osmišljen da pojača sjaj, sačuva vrednost vozila i pruži premijum iskustvo vlasništva.
            </p>
          </Reveal>

          <div className="highlight-grid">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="highlight-card">
                {index === 0 && <ShieldCheck size={22} />}
                {index === 1 && <Sparkles size={22} />}
                {index === 2 && <Car size={22} />}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <Reveal>
            <h2>Pregled usluga</h2>
          </Reveal>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <h2>Utisci klijenata</h2>
          </Reveal>
          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <TestimonialCard key={item.name} item={item} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-inner">
          <Reveal>
            <h2>Vaš sledeći detailing je na jedan klik</h2>
            <p>Rezervišite termin i prepustite nam vraćanje dubine boje, sjaja i zaštite.</p>
            <Link className="btn btn-primary" to="/contact">
              Rezerviši termin
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home
