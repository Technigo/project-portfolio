import { useState, useEffect } from "react";
import projectsData from "../projects.json";
import Tags from "../components/Tags";
import ProjectButtons from "../components/ProjectButtons";
import Photos from "../components/Photos";

const FeatureProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (Array.isArray(projectsData.projects)) {
      setProjects(projectsData.projects);
    }
  }, []);

  return (
    <div className="featureProjects">
      <h1>Featured Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="projects">
          <Photos images={project.image} />
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <Tags tags={project.tags} />
          <ProjectButtons
            gitHubLink={project.github}
            netlifyLink={project.netlify}
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureProjects;
