import FeaturedProjects from "../assets/FeaturedProjects.json";
import { Project } from "./Project";

const FeatureProjects = () => {
  const getProjects = () => {
    return FeaturedProjects.projects.map((project) => (
      <Project key={project.title} projectData={project} />
    ));
  };

  return (
    <div className="project-page">
      <div className="project-page-content">
        <h1 className="project-main-title">Featured Projects</h1>
        {getProjects()}
      </div>
    </div>
  );
};

export default FeatureProjects;
