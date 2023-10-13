import repoImages from "../../repoImages.json";
import { TagComponent } from "../TagComponent";
import { ProjectHeadline } from "./ProjectHeadline";
import { ButtonComponent } from "./ButtonComponent";

export const ProjectCard = ({ repo }) => {
  // Find the corresponding image for the repo
  const repoImage = repoImages.find((img) => img.repoName === repo.name);

  return (
    <div className="project-card-wrapper">
      <img src={repoImage?.imageUrl} alt={repo.name} />
      <div className="project-description">
        <ProjectHeadline projectTitle={repo.name} />
        <div className="project-tags">
          {repo.topics.map((topic) => (
            <span key={topic}>
              <TagComponent tag={topic} />
            </span>
          ))}
        </div>
        <ButtonComponent repoURL={repo.html_url} deployedSite={repo.homepage} />
      </div>
    </div>
  );
};




