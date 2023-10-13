import { Project } from "../components/Project";
import projects from "../projects.json";

fetch("https://api.github.com/users/KroLuna/repos")
  .then((res) => res.json())
  .then((json) => console.log(json));

export const Projects = () => {
  return projects.map((project) => {
    return (
      <Project name={project.name} photo={project.image} tags={project.tags} />
    );
  });
};
