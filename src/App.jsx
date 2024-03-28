import { useState } from 'react'
import './App.css'
import { Tech } from './components/Tech'
import { ProjectList } from './components/ProjectList'
import { TopSection } from './components/TopSection'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export const App=()=> {
  return (
    <div className='page'>
      <TopSection />
      <Tech />
      <ProjectList />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

