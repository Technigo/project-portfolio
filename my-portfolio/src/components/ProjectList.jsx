import { useEffect, useState } from "react";
import repoImages from "../repoImages.json";
import { Headline } from "./Headline.jsx";
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
    <section className="project-list-container">
      <Headline style="colored-title" title="Featured Projects" />
      <ul>
        {repoData.map((gitHubRepo) => {
          const localRepo = repoImages.find((img) => img.repoName === gitHubRepo.name);
          console.log(localRepo);
          return (
            <li key={gitHubRepo.id}>
              <img src={localRepo?.imageUrl} alt={gitHubRepo.name} />
              {localRepo.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
