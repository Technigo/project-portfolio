import PropTypes from "prop-types";

export const ProjectContent = ({ name, description, tags,liveDemoLink }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{tags}</span>
      <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  );
};

ProjectContent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};