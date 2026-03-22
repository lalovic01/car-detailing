import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'

function About() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Naša priča</p>
            <h1>Stvoreno za vlasnike koji primećuju svaki detalj</h1>
            <p>
              Blackline Detail je počeo kao mali studio fokusiran na korekciju i zaštitu premijum vozila za svakodnevnu vožnju.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <Reveal>
            <h2>Iskustvo i posvećenost zanatu</h2>
            <p>
              Sa dugogodišnjim praktičnim iskustvom u detailingu, spajamo moderne tehnike nege laka sa strogom kontrolom procesa.
              Svaki automobil pregledamo pod profesionalnim osvetljenjem pre, tokom i nakon usluge.
            </p>
            <p>
              Posvećeni smo doslednosti, jasnoj komunikaciji i premijum prezentaciji, od prvog kontakta do konačne primopredaje.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="about-stats">
            <div>
              <strong>1,200+</strong>
              <span>Detaljno obrađenih vozila</span>
            </div>
            <div>
              <strong>7+</strong>
              <span>Godina iskustva</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Prosečna ocena</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-banner">
          <Reveal>
            <h2>Poverite svoj automobil dokazanim profesionalcima</h2>
            <p>Od vikend sportskih automobila do poslovnih vozila za svaki dan, svakom pristupamo sa istom preciznošću.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link className="btn btn-primary" to="/contact">
              Zakaži termin
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}

export default About
