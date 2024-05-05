import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
import { List } from "../List/List";
import githubDemo from "/icons/githubDemo.svg";
import liveDemo from "/icons/liveDemo.svg";
import "./ProjectCards.css";
import repoImages from "../../sections/repoImages.json";

export const ProjectCards = ({ projects }) => {
  return (
    <div>
      {projects && (
        <div className="projects-div">
          {projects.map((project) => {
            const repoImage = repoImages.find(
              (img) => img.repoID === project.id
            );
            if (
              project.id !== 756390333 &&
              project.id !== 749447525 &&
              project.id !== 752195534 &&
              project.id !== 777377015 &&
              project.id !== 780928545
            ) {
              return (
                <div className="project-card" key={project.id}>
                  <Image
                    className="project-image"
                    link={repoImage?.imageUrl}
                    altText={repoImage?.altText}
                  />
                  <h2>
                    {project.name.replace("project", "").replace(/-/g, " ")}
                  </h2>
                  <p>{project.description}</p>
                  <List listStyle="topics" listItems={project.topics} />
                  <div className="btn-div">
                    <Button
                      buttonStyle="project-btn live-demo-btn"
                      icon={liveDemo}
                      altText="view the page button"
                      link={project.homepage}
                      buttonText="Live demo"
                    />
                    <Button
                      buttonStyle="project-btn view-code-btn"
                      icon={githubDemo}
                      altText="view the code button"
                      link={project.html_url}
                      buttonText="View the code"
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};
