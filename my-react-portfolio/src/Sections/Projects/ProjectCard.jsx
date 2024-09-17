/* eslint-disable react/prop-types */
import "./projectcard.css";
import { Tag } from "../../ReusableComponents/Texts/Tags";
import { ProjectButtons } from "../../ReusableComponents/Buttons/ProjectButtons";
import { NormalText } from "../../ReusableComponents/Texts/NormalText";
import { SubTitle } from "../../ReusableComponents/Texts/SubTitle";
import { ProjectImage } from "../../ReusableComponents/Images/ProjectImage";
//import PropTypes from "prop-types"; // Import PropTypes for prop validation

export const ProjectCard = ({ project }) => {
  return (
    <div className="projectContainer">
      <ProjectImage
        className="project-image"
        src={project.image}
        alt="Project Image"
      />
      <div className="projectDescription">
        <SubTitle className="subtitle" text={project.name} />
        <NormalText className="normaltext" text={project.description} />
        <div className="project-tags">
          {project.tags && <Tag tagText={project.tags} />}
        </div>
        <div className="project-buttons">
          <ProjectButtons project={project} />
        </div>
      </div>
    </div>
  );
};

/*Define prop types for ProjectCard component
ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string), // Assuming tags is an array of strings
    // Define other properties of 'project' here
  }).isRequired,
};*/
