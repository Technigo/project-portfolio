
import "./projectcard.css";
import { Tag } from "../../ReusableComponents/Texts/Tag";
import { ProjectButtons } from "./ProjectButtons";

export const ProjectCard = ({ project }) => {
    return (
        <div className="projectWrapper">
            <div className="projectContainer">
                <img src={project.image} height={200} alt="Project Image" />
                <div className="projectDescription">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        {project.name}
                    </a>
                    <h2 className="project-title">{project.name}</h2>

                    <div className="readmeContent">
                        <p>{project.description}</p>
                    </div>
                    <div className="project-tags">
                        {project.tags && (
                            <Tag tagText={project.tags} />
                        )}
                    </div>
                    <div className="project-buttons">

                        <ProjectButtons project={project} />

                    </div>
                </div>
            </div>
        </div>
    );
};

