import { BtnLive } from './buttons/ButtonLive.jsx';
import { BtnCode } from './buttons/ButtonCode.jsx';
import { Tag } from './Tag.jsx';
import { projects } from './ProjectsArray.jsx';

import "./Projects.css";

export const ProjectInfo = () => {
  return (
    <div className="info">
      {projects.map((project) => (
        <div key={project.id} className="project">
          <img src={project.image} alt={project.title} className="project-image" /> {/* Lägg till bild här */}
          <div className="div">
            <div className="tech-tags">
              {project.tags.map((tag, i) => (
                <Tag key={i} className="tag-instance" text={tag} />
              ))}
            </div>
            <div className="h">{project.title}</div>
            <p className="body">{project.description}</p>
          </div>
          <div className="btns">
            <BtnLive link={project.liveLink} />
            <BtnCode link={project.codeLink} />
          </div>
        </div>
      ))}
    </div>
  );
};
