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
        <div className="projects-container">
          <img className="projects-image" src={projectData.imageSrc} />
          <h1 className="projects-title">{projectData.title}</h1>
          <p className="projects-text">{projectData.text}</p>
          {getTechnologies()}
          <a href={projectData.demoLink}>Live Demo </a>
          <a href={projectData.gitLink}>Git Link </a>
        </div>
      </div>
    </>
  );
};
