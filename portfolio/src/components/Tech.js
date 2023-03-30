import React from 'react'
import '../styles/tech.css'

const Tech = () => {
    return (
        <section className="tech">
        <div className="tech-wrapper">
          <h2 className="h2-tech" id="tech-header">Tech</h2>
          <p>
            HTML, CSS, Flexbox, <mark className="red-mark">JavaScript,</mark> ES6, JSX, <mark
              className="green-mark">React,</mark> React Hooks, Redux,
            Node.js, Mongo DB, Web accessibly, API:s, <mark className="purple-mark">mob-programming,</mark> pair-programming, Github.
          </p>
        </div>
      </section>
    )
}

export default Tech