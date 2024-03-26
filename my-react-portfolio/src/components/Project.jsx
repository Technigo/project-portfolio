export const Project = ({ projectData }) => {
  const getTechnologies = () => {
    return projectData.technologies.map((technology) => (
      <span className="technology" key={technology}>
        {technology}
      </span>
    ));
  };

  return (
    <div>
      <img src={projectData.imageSrc} />
      <h1>{projectData.title}</h1>
      <p>{projectData.text}</p>
      {getTechnologies()}
      <a href={projectData.demoLink}>Live Demo </a>
      <a href={projectData.gitLink}>Git Link </a>
    </div>
  );
};
