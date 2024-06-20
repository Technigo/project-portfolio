import "./FeaturedProjects.css";
import { Card } from "./Card";
import { projects } from "/src/projects.json";

export const FeaturedProjects = () => {
  return (
    <section className="featured-projects">
      <div className="featured-projects-box">
        <h1>Featured Projects</h1>
        {projects.map((project) => {
          return (
            <Card
              key={project.id}
              title={project.name}
              image={project.image}
              description={project.description}
              tags={project.tags}
              netlifyUrl={project.netlify}
              githubUrl={project.github}
            />
          );
        })}
      </div>
    </section>
  );
};
