import "./Project.css";
import PropTypes from "prop-types";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

export const Project = ({ project }) => {
  return (
    <div className="project">
      <img src={project.image} alt={project.alt} className="image"></img>
      <div className="project-box">
        <h2 className="project-header">{project.name}</h2>
        <p className="project-description">{project.description}</p>
        <div className="tags-box">
          {project.tags.map((tag, index) => (
            <p className="tags" key={index}>
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="button-box">
        <a href={project.netlify} target="_blank">
          <button className="button">
            <div className="button-flex">
              <TbWorld className="icon" />
              <p>Live demo</p>
            </div>
          </button>
        </a>
        <div className="button-box">
          <a href={project.github} target="_blank">
            <button className="button">
              <div className="button-flex">
                <FaGithub className="icon" />
                <p>View the code</p>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.any,
};
