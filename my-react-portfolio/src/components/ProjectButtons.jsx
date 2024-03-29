import PropTypes from "prop-types";
import "../styling/featureProjects/ProjectButtons.css";
import GitHubIcon from "../assets/View-Code-Button.svg";
import NetlifyIcon from "../assets/Live-Demo-Button.svg";

const ProjectButtons = ({ gitHubLink, netlifyLink }) => {
  return (
    <div className="projectButtons">
      <a
        href={netlifyLink}
        className="netlifyButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={NetlifyIcon} alt="Live Demo Icon" />
      </a>
      <a
        href={gitHubLink}
        className="gitHubButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GitHubIcon} alt="GitHub Icon" />
      </a>
    </div>
  );
};

ProjectButtons.propTypes = {
  gitHubLink: PropTypes.string.isRequired,
  netlifyLink: PropTypes.string.isRequired,
};

export default ProjectButtons;
