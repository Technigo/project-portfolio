// import { useState } from 'react'

import { Introduction } from "./Sections/Introduction";
import { Projects } from "./Sections/Projects";
import "./App.css";


const App = () => {

  return (
    <div className="main-wrapper">
      <div className="intro">
        <Introduction />
      </div>
      <div className="tech">
        <h1>Tech</h1>
        <p>HTML, CSS, JavaScript, ES6, JSX, React, Node.js, Mongo DB, Web Accessibility, API:s, GitHub, mob-programming, pair-programming, code review</p>
      </div>
      <div className="projects">
        <Projects />
      </div>
    </div>
  )
}

export default App


