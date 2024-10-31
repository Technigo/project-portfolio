
import './App.css'
import { HeaderSection } from "./sections/HeaderSection"
import { ImageSection } from "./sections/ImageSection"
import { BioSection } from "./sections/BioSection"
import { ProjectSection } from "./sections/ProjectSection"
import { TechSection } from "./sections/TechSection"
import { SkillSection } from "./sections/SkillSection"
import { ArticleSection } from "./sections/ArticleSection"
import { ContactSection } from "./sections/ContactSection"

const App = () => {

  return (
    <main>
      <HeaderSection />
      <ImageSection />
      <BioSection />
      <ProjectSection />
      <TechSection />
      <SkillSection />
      <ArticleSection />
      <ContactSection />

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </main>
  )
}

export default App
