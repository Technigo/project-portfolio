import { TitleCard } from "./components/TitleCard"
import { TechSection } from "./components/TechSection"
import { Projects } from "./components/Projects"
import { Articles } from "./components/Articles"
import './App.css'
import data from "../projects.json"

function App() {
  const { projects } = data
  const renderProjects = projects.map(
    ({ name, description, image, tags, netlify, github }) => (
      <Projects
        key={name}
        name={name}
        description={description}
        image={image}
        tags={tags}
        netlify={netlify}
        github={github}
      />
    )
  )

  return (
    <div>
      <TitleCard />
      <TechSection />
      <div className="projects-section">
        <h1>Featured projects</h1>
        {renderProjects}
      </div>
      <div className="articles-section">
        <Articles />
      </div>
    </div>
  )
}

export default App
