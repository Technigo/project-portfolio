import { Introduction } from './Components/Introduction/Introduction'
import { TechSection } from './Components/TechSection/TechSection'
import { ProjectsSection } from './Components/ProjectsSection'
import { Line } from './Components/Line'
import { ArticlesSection } from './Components/ArticlesSection'
import { SkillSection } from './Components/SkillSection/SkillSection'
import { ContactSection } from './Components/ContactSection/ContactSection'

import './App.css'

export const App = () => {
  return (
    <>
      <Introduction />
      <TechSection />
      <ProjectsSection />
      <Line />
      <ArticlesSection />
      <SkillSection />
      <ContactSection />
    </>
  )
}
