import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <nav className="nav-bar">
      <div className="nav-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
          alt="wave"
          className="logo"
        />
        <p className="name">Wave</p>
      </div>
      <div>
        <ul className="nav-list">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Header
