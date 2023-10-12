
import { TagComponent } from "../TagComponent";
import { ProjectHeadline } from "./ProjectHeadline";

export const ProjectCard = ({ repo }) => {

  return (
    <div className="project-card-wrapper">
      <img src="" />
      <div className="project-description">
        <ProjectHeadline repo={repo} />
        <div className="project-tags">
            <TagComponent tag={repo.topics} />
        </div>
        <div className="project-buttons"><button>test</button></div>
      </div>
    </div>
  );
};
