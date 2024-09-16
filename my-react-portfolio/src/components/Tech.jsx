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
          <h2 id="title-tech">Tech</h2>
          <p id="tech-description">
            HTML, CSS, JAVASCRIPT ES6, React, Node.js, Mongo DB, Web
            Accesibility, APIs, Mob-programming
          </p>
          <h2 id="plus">+</h2>
          <h2 id="art-title">Art</h2>
          <p id="art-description">
            Visual identity & Concept Development, Design Lead & Art Direction,
            Digital Art & Illustrations
          </p>
      </div>
        <a onClick={scrollDown}>
          <Lottie
            animationData={animation}
            loop
            style={{ width: 80, height: 80 }}
          />
        </a>
    </section>
  )
}
