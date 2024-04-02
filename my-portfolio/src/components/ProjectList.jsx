import { useEffect, useState } from "react";
import repoImages from "../repoImages.json";
import { ProjectCard } from "./ProjectCard.jsx";

export const ProjectList = () => {
  const [repoData, setRepoData] = useState([]);

  const gitHubURL = "https://api.github.com/users/schouenkes/repos";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(gitHubURL);
        if (!response.ok) {
          throw new Error("Network response was not ok" + response.statusText);
        }
        const data = await response.json();
        const filteredData = data.filter((gitHubRepo) =>
          repoImages.some((localRepo) => localRepo.repoName === gitHubRepo.name)
        );
        setRepoData(filteredData);
      } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <ul className="project-list">
      {repoData.map((gitHubRepo) => {
        const localRepo = repoImages.find((img) => img.repoName === gitHubRepo.name);
        return (
          <li key={gitHubRepo.id} className="project-card">
            <ProjectCard
              name={localRepo.name}
              gitHubLink={gitHubRepo.html_url}
              topics={gitHubRepo.topics}
              deployedLink={gitHubRepo.homepage}
              repoImage={localRepo.imageUrl}
              description={gitHubRepo.description}
            />
          </li>
        );
      })}
    </ul>
  );
};
