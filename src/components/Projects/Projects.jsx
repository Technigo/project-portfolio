import { ProjectCard } from "./Card/ProjectCard";
import { projects } from "./projects.json";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <h2>Projects</h2>
      <div className={styles.projects}>
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
    </section>
  );
};
