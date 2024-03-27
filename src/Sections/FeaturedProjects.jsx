import Headlines from "../Components/Headlines";
import ProjectList from "../Components/ProjectList";

export const FeaturedProjects = () => {
  return (
    <div className="projects-wrapper">
      <Headlines title="Featured Projects" />
      <ProjectList />
    </div>
  );
};

export default FeaturedProjects;
