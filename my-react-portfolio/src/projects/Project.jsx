import "./Project.css";
import PropTypes from "prop-types";

export const Project = ({ project }) => {
  return (
    <div className="project">
      <img src={project.image} alt={project.alt}></img>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      {project.tags.map((tag, index) => (
        <p className="tags" key={index}>
          {tag}
        </p>
      ))}
      <a href={project.netlify} target="_blank">
        <button>Live demo</button>
      </a>
      <a href={project.github} target="_blank">
        <button>View the code</button>
      </a>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.any,
};
