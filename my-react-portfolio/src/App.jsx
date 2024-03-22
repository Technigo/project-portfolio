import { Introduction } from './Components/Introduction'
import { Arrow } from './Components/Arrow'
import { TechSection } from './Components/TechSection'
import { ProjectsSection } from './Components/ProjectsSection'
import { Line } from './Components/Line'
import { ArticlesSection } from './Components/ArticlesSection'
import { SkillSection } from './Components/SkillSection'
import { ContactSection } from './Components/ContactSection'

import './App.css'

export const App = () => {
  return (
    <>
      <Introduction />
      <Arrow />
      <TechSection />
      <ProjectsSection />
      <Line />
      <ArticlesSection />
      <SkillSection />
      <ContactSection />
    </>
  )
}
