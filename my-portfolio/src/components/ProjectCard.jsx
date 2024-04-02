import { PropTypes } from "prop-types";
import { Button } from "./Button.jsx";

export const ProjectCard = ({ name, gitHubLink, topics, deployedLink, description, repoImage }) => {
  return (
    <>
      <img className="repo-image" src={repoImage} alt="displays the frontpage of the webpage" />
      <div className="project-card-desktop">
        <div className="projectcard-textbox">
          <h2>{name}</h2>
          <p>{description}</p>
          <div className="tags-box">
            {topics.map((tag) => {
              return <p key={tag}>{tag}</p>;
            })}
          </div>
        </div>
        <div className="button-container">
          <Button
            buttonIcon="src/assets/icons/live-icon.svg"
            url={deployedLink}
            buttonStyle="live-button"
            buttonName="Live demo"
          />
          <Button
            buttonIcon="src/assets/icons/github-icon.svg"
            url={gitHubLink}
            buttonStyle="github-button"
            buttonName="View the code"
          />
        </div>
      </div>
    </>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  gitHubLink: PropTypes.string,
  topics: PropTypes.array,
  deployedLink: PropTypes.string,
  repoImage: PropTypes.string,
  description: PropTypes.string,
};
