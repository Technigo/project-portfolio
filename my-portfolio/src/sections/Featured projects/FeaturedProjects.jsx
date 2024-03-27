import { ProjectCard } from "./ProjectCard";
import "./FeaturedProjects.css";

export const FeaturedProjects = () => {
  return (
    <section className="projects-container">
      <h2 className="projects-heading">Featured Projects</h2>
      <ProjectCard />
    </section>
  );
};
