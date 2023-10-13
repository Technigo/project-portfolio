import React, {useState, useEffect} from 'react'
import './App.css'

import { SecPresentation } from './components/sections/SecPresentation.jsx'
import { SecTech } from './components/sections/SecTech.jsx'
import { SecFeaturedProjects } from './components/sections/SecFeaturedProjects.jsx'
import { SecMywords } from './components/sections/SecMywords.jsx'
import { SecSkills } from './components/sections/SecSkills.jsx'
import { SecContact } from './components/sections/SecContact.jsx'

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
