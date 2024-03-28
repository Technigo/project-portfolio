import PropTypes from "prop-types";

const ProjectButtons = ({ gitHubLink, netlifyLink }) => {
  return (
    <div className="projectButtons">
      <a
        href={gitHubLink}
        className="gitHubButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        View the code
      </a>
      <a
        href={netlifyLink}
        className="netlifyButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo
      </a>
    </div>
  );
};

ProjectButtons.propTypes = {
  gitHubLink: PropTypes.string.isRequired,
  netlifyLink: PropTypes.string.isRequired,
};

export default ProjectButtons;
