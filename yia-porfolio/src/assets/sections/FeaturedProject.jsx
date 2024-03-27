import { useState, useEffect } from "react";
import { SectionHead } from "../components/SectionHead";

export const FeaturedProject = () => {
  const githubUsername = "Citronskal";
  const specificRepos = [
    "project-happy-thoughts-vite",
    "project-survey-vite",
    "project-weather-app",
    "project-music-releases-vite",
    "w3-project-library",
  ];

  const [repos, setRepos] = useState([]);
  const [loading, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const specificReposPromises = specificRepos.map(async (repo) => {
          const response = await fetch(
            `https://api.github.com/repos/${githubUsername}/${repo}`
          );
          if (!response.ok) {
            throw new Error(`Failed to fetch repository ${repo}`);
          }
          return await response.json();
        });

        const specificReposData = await Promise.all(specificReposPromises);
        setRepos(specificReposData);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoad(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <section>
        <SectionHead headertext={headlineId[3]}/>


    </section>
  );
};
