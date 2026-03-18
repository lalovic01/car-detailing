import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Blackline Detail</h3>
          <p>Premium auto detailing, polishing, and ceramic protection for owners who expect perfection.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>+381 60 123 4567</p>
          <p>booking@blacklinedetail.com</p>
          <p>Belgrade, Serbia</p>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Blackline Detail. All rights reserved.</p>
    </footer>
  )
}

export default Footer
