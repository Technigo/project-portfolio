import ProjectCard from "../Components/ProjectCard";
import projects from "../Sections/projects.json";

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
          liveLink={project.netlify}
          githubLink={project.github}
        />
      </>
    );
  });
};

export default ProjectList;
