import PropTypes from "prop-types";
import { Images } from "../../Images/Images";
import { ProjectTags } from "../ProjectTags/ProjectTags";
import styles from "./ProjectContent.module.css";

export const ProjectContent = ({
  image,
  name,
  description,
  liveDemoLink,
  viewTheCodeLink,
  tags,
}) => {
  return (
    <div className={styles.project}>
      <Images image={image} alt={name} />
      <h3 className={styles.projectTitle}>{name}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.projectTagsAndButtons}>
        <span className={styles.projectTagContainer}>
          <ProjectTags tags={tags} />
        </span>
        <div className={styles.projectButtons}>
          <a
            href={liveDemoLink}
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href={viewTheCodeLink}
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View The Code
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectContent.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveDemoLink: PropTypes.string.isRequired,
  viewTheCodeLink: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
