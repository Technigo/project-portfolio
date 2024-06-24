import PropTypes from "prop-types";
import "../styling/featureProjects/ProjectButtons.css";
import GithubButton from "../../public/View-Code-Button.svg";
import NetlifyButton from "../../public/Live-Demo-Button.svg";

const ProjectButtons = ({ gitHubLink, netlifyLink }) => {
  return (
    <div className="projectButtons">
      <a
        href={netlifyLink}
        className="netlifyButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={NetlifyButton} alt="Live Demo Icon" />
      </a>
      <a
        href={gitHubLink}
        className="gitHubButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GithubButton} alt="GitHub Icon" />
      </a>
    </div>
  );
};

ProjectButtons.propTypes = {
  gitHubLink: PropTypes.string.isRequired,
  netlifyLink: PropTypes.string.isRequired,
};

export default ProjectButtons;
