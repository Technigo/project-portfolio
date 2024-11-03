// FeaturedProjects.jsx

import { ProjectCard } from "./ProjectCard/ProjectCard";
import { projects } from "../../projects.json";
import "./FeaturedProjects.css";

export const FeaturedProjects = () => {
  return (
    <section className="featured-projects-container">
      <h2>Featured Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          < ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
            netlify={project.netlify}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
};