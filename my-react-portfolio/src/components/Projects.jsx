import { EachProject } from './EachProject'
import './css/projects.css'

export const Projects = () => {
  return (
    <section className="project-section" id="projects">
    <div className="projects">
      <h2>Projects</h2>
      <EachProject />
    </div>
    </section>
  )
}
