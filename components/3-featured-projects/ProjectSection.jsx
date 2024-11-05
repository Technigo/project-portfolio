import './ProjectSection.css'
import data from './projects.json'
import { ProjectCard } from './ProjectCard'

export const ProjectSection = () => {
  return (
    <div className="project-section">
      <h2 className="section-title">Featured projects</h2>
      <div className="project-container"> 
        {data.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
