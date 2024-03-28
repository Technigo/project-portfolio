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
        <div className="flex-box">
          <img className="projects-image" src={projectData.imageSrc} />
          <div className="projects-info flex-box">
            <h1 className="projects-title">{projectData.title}</h1>
            <p className="projects-text">{projectData.text}</p>
            <div className="projects-technologies flex-box">
              {getTechnologies()}{" "}
            </div>
            <div className="projects-links flex-box">
              <a
                className="project-demo-link project-link"
                href={projectData.demoLink}
              >
                <img className="project-link-image" src="./liveDemo.svg" />
                <span>Live Demo </span>
              </a>
              <a
                className="project-git-link project-link"
                href={projectData.gitLink}
              >
                <img src="./github.svg" />
                <span>Git Link</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
