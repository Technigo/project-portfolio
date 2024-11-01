import PropTypes from "prop-types";

export const Project = ({ projectData }) => {
  const getTechnologies = () => {
    return projectData.technologies.map((technology) => (
      <span className="technology" key={technology}>
        {technology}
      </span>
    ));
  };

  return (
    <>
      <div className="projects-element">
        <div className="projects-main flex-box">
          <img className="projects-image" src={projectData.imageSrc} />
          <div className="projects-info flex-box">
            <h1 className="projects-title">{projectData.title}</h1>
            <p className="projects-text">{projectData.text}</p>
            <div className="projects-technologies flex-box">
              {getTechnologies()}{" "}
            </div>
            <div className="projects-links flex-box">
              <a
                className="project-demo-link project-link flex-box"
                href={projectData.demoLink}
              >
                <img src="./liveDemo.svg" />
                <span className="project-link-text">Live Demo </span>
              </a>
              <a
                className="project-git-link project-link flex-box"
                href={projectData.gitLink}
              >
                <img src="./github.svg" />
                <span className="project-link-text">View the code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Project.propTypes = {
  projectData: PropTypes.shape({
    technologies: PropTypes.array.isRequired,
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired,
    gitLink: PropTypes.string.isRequired,
  }),
};
