import PropTypes from "prop-types";
import { Project } from "../../components/Project/Project";
import "./projectlist.css";
import { projects } from "../../components/project.json";

export const Projectlist = () => {
  return (
    <div className="projectlist">
      <h2>Featured Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
            tags={project.tags}
            netlify={project.netlify}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

Projectlist.propTypes = {
  projects: PropTypes.array,
};
