import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

function NotFound() {
  return (
    <PageTransition>
      <section className="section not-found">
        <div className="container">
          <h1>Stranica nije pronađena</h1>
          <p>Stranica koju tražite ne postoji.</p>
          <Link className="btn btn-primary" to="/">
            Nazad na početnu
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

export default NotFound
