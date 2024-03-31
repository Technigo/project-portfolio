import "./ProjectContainer.css";
import { Projects } from "./Projects";

export const ProjectContainer = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">Featured Projects</h2>
      <Projects />
    </div>
  );
};
