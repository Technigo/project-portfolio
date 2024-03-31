import { EachProject } from './EachProject'
import './css/projects.css'

export const Projects = () => {
  return (
    <section className="project-section" id="projects">
    <div className="projects">
      <h1>Projects</h1>
      <EachProject />
    </div>
    </section>
  )
}
