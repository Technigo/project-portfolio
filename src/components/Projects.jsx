import { BtnLink } from './buttons/ButtonLink.jsx';
import { Tag } from './Tag.jsx';
import { projects } from './ProjectsArray.jsx';
import GH from "../assets/github2.svg";
import WEB from "../assets/Ic-Web2.svg";

import "./Projects.css";

export const ProjectInfo = () => {
  return (
    <div className="info">
      {projects.map((project) => (
        <div key={project.id} className="project">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-details">
            <div className="tech-tags">
              {project.tags.map((tag, i) => (
                <Tag key={i} className="tag-instance" text={tag} />
              ))}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-buttons">
              <BtnLink url={project.liveLink} text="Live Demo" img={WEB} />
              <BtnLink url={project.codeLink} text="View Code" img={GH} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
