import PropTypes from "prop-types";

export const ProjectContent = ({ name, description, tags }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{ tags }</span>
    </div>
  );
};

ProjectContent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};