
import './App.css'
import { HeaderSection } from "./sections/HeaderSection"
import { ImageSection } from "./sections/ImageSection"
import { BioSection } from "./sections/BioSection"
import { ProjectSection } from "./sections/ProjectSection"
// import { TechSection } from "./sections/TechSection"
// import { SkillSection } from "./sections/SkillSection"
// import { ArticleSection } from "./sections/ArticleSection"
import { ContactSection } from "./sections/ContactSection"

const App = () => {

  return (
    <main>
      <HeaderSection />
      <ImageSection />
      <BioSection />
      <ProjectSection />
      {/* 
      <TechSection />
      <SkillSection />
      <ArticleSection />
      <ContactSection /> */}
      <h1>Hello</h1>
      <ContactSection />
    </main>
  )
}

export default App
