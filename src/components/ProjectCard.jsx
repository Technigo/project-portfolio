import Asset from "./Asset";
import styles from "./ProjectCard.module.css";
import PropTypes from "prop-types";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Asset name={project.image} format="png" folder="projects" />
      </div>
      <h3>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
      <p>{project.tags.join(" ")}</p>
      <div className={styles.reference}>
        <span className={styles.refItem}>
          <IoIosLink />
          <a href={project.netlify} rel="noopener noreferrer" target="_blank">
            Live Preview
          </a>
        </span>
        <span className={styles.refItem}>
          <FaGithub />
          <a href={project.github} rel="noopener noreferrer" target="_blank">
            View Code
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};
