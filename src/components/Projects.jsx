import { useState } from 'react';
import { Tag } from './Tag.jsx';
import { projects } from './ProjectsArray.jsx';
import GH from "../assets/github2.svg";
import WEB from "../assets/Ic-Web2.svg";
import down from "../assets/arrow-circle-down.svg";
import up from "../assets/arrow-circle-up.svg";
import { BtnLink } from './buttons/ButtonLink.jsx'; // Import BtnLink
import './Projects.css';

export const ProjectInfo = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const initialCount = 3;

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleProjects(initialCount);
  };

  return (
    <div className="info">
      {projects.slice(0, visibleProjects).map((project) => (
        <div key={project.id} className="project">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-details">
            <div className="tech-tags">
              {project.tags.map((tag, i) => (
                <Tag key={i} className="tag-instance" text={tag} />
              ))}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <BtnLink url={project.liveLink} text="Live Demo" img={WEB} />
              <BtnLink url={project.codeLink} text="View Code" img={GH} />
            </div>
          </div>
        </div>
      ))}
      {visibleProjects < projects.length && (
        <button onClick={handleShowMore} className="show-btn">
          <img className="arrow" alt="arrow down" src={down} />
          Show More Projects
        </button>
      )}
      {visibleProjects > initialCount && (
        <button onClick={handleShowLess} className="show-btn">
          <img className="arrow" alt="arrow up" src={up} />
          Show Less Projects
        </button>
      )}
    </div>
  );
};
