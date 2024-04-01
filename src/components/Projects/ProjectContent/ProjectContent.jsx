import PropTypes from "prop-types";
import { ProjectTags } from "../ProjectTags/ProjectTags";

export const ProjectContent = ({
  name,
  description,
  liveDemoLink,
  viewTheCodeLink,
  tags,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span>
        <ProjectTags tags={tags} />
      </span>
      <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
      <a href={viewTheCodeLink} target="_blank" rel="noopener noreferrer">
        View The Code
      </a>
    </div>
  );
};

ProjectContent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveDemoLink: PropTypes.string.isRequired,
  viewTheCodeLink: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
