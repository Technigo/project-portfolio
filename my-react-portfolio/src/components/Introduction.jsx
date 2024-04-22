import portrait from '../assets/portrait-small.jpgq
'
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
          <h1 className><span>Izabel Lind Färnstrand</span><br></br>
          Creative<br /> Frontend Developer</h1>
        <div className="img-text">
          <img src={portrait} id="portrait" alt="portait of Izabel" />
          <p>
            I develop creative & userfriendly websites, with an eye for details.
          Based in Stockholm, Sweden
          Available worldwide</p>
        </div>
      
        <a onClick={scrollDown}>
          <Lottie
            id="arrow-down"
            animationData={animation}
            loop
            style={{ width: 80, height: 80 }}
          />
        </a>
        </div>
      </div>
  )
}
