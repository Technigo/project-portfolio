import { ProjectData } from "./ProjectData";
import "./Projects.css";

export const ProjectCard = () => {
  return (
    <div className="project-card-section">
      {ProjectData.map((project, index) => (
        <div key={index} className="project-card">
          <img
            src={project.imageUrl}
            alt={project.heading}
            className="project-image" 
          />
          <div className="content-container">
            <h2>{project.heading}</h2>
            <p>{project.text}</p>
            {project.tags && (
              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="buttons-container">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/globe-1024.png"
                    alt="Netlify"
                  />
                  {project.buttonText1}
                </button>
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                  />
                  {project.buttonText2}
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
