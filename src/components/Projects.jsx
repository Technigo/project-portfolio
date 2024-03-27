import ProjectCard from "./ProjectCard";
import { projects } from "../projects.json";

const Projects = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
