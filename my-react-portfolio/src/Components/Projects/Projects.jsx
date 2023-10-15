import { ProjectCard } from "./ProjectCard"
import projectData from "../../projectData.json"
import { CardHeading } from "../../ReusableComponents/CardHeading.jsx"
import "./Projects.css"

let projectsArray = projectData.projects;
console.log(projectsArray);

export const  Projects = () => {
  return (
    <>
       <div className="project-wrapper">
       <CardHeading className="blue-heading" text="Frontend Developer" />
      {projectsArray.map((project, index) => (
        <ProjectCard key={index} projects={project} />
      ))}
    </div>
      </>
  )
}

