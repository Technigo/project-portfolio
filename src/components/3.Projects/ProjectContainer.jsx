import "./ProjectContainer.css";
import { Projects } from "./Projects";

export const ProjectContainer = () => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <h2 className="projects-heading">Featured Projects</h2>
        <Projects />
      </div>
    </div>
  );
};
