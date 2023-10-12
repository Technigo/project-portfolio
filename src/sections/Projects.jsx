import { Project } from "../components/Project";

fetch("https://api.github.com/users/YourGitHubProfile/repos")
  .then((res) => res.json())
  .then((json) => console.log(json));

export const Projects = () => {
  return projects.map((project) => {
    return (
      <Project name={project.name} photo={project.image} tags={project.tags} />
    );
  });
};
