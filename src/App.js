import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar"
import Lift from "./components/Lift"
import Slider from './components/Slider'
import Form from './components/Form'

function App() {

  // STATE
  const [scrollPosition, setScrollPosition] = useState(0)
  const [burger, setBurger] = useState(false)

  // FUNCTION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position)
  }

  // USE EFFECT
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="App">

      <Navbar setBurger={setBurger} burger={burger} />

      <Lift sp={scrollPosition} burger={burger} />

      <div id="home" className="layer">
        <p className="home-hello">Hello,</p>
        <p className="home-name">I'm <span className="okky">Okky</span>,</p>
        <p className="home-career">Freelance Front End Developer</p>
      </div>


      <div id="portfolio" className="layer">
        <h2 className='portfolio-head'>MY PORTFOLIO</h2>
        <p className='portfolio-p'>A collection of projects i've built</p>
        <Slider />
      </div>

      <div id="about" className="layer">
        <h2 className="about-head">ABOUT</h2>
        <h5 className="about-subhead">Myself</h5>
        <p className="about-p">I am Okky Prasetia Nugraha, website developer from Indonesia. Currently focus on mastering react.js through build as many good project as possible.</p>
        <h5 className="about-subhead">My Interest</h5>
        <p className="about-p">Website is always fascinate me, seeing transformation website from only static for reading herbal medicine and now almost every modern website is attractive and have interactive experience. This is career i want to pursue.</p>
      </div>

      <div id="contact" className="layer">
        <h2 className="contact-head">CONTACT ME</h2>
        <div className="contact-content">
          <p className="contact-p">
            My inbox is always open, Just contact me. Wheter you only want to say hi or invite me in your project. In case you inviting me, let us create great project together!
          </p>
          <Form />
        </div>
      </div>

    </div>
  );
}

export default App;