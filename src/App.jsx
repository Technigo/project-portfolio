//Entry point for rendering components. 

import React from 'react'
import './App.css'

import { Hello } from './Components/Hello'
import { Tech2 } from './Components/Tech2'
import { FeaturedP3 } from './Components/FeaturedP3/FeaturedP3'
import { Mywords } from './Components/Mywords'
import { Skills4 } from './Components/Skills4'
import { Contact5 } from './Components/Contact5'
import { Footer6 } from './Components/Footer6'

const App = () => {
  //Renders components
  return (
    <div className="main-wrapper">
      <Hello />
      <Tech2 />
      <FeaturedP3 />
      <Mywords />
      <Skills4 />
      <Contact5 />
      <Footer6 />
    </div>
  )
}

export default App;

