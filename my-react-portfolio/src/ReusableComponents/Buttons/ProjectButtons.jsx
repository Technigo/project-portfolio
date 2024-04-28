import "./projectbuttons.css";
import blackLiveDemoIcon from "../../../public/icons/live-demo-black.svg";
import blackGitHubIcon from "../../../public/icons/github-black.svg";

export const ProjectButtons = ({ project }) => {
  return (
    <>
      <div className="netlifyButton common-button">
        <a
          href={project.netlify}
          target="_blank"
          rel="noreferrer"
          className="show-more-button"
          aria-label="Live demo">
          <img src={blackLiveDemoIcon} alt="" />
          <p>Live demo</p>
        </a>
      </div>
      <div className="githubButton common-button">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="show-more-button"
          aria-label="View the code">
          <img src={blackGitHubIcon} alt="" />
          <p>View the code</p>
        </a>
      </div>
    </>
  );
};
