// App.jsx

import { useState } from 'react'
import './App.css'
import { TopSection } from '../components/1-top-section/TopSection.jsx'
import { SkillsSection } from '../components/2-skills-section/SkillsSection.jsx'
import { ProjectSection } from '../components/3-featured-projects/ProjectSection.jsx'
import { TechSection } from '../components/4-tech-section/TechSection.jsx'
import { BlogSection } from '../components/5-blog-section/BlogSection.jsx'
import { FooterSection } from '../components/6-footer-section/FooterSection.jsx'


function App() {

  return (
    <>
      <main>
        <TopSection />
        <SkillsSection />
        <ProjectSection />
        <TechSection />
        <BlogSection />
        <FooterSection />
      </main>
    </>
  )
}

export default App
