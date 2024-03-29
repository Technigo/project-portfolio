import PropTypes from "prop-types";

export const ProjectContent = ({ name, description, tags, liveDemoLink, viewTheCodeLink }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{tags}</span>
      <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
      <a href={viewTheCodeLink} target="_blank" rel="noopener noreferrer">View The Code</a>
    </div>
  );
};

ProjectContent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  liveDemoLink: PropTypes.string.isRequired,
  viewTheCodeLink: PropTypes.string.isRequired
};