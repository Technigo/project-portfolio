import { useState } from 'react'
import { Tech } from './sections/tech/Tech'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Introduction } from './sections/introduction/Introduction'
import { Projects } from './sections/projects/Projects'
import { MyWords } from './sections/myWords/MyWords'
import { Skills } from './sections/skills/Skills'
import projects from "./projects.json";
import { Footer } from './sections/footer/Footer'

export const App = () => {
  const data = projects
  return (
    <>
      <Introduction />
      <Tech />
      <Projects projectlist={data.projects} />
      <MyWords />
      <Skills />
      <Footer />

    </>
  )
}
