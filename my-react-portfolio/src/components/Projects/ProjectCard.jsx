import { ProjectData } from "./ProjectData";
import "./Projects.css";

export const ProjectCard = () => {
  return (
    <div className="project-card-section">
      {ProjectData.map((project, index) => (
        <div key={index} className="project-card">
          {/* Apply styles directly to the img element */}
          <img
            src={project.imageUrl}
            alt={project.heading}
            className="project-image" // Add a class for styling
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
              <button>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/netlify-512.png" alt="Netlify" />
                {project.buttonText1}
              </button>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <img src="src/assets/github.png" alt="GitHub" />
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
