// Write your code here
import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutThemeClassName = isDarkTheme ? 'about-dark' : 'about-light'
      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <>
          <Navbar />
          <div className={`about-bg-container ${aboutThemeClassName}`}>
            <img src={aboutImg} alt="about" className="about-img" />
            <h1
              className={
                isDarkTheme ? 'about-header-dark' : 'about-header-light'
              }
            >
              About
            </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
