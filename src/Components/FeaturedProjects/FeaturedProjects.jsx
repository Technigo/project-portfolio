import { useEffect, useState } from "react";
import { MainHeading } from "../MainHeading/MainHeading";
import "./FeaturedProjects.css";
import repoImages from "./repoImages.json";

export const FeaturedProjects = () => {
  const [repos, setRepos] = useState([]);

  const defaultDescription = //Use if description in API is null or empty
    "A React project showcasing various features and functionalities.";

  const formatRepoName = (name) => {
    // Split the name by hyphens and capitalize each word
    const words = name.split("-");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1) 
    );

    // Join the capitalized words with spaces
    return capitalizedWords.join(" ");
  };

  // Function to fetch the image URL fon the json-file based on the repository name
  const getImageUrlForRepo = (repoName) => {
    const matchedRepo = repoImages.find((repo) => repo.repoName === repoName);
    return matchedRepo ? matchedRepo.imageUrl : ""; // Return the image URL if found, otherwise an empty string
  };

  const getLiveLinkRepo = (repoName) => {
    const matchRepo = repoImages.find((repo) => repo.repoName === repoName);
    return matchRepo ? matchRepo.repoLive : "";
  };

  useEffect(() => {
    // Fetch data from the GitHub API
    fetch("https://api.github.com/users/InnaKokic/repos")
      .then((response) => response.json())
      .then((data) => {
        const formattedRepos = data
          .filter((repo) => {
            //filter to only show repos that exist in the repoImages json
            return repoImages.find((img) => img.repoName === repo.name);
          })
          .map((repo) => ({
            name: formatRepoName(repo.name),
            topics: repo.topics,
            html_url: repo.html_url,
            description: repo.description || defaultDescription,
            imageUrl: getImageUrlForRepo(repo.name), // Fetch the image URL
            liveLink: getLiveLinkRepo(repo.name)
          }));
  
        setRepos(formattedRepos);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  

  return (
    <section className="projects-section">
      <div className="projects-wrapper">
        <MainHeading
          className={"heading-text projects"}
          text={"Featured Projects"}
        />

        {repos.map((repo) => (
          
            <div className="projects-text-box" key={repo.name}>
              <img
                className="repo-image"
                src={repo.imageUrl}
                alt={`Image for ${repo.name}`}
              />
              <div className="all-text-wrapper">
                <h3 className="repo-name">{repo.name}</h3>

                <p className="repo-desc"> {repo.description} </p>

                <div className="topics-wrapper">
                  {repo.topics.map((topic) => (
                    <div className="topics" key={topic}>
                      {topic}
                    </div>
                  ))}
                  </div>
              </div>

              <div className="repo-button-wrapper">
                <a
                  className="button-text"
                  href={repo.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="icon-button live-demo-button">
                    <img
                      className="icon"
                      src="/assets/Live Demo.svg"
                      alt="live demo icon"
                    />
                    Live demo
                  </button>
                </a>

                <a
                className="button-text"
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="icon-button github-button">
                    <img
                      className="icon"
                      src="/assets/github.svg"
                      alt="github icon"
                    />
                    View the code
                  </button>
                </a>
              </div>
            </div>

        ))}
      </div>
    </section>
  );
};
