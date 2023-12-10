import styles from "../styling/projects.module.css";
import { Project } from "../components/Project";
import cat from "/images/flyingcat.png";
export const Projects = () => {
  return (
    <div className={styles.projects_container}>
      <img
        src={cat}
        className={styles.flyingcat}
        alt="flyingcat image"
        aria-hidden="true"
      ></img>

      <h1 className={styles.title}>Featured Projects</h1>

      <Project />
    </div>
  );
};
