import { useState, useEffect } from "react";
import { BigHeadlines } from "../Components/BigHeadlines";
import { Project } from "../Components/Project";

import "./Projects.css";

export const Projects = () => {
  const sectionId = 3;
  const [projectList, setProjectList] = useState([]);

  const fetchProjectsFromGithubAPI = () => {
    fetch("https://api.github.com/users/Hang-Nguyen-Vu/repos")
      .then((res) => res.json())
      .then((data) => {
        // Filter the projects that has "project" in the name
        const filteredProjectListOne = data.filter(project => project.name.includes("project"));
        const filteredProjectListFinal = filteredProjectListOne.filter(project => !project.name.includes("portfolio"));
        setProjectList(filteredProjectListFinal);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchProjectsFromGithubAPI();
  }, []);

  return (
    <div className="project-list-wrapper">
      <BigHeadlines sectionId={sectionId}/>
        
      <div className="project-list">
        {projectList.map((project) => {
          return (
            <Project 
              key={project.id}
              name={project.name}
              description={project.description}
              tags={project.topics}
              homepage={project.homepage}
              url={project.html_url}
              sectionId={sectionId}
            />
          )
        })}
      </div>
    </div>
  )
}
