import portrait from '../assets/portrait.png'
import Lottie from 'lottie-react'
import animation from '../assets/Animation-arrow-black.json'
import './css/introduction.css'

export const Introduction = () => {
  const scrollDown = () => {
    const techSection = document.getElementById('tech')
    techSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="intro-container">
      <div className="intro">
        <div className="name">
          <h2>Izabel Lind Färnstrand</h2>
          <h1>
            <span>Creative</span>
          </h1>
          <h1>Frontend Developer</h1>
        </div>
        <div className="img-text">
          <img src={portrait} id="portrait" alt="portait of Izabel" />
          <p>
            I develop creative & userfriendly websites, with an eye for details.
          </p>
          <p>Based in Stockholm, Sweden</p>
          <p>Available worldwide</p>
        </div>
      </div>
      <div className="arrow-container">
        <a onClick={scrollDown}>
          <Lottie
            animationData={animation}
            loop
            style={{ width: 120, height: 120 }}
          />
        </a>
      </div>
    </div>
  )
}
