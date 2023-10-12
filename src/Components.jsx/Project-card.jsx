// import { Button } from "./Button"
import { Tag } from "./Tag";
import { Photo } from "../Photo/Photo.jsx";

import "./project-card.css";

export const ProjectCard = () => {
  const projectTitle = "Project Title";
  const projectText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, recusandae molestias vitae pariatur eius...";
  const tagArray = ["HTML5", "CSS3", "React", "Node"];
  const projectLiveLink = "Netlify";
  const gitHubLink = "GitHub";

  return (
    <div className="project-card">
      <div className="project-photo">
        <Photo />
      </div>

      <div className="project-info">
        <h2>{projectTitle}</h2>
        <p>{projectText}</p>
        <div className="tag-container">
          {tagArray.map((item) => (
            <Tag key={item} tagItem={item} />
          ))}
        </div>

        <div className="buttons">
          <button link={projectLiveLink}>Live Demo</button>
          <button link={gitHubLink}> Github </button>
        </div>
      </div>
    </div>
  );
};
