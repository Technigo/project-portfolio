import { Link } from "./Links";
import "./Project.css";
import PropTypes from "prop-types";

export const Project = ({ project }) => {
  return (
    <div className="project">
      <img src={project.image} alt={project.alt} className="image"></img>
      <div>
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
        <Link project={project} />
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.any,
};
