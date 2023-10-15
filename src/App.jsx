// import { useState } from 'react'

import { Introduction } from "./Sections/Introduction";
import { Tech } from "./Sections/Tech";
import { Projects } from "./Sections/Projects";
import { MyWords } from "./Sections/MyWords";
import "./App.css";


const App = () => {
  
  return (
    <div className="main-wrapper">
      <div className="intro">
        <Introduction />
      </div>
      <div className="tech">
        <Tech />
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="my-words">
        <MyWords />
      </div>
    </div>
  )
}

export default App


