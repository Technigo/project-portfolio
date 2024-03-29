import PropTypes from "prop-types";

export const ProjectContent = ({ name, description }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

ProjectContent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};