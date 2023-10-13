import "./projects.css";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="page-container">
        <h2 className="page-title">Featured Projects</h2>
        <ProjectCard />
      </div>
    </section>
  );
};
