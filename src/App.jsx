//Entry point for rendering components. 

import React from 'react'
import './App.css'

import { Hello } from './Components/Hello'
import { Tech } from './Components/Tech'
import { FeaturedP } from './Components/FeaturedP/FeaturedP'
//import { Mywords } from './Components/Mywords'
import { Skills } from './Components/Skills'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'

const App = () => {
  //Renders components
  return (
    <div className="main-wrapper">
      <Hello />
      <Tech />
      <FeaturedP />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
