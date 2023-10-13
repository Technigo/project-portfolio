import "./projectCard.css";
import { projects } from "../Data";
import { LinkBtns } from "./LinkBtns";
import { Tags } from "./Tags";

export const ProjectCard = () => {
  return (
    <div className="projects-container">
      {projects.map(
        ({ id, title, description, tags, image, github_url, demo_url }) => {
          return (
            <div className="project-item card" key={id}>
              <img src={image} alt="" />
              <div className="project-info">
                <h3 className="titles">{title}</h3>
                <p className="text-cs">{description}</p>
                <Tags tags={tags} />
              </div>
              <LinkBtns github_url={github_url} demo_url={demo_url} />
            </div>
          );
        }
      )}
    </div>
  );
};
