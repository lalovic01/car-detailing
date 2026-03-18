import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

function NotFound() {
  return (
    <PageTransition>
      <section className="section not-found">
        <div className="container">
          <h1>Page not found</h1>
          <p>The page you are looking for does not exist.</p>
          <Link className="btn btn-primary" to="/">
            Back to Home
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

export default NotFound
