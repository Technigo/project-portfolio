import "../components/styleComponents/projects.css";
import { Project } from "./reuseCompoents/Project";
export const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="featured-header">Featured Projects</h1>
      <Project />
    </div>
  );
};
