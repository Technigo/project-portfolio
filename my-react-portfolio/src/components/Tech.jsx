import './css/tech.css'
import Lottie from 'lottie-react'
import animation from '../assets/Animation-arrow-black pink.json'

export const Tech = () => {
  const scrollDown = () => {
    const projectSection = document.getElementById('projects')
    projectSection.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className="tech-section" id="tech">
      <div className="tech">
        <div id="title-tech">
          <h1>Tech</h1>
        </div>
        <div id="tech-description">
          <p>
            HTML, CSS, JAVASCRIPT ES6, React, Node.js, Mongo DB, Web
            Accesibility, APIs, Mob-programming
          </p>
        </div>
        <div id="plus">
          <h1>+</h1>
        </div>
        <div id="art-title">
          <h1>Art</h1>
        </div>
        <div id="art-description">
          <p>
            Visual identity & Concept Development, Design Lead & Art Direction,
            Digital Art & Illustrations
          </p>
        </div>
      </div>
      <div className="second-arrow-container">
        <a onClick={scrollDown}>
          <Lottie
            animationData={animation}
            loop
            style={{ width: 130, height: 130 }}
          />
        </a>
      </div>
    </section>
  )
}
