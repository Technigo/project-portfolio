import projects from "../../../../json/projects.json";
import { Tags } from "../../../Tag/Tags";
import { LinkButton } from "../../../LinkButton/LinkButton";
import { TbView360 } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";

export const ProjectCard = () => {
  return (
    <div className="projects-container">
      {projects.projects.map(
        ({ id, title, description, tags, image, github_url, demo_url }) => {
          return (
            <div className="project-item" key={id}>
              <img
                src={image}
                alt={`Image for project ${title}`}
                className="project-image-border"
              />
              <div className="project-info">
                <h3 className="titles">{title}</h3>
                <p className="p-text">{description}</p>
                <Tags tags={tags} />
              </div>
              <div className="btn-container">
                <LinkButton
                  url={demo_url}
                  className="demo-btn"
                  title="View the live demo in a new tab"
                  icon={<TbView360 className="btn-icon" />}
                  text="Live demo"
                />
                <LinkButton
                  url={github_url}
                  className="code-btn"
                  title="View the code on GitHub in a new tab"
                  icon={<AiFillGithub className="btn-icon" />}
                  text="View the code"
                />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
