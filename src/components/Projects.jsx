import { ProjectCard } from "./Card/ProjectCard";
import { projects } from "../../projects.json";

export const Projects = () => {
  return (
    <section>
      <div>
        <h2>Featured Projects</h2>
      </div>
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};
