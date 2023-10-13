import Headlines from "../Components/Headlines";
import ProjectCard from "../Components/ProjectCard";
import projects from "../Page/projects.json";

export const FeaturedProjects = () => {
  console.log(projects);
  return projects.projects.map((project) => {
    return (
      <>
        <Headlines />
        <ProjectCard
          key={project.id}
          name={project.name}
          photo={project.image}
          tags={project.tags}
        />
      </>
    );
  });
};

export default FeaturedProjects;
