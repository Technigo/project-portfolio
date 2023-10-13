import { useState, useEffect } from "react";
import repoImages from "../../repoImages.json";
import "./FeaturedProjects.css";
import { MainHeading } from "../Headings/MainHeading/MainHeading";

export const FeaturedProjects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/AnnaRobertsson/repos"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok" + response.statusText);
        }
        const data = await response.json();
        setRepos(data);
        console.log(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchRepos();
  }, []);

  const formatRepoName = (name) => {
    // Split the name by hyphens and capitalize each word
    const words = name.split("-");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    // Join the capitalized words with spaces
    return capitalizedWords.join(" ");
  };

  // Filter the repos array to only include repositories with matching img.repoId
  const filteredRepos = repos.filter((repo) =>
    repoImages.some((img) => img.repoId === repo.id)
  );

  return (
    <div className="project-card-container">
      <div className="project-card-wrapper">
        <MainHeading
          className={"featured-projects-h2"}
          text={"Featured Projects"}
        />
        <ul>
          {filteredRepos.map((repo) => {
            const repoImage = repoImages.find((img) => img.repoId === repo.id);
            return (
              <li key={repo.id}>
                <img src={repoImage?.imageUrl} alt={repo.name} />
                {formatRepoName(repo.name)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
