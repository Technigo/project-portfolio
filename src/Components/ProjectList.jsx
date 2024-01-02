import ProjectCard from "../Components/ProjectCard";
import projects from "../projects.json";

const ProjectList = () => {
  console.log(projects);

  return projects.projects.map((project) => {
    return (
      <>
        <ProjectCard
          key={project.id}
          name={project.name}
          photo={project.image}
          tags={project.tags}
          description={project.description}
          liveLink={project.netlify}
          githubLink={project.github}
        />
      </>
    );
  });
};

export default ProjectList;
