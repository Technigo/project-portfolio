import { ProjectButton } from "../../ui/ProjectButton/ProjectButton"
import "./ProjectCard.css"

export const ProjectCard = () => {
  return (
    <div className="button-container">
      <ProjectButton label="Live demo" background="primary"></ProjectButton>
      <ProjectButton label="View Code" background="neutral"></ProjectButton>
    </div>
  )
}