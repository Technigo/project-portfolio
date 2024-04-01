import { PropTypes } from "prop-types";

export const ProjectCard = ({ name, gitHubLink, topics, deployedLink, description, repoImage }) => {
  return (
    <li>
      <img src={repoImage} alt="displays the frontpage of the webpage" />
      <h2>{name}</h2>
      <p>{description}</p>
      {topics.map((tag) => {
        return <p key={tag}>{tag}</p>;
      })}
    </li>
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
