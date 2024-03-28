import "./ProjectSection.css";
import { Project } from "./Project";
import { projects } from "../../projects.json";

export const Projects = () => {
  return (
    <div className="project-section">
      <h1 className="project-title">Featured Projects</h1>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};
