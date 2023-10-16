import "./Projects.css";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="page-wrapper">
        <h2 className="page-title">Featured Projects</h2>
        <ProjectCard />
      </div>
    </section>
  );
};
