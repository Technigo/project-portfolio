import { useState, useEffect } from "react";
import { SectionHead } from "../components/SectionHead";
import { ProjectCard } from "../components/ProjectCard";

import "./Projects.css";

export const FeaturedProject = () => {
  const headlineId = 3; 
  const [projectList, setProjectList] = useState([]);

  const fetchProjectsFromGithubAPI = () => {
    fetch("https://api.github.com/users/Citronskal/repos")
      .then((res) => res.json())
      .then((data) => {

        const filteredProjectListOne = data.filter((project) =>
          project.name.includes("project")
        );
        const filteredProjectListFinal = filteredProjectListOne.filter(
          (project) => !project.name.includes("portfolio")
        );
        setProjectList(filteredProjectListFinal);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchProjectsFromGithubAPI();
  }, []);

  return (
    <div className="project-list-wrapper">
      <SectionHead headlineId={headlineId} /> 

      <div className="project-list">
        {projectList.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              tags={project.topics}
              homepage={project.homepage}
              url={project.html_url}
              sectionId={headlineId} 
            />
          );
        })}
      </div>
    </div>
  );
};
