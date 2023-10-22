import { Button } from "../Button/Button";
import { ProjectTopics } from "./ProjectTopics";

import "./ProjectCard.css";

export const ProjectCard = ({ project }) => {
  console.log(project.topics);

  // Formatting the repo-name to remove hyphens and changing the first letter of each word to uppercase
  const formatRepoName = (name) => {
    const words = name.split("-");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(" ");
  };

  return (
    <div className="project-card-wrapper" key={project.id}>
      <div className="project-image">
        {/* render the right image to the right project  */}
        <img
          src={`/FeaturedImages/${project.id}.png`}
          alt="A preview of the project"
        />
      </div>
      <div className="project-info">
        <h2 className="project-name">{formatRepoName(project.name)}</h2>
        <p className="project-description">{project.description}</p>

        <ProjectTopics topics={project.topics} />
        <div className="btn-wrapper-projects">
          <Button
            className={`demo-button`}
            buttonName={`Live Demo`}
            link={project.homepage}
            iconAlt={`Web icon`}
          />
          <Button
            className={`code-button`}
            buttonName={`View the Code`}
            link={project.html_url}
            iconAlt={`GitHub logo`}
          />
        </div>
      </div>
    </div>
  );
};
