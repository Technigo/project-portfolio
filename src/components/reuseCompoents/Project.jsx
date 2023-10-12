import github from "/icons/github-button.png";
import liveDemo from "/icons/LiveDemo.png";
import "../styleComponents/projects.css";
import data from "../../project.json";
export const Project = () => {
  const projectLists = data.projects;
  // console.log(projectLists);

  return (
    <div className="project-wrapper">
      {projectLists.map((project) => (
        <figure className="project-frame" key={project.id}>
          <figcaption>
            <div className="project">
              <img
                src={project.image}
                alt={project.project_title}
                className="project-image"
              />
              <div className="project-text-wrapper">
                <h1 className="project-title">{project.project_title}</h1>
                <p className="project-content">{project.content}</p>
                <div className="tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <div className="button-wrapper">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="link to the github image"
                  >
                    <button type="button">
                      <img src={github} alt="github image" />
                      <span>{project.button[0]}</span>
                    </button>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button type="button">
                      <img src={liveDemo} alt="Live Demo Image" />
                      <span>{project.button[1]}</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
