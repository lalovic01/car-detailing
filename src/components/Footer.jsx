import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Blackline Detail</h3>
          <p>Premijum auto detailing, poliranje i keramička zaštita za vlasnike koji očekuju savršenstvo.</p>
        </div>

        <div>
          <h4>Brzi linkovi</h4>
          <ul>
            <li>
              <Link to="/services">Usluge</Link>
            </li>
            <li>
              <Link to="/gallery">Galerija</Link>
            </li>
            <li>
              <Link to="/about">O nama</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Kontakt</h4>
          <p>+381 60 123 4567</p>
          <p>booking@blacklinedetail.com</p>
          <p>Jabuka, Srbija</p>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Blackline Detail. Sva prava zadržana.</p>
    </footer>
  )
}

export default Footer
