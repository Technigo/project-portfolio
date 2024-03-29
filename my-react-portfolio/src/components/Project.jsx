import PropTypes from "prop-types";
import Tags from "./Tags";
import ProjectButtons from "./ProjectButtons";
import Photos from "./Photos";
import "../styling/featureProjects/FeatureProjects.css";

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="projectImage">
        <Photos images={project.image} />
      </div>
      <div className="projectContainer">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <Tags tags={project.tags} />
        <ProjectButtons
          gitHubLink={project.github}
          netlifyLink={project.netlify}
        />
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    netlify: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
