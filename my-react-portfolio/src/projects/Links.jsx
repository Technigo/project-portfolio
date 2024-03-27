import "./Links.css";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

export const Link = ({ project }) => {
  return (
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
  );
};

Link.propTypes = {
  project: PropTypes.any,
};
