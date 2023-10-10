import "./project-card.css";

import { Tags } from "./Tags.jsx";

export const ProjectCard = ({
  title,
  description,
  gitLink,
  deployedLink,
  tags,
}) => {
  console.log(title);
  console.log(description);
  console.log(gitLink);
  console.log(deployedLink);
  console.log(tags);
  return (
    <div className="project-card">
      <div className="image-div">Image</div>
      <div className="project-data">
        <h2 className="project-title">{title}</h2>
        <p className="project-description"> {description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <Tags key={tag} tagInfo={tag} />
          ))}
        </div>
        <div className="buttons">
          <button className="deployedBtn" href={deployedLink}>
            View Live
          </button>
          <button className="GitBtn" href={gitLink}>
            View Code
          </button>
        </div>
      </div>
    </div>
  );
};
