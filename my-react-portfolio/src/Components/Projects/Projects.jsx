import { ProjectCard } from "./ProjectCard"
import projectData from "../../projectData.json"

let projectsArray = projectData.projects;
console.log(projectsArray);

export const  Projects = () => {
  return (
    <>
       <div>
      <h2>Projects</h2>
      {projectsArray.map((project, index) => (
        <ProjectCard key={index} projects={project} />
      ))}
    </div>
      </>
  )
}

