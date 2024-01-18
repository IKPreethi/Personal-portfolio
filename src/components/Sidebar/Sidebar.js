import './Sidebar.scss'
import { useState } from 'react'
import LogoP from '../../assets/images/logo-p.png'
import LogoSubtitle from '../../assets/images/logo-sub-p.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <a className="logo" href="#home">
        <img src={LogoP} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="preethi" />
        </a>
      {/* <Link 
        className="logo"
        to="/personal-portfolio"
        onClick={() => setShowNav(false)}>
        <img src={LogoP} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="preethi" />
      </Link> */}
      <nav className={showNav ? 'mobile-show' : ''}>
        <a 
          href="#home"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </a>
        <a 
          className="about-link"
          href="#about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </a>
        <a
          className="portfolio-link"
          href="#projects"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </a>
        <a
          className="contact-link"
          href="#contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </a>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/preethi-i-k/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
              size="2x"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/IKPreethi"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              size="2x"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar

