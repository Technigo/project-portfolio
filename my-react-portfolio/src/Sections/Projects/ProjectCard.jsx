import "./projectcard.css";
import { Tag } from "../../ReusableComponents/Texts/Tag";
import { ProjectButtons } from "../../ReusableComponents/Buttons/ProjectButtons";

export const ProjectCard = ({ project }) => {
  return (
    <div className="projectWrapper">
      <div className="projectContainer">
        <img src={project.image} height={280} width={280} alt="Project Image" />
        <div className="projectDescription">
          <h2 className="project-title">{project.name}</h2>
          <div className="readmeContent">
            <p>{project.description}</p>
          </div>
          <div className="project-tags">
            {project.tags && <Tag tagText={project.tags} />}
          </div>
          <div className="project-buttons">
            <ProjectButtons project={project} />
          </div>
        </div>
      </div>
    </div>
  );
};
