import FeaturedProjects from "../assets/FeaturedProjects.json";
import { Project } from "./Project";

const FeatureProjects = () => {
  const getProjects = () => {
    return FeaturedProjects.projects.map((project) => (
      <Project key={project.title} projectData={project} />
    ));
  };

  return (
    <div>
      <h1>Featured Projects</h1>
      {getProjects()}
    </div>
  );
};

export default FeatureProjects;
