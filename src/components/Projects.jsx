import ProjectCard from "./ProjectCard";
import { projects } from "../projects.json";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.descr}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.subtitle}>Projects I&apos;ve been working on</p>
      </div>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
