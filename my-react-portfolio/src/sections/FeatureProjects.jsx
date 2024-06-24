import { useState, useEffect } from "react";
import projectsData from "../projects.json";
import Project from "../components/Project";
import "../styling/featureProjects/FeatureProjects.css";

const FeatureProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (Array.isArray(projectsData.projects)) {
      setProjects(projectsData.projects);
    }
  }, []);

  return (
    <div className="featureProjects">
      <h1 className="featureProjectsTitle">Featured Projects</h1>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default FeatureProjects;
