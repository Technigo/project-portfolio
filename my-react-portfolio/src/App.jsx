import { Introduction } from './Components/Introduction/Introduction'
import { TechSection } from './Components/TechSection/TechSection'
import { ProjectsSection } from './Components//ProjectSection/ProjectsSection'
import { ArticlesSection } from './Components/ArticleSection/ArticlesSection'
import { SkillSection } from './Components/SkillSection/SkillSection'
import { ContactSection } from './Components/ContactSection/ContactSection'

import './App.css'

export const App = () => {
  return (
    <>
      <Introduction />
      <TechSection />
      <ProjectsSection />
      <ArticlesSection />
      <SkillSection />
      <ContactSection />
    </>
  )
}
