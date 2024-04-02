import PropTypes from "prop-types";
import { ProjectContent } from "../ProjectContent/ProjectContent";
import styles from "./ProjectCard.module.css";


export const ProjectCard = ({
  image,
  name,
  description,
  tags,
  liveDemoLink,
  viewTheCodeLink,
}) => {
  return (
    <div className={styles.projectCard}>
      <ProjectContent
        image={image}
        name={name}
        description={description}
        liveDemoLink={liveDemoLink}
        viewTheCodeLink={viewTheCodeLink}
        tags={tags}
      />
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  liveDemoLink: PropTypes.string.isRequired,
  viewTheCodeLink: PropTypes.string.isRequired,
};
