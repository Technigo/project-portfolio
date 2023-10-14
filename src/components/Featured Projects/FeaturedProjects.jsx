import { useState, useEffect } from "react";
import repoImages from "../../repoImages.json";
import "./FeaturedProjects.css";
import { MainHeading } from "../Headings/MainHeading/MainHeading";

export const FeaturedProjects = () => {
  const [sortedRepos, setSortedRepos] = useState([]);

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

        // Filter the repositories to include only those with matching images
        const filteredRepos = data.filter((repo) =>
          repoImages.some((img) => img.repoId === repo.id)
        );
        console.log(filteredRepos);
        // Sort the repositories and set the sorted array in state
        const sortedData = [...filteredRepos].sort((a, b) => b.id - a.id);
        setSortedRepos(sortedData);
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
    // Split the name by hyphens and filter out unwanted words
    const words = name
      .split("-")
      .filter((word) => word !== "vite" && word !== "project");
    // Capitalize each word
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    // Join the capitalized words with spaces
    return capitalizedWords.join(" ");
  };

  return (
    <div className="project-card-container">
      <div className="project-card-wrapper">
        <MainHeading
          className={"featured-projects-h2"}
          text={"Featured Projects"}
        />
        <ul>
          {sortedRepos.map((repo) => {
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
