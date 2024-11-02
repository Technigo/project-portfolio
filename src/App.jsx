import './App.css'
import { BioSection } from "./sections/BioSection/BioSection"
import { SkillsSection } from "./sections/SkillsSection/SkillsSection"
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection"
import { TechSection } from './sections/TechSection/TechSection'
import { JourneySection } from './sections/JourneySection/JourneySection'

function App() {

  return (
    <>
      <BioSection />
      <SkillsSection />
      <ProjectsSection />
      <TechSection />
      <JourneySection />
    </>
  )
}

export default App
