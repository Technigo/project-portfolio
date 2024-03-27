import Asset from "./Asset";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Asset name={project.image} format="png" folder="projects" />
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>{project.tags.join(" ")}</p>
      <span>
        <a href={project.netlify}>Live Preview</a>
      </span>
      <span>
        <a href={project.github}>View Code</a>
      </span>
    </div>
  );
};

export default ProjectCard;
