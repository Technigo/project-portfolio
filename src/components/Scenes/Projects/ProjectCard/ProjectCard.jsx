import { projects } from "../../../../Data";
import { Tags } from "../../../Tag/Tags";
import { ViewCodeBtn } from "../../../Buttons/ViewCodeBtn";
import { DemoBtn } from "../../../Buttons/DemoBtn";

export const ProjectCard = () => {
  return (
    <div className="projects-container">
      {projects.map(
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
                <DemoBtn demo_url={demo_url} />
                <ViewCodeBtn github_url={github_url} />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
