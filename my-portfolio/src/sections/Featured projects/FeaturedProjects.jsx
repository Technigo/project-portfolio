import { ProjectCard } from "./ProjectCard";
import "./FeaturedProjects.css";

export const FeaturedProjects = ({ projects }) => {
  return (
    <section className="projects-container">
      <h2 className="projects-heading">Featured Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};
