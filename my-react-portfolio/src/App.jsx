import { Introduction } from './Components/Introduction/Introduction'
import { TechSection } from './Components/TechSection/TechSection'
import { ProjectsSection } from './Components//ProjectSection/ProjectsSection'
import { ArticlesSection } from './Components/ArticleSection/ArticlesSection'
import { SkillSection } from './Components/SkillSection/SkillSection'
import { ContactSection } from './Components/ContactSection/ContactSection'

import './App.css'
import Line from './path-line.svg'

export const App = () => {
  return (
    <>
      <Introduction />
      <TechSection />
      <ProjectsSection />
      <div className="lineContainer">
        <img src={Line} className="wavyLine" alt="decorative line" />
      </div>
      <ArticlesSection />
      <SkillSection />
      <ContactSection />
    </>
  )
}
