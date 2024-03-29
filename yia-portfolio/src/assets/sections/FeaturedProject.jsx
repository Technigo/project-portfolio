import { useState, useEffect } from "react";
import { SectionHead } from "../components/SectionHead";
import { ProjectCard } from "../components/ProjectCard";

export const FeaturedProject = () => {
  const headlineId = 3;
  const [projectList, setProjectList] = useState([]);

  const selectedProjectNames = [
    "project-happy-thoughts-vite",
    "project-music-releases-vite",
    "project-survey-vite",
    "project-weather-app",
  ];

  const fetchProjectsFromGithubAPI = () => {
    fetch("https://api.github.com/users/Citronskal/repos")
      .then((res) => res.json())
      .then((data) => {
        const filteredProjectList = data.filter((project) =>
          selectedProjectNames.includes(project.name)
        );
        setProjectList(filteredProjectList);
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
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            tags={project.topics}
            homepage={project.homepage}
            url={project.html_url}
            sectionId={headlineId}
          />
        ))}
      </div>
    </div>
  );
};
