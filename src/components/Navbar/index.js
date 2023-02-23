// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {Value => {
      const {isDarkTheme, toggleTheme} = Value

      const onClickThemeButton = () => {
        toggleTheme()
      }

      const navbarDarkClassName = isDarkTheme
        ? 'navbar-bg-dark'
        : 'navbar-bg-light'

      const logoImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navItemClassName = isDarkTheme
        ? 'list-text-dark-theme'
        : 'list-text-light-theme'

      const themeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <div className={`navbar ${navbarDarkClassName}`}>
          <div className="navbar-content">
            <Link to="/">
              <img
                src={logoImage}
                alt="website logo"
                className="website-logo"
              />
            </Link>

            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className={`nav-link ${navItemClassName}`}>
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/about" className={`nav-link ${navItemClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              data-testid="theme"
              className="theme-button"
              type="button"
              onClick={onClickThemeButton}
            >
              <img src={themeImageURL} alt="theme" className="theme-image" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
