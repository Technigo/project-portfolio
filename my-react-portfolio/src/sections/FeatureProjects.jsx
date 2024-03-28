import { useState, useEffect } from "react";
import projectsData from "../projects.json";
import Tags from "../components/Tags";
import ProjectButtons from "../components/ProjectButtons";

const FeatureProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (Array.isArray(projectsData.projects)) {
      setProjects(projectsData.projects);
    }
  }, []);

  return (
    <div className="featureProjects">
      {projects.map((project, index) => (
        <div key={index} className="projects">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <Tags text={project.tags.join(", ")} />
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
