import { Headline } from "../Headline/Headline";
import "./Section.css";
import projectData from '../../../projects.json';
import linksData from '../../../links.json';

export const Section = () => {
  return (
    <>
      <Headline text="Featured Projects" level={1} />
      <div className="project-grid">
        {projectData.projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-details">
              <h2 className="project-name">{project.name}</h2>
              <div className="description-container">
                <p>{project.description}</p>
              </div>
              <div className="tag-container">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="link-container">
                {linksData.links.map((link) => (
                  <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className={link.className}>
                    <img src={link.icon} alt={`${link.text} Icon`} className="icon" />
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};