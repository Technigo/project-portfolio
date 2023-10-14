import { useState, useEffect } from "react";
import { MainHeading } from "../Headings/MainHeading/MainHeading.jsx";
import { ProjectCard } from "../Featured Projects/ProjectCard/ProjectCard.jsx";
import repoImages from "../../repoImages.json";
import "./FeaturedProjects.css";

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
        // Sort the repositories by id, so that the newest project (the one with the highest id) is presented first and set the sorted array in state
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
              <ProjectCard
                className={"project-card"}
                key={repo.id}
                repo={repo}
                repoImage={repoImage}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
