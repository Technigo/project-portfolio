
import "./projectcard.css";
import { Tag } from "../../ReusableComponents/Texts/Tag";
import { ProjectButtons } from "../../ReusableComponents/Buttons/ProjectButtons";
import { NormalText } from "../../ReusableComponents/Texts/NormalText";
import { SubTitle } from "../../ReusableComponents/Texts/SubTitle";
import { ProjectImage } from "../../ReusableComponents/Images/ProjectImage";




export const ProjectCard = ({ project }) => {
    return (

        <div className="projectContainer">
            <ProjectImage className="project-image" src={project.image} alt="Project Image" />
            <div className="projectDescription">
                <SubTitle className="subtitle" text={project.name} />
                <NormalText className="normaltext" text={project.description} />
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

    );
};



