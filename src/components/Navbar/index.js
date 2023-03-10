import { Link, NavLink } from 'react-router-dom'
import './index.sass'
import '../../App.sass'
import Logo from '../../assets/images/logo-colorful.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faCode } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faGithub, faInstagram, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Navbar = () => {
  
  const [menuClicked, setMenuClicked] = useState(false)
  const toggleMenuClick = () => {
      setMenuClicked(!menuClicked)
  }

  return (
  <div className={menuClicked ? "navbar navbar--active" : "navbar"} >
    <div className="navbar__logo" onClick={toggleMenuClick}>
      <img src={Logo} alt="logo" />
    </div>
    <nav>
      <NavLink exact="true" activeclassname="active" end className="home-link" to="/portfolio" onClick={toggleMenuClick}>
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/portfolio/about" onClick={toggleMenuClick}>
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio/my-work" onClick={toggleMenuClick}>
        <FontAwesomeIcon icon={faCode} />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/portfolio/contact" onClick={toggleMenuClick}>
        <FontAwesomeIcon icon={faEnvelope} />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jana-trots/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/joana-trots/">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://t.me/ave_jojo">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </li>
      {/* <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/joana-trots/">
          <FontAwesomeIcon icon={faBehance} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ave_jojo/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li> */}
    </ul>
  </div>
  )
}

export default Navbar