import React, {useState, useEffect} from 'react'
import './App.css'

import { SecPresentation } from './components/sections/SecPresentation'
import { SecTech } from './components/sections/SecTech'
import { SecFeaturedProjects } from './components/sections/SecFeaturedProjects'
import { SecMywords } from './components/sections/SecMywords'
import { SecSkills } from './components/sections/SecSkills'
import { SecContact } from './components/sections/SecContact'

function App() {
  

  return (
    <>
      <div>
        <SecPresentation/>
        <SecTech/>
        <SecFeaturedProjects/>
        <SecMywords/>
        <SecSkills/>
        <SecContact/>
      </div>
        
    </>
  )
}

export default App
