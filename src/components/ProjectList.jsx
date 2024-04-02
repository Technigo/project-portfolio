import { Project } from "./Project"
import "./ProjectList.css"
import "./TopSection.css"

export const ProjectList=()=> {
  return (
    <div className="projects">
      <p className="titleBlue">Featured Projects</p>
      <Project />
    </div>
  )
}
