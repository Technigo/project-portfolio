import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="project-section">
      <div className="project-container">
        <div className="project-heading">
          <h1>Featured Projects</h1>
        </div>
        <div className="project-cards">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};
