// Write your code here
import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeThemeClassName = isDarkTheme ? 'home-dark' : 'home-light'
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      return (
        <>
          <Navbar />
          <div className={`home-bg-container ${homeThemeClassName}`}>
            <img src={homeImg} alt="home" className="home-img" />
            <h1
              className={isDarkTheme ? 'home-header-dark' : 'home-header-light'}
            >
              Home
            </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
