import { ProjectCard } from "./Card/ProjectCard";
import { projects } from "./projects.json";
import { ScrollDown } from "../ScrollButtons/ScrollButtons";

export const Projects = () => {
  return (
    <section id="projects">
      <div>
        <h2>Featured Projects</h2>
      </div>
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            image={project.image}
            name={project.name}
            description={project.description}
            tags={project.tags}
            liveDemoLink={project.netlify}
            viewTheCodeLink={project.github}
          />
        ))}
      </div>
      <ScrollDown scrollTo="skills" />
    </section>
  );
};
