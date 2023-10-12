import { useEffect, useState } from "react";
import { MainHeading } from "../MainHeading/MainHeading";
// import repoImages from "/src/RepoImages.json";
import "./FeaturedProjects.css";

export const FeaturedProjects = () => {
  const [repos, setRepos] = useState([]);

  const defaultDescription = //Use if description is null or empty
    "A React project showcasing various features and functionalities.";

  function formatRepoName(name) {
    // Split the name by hyphens and capitalize each word
    const words = name.split("-");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    // Join the capitalized words with spaces
    return capitalizedWords.join(" ");
  }

  useEffect(() => {
    // Fetch data from the GitHub API
    fetch("https://api.github.com/users/InnaKokic/repos")
      .then((response) => response.json())
      .then((data) => {
        // Extract the required data (name and topics) from the response
        const formattedRepos = data.map((repo) => ({
          name: formatRepoName(repo.name), // Format the repository name
          topics: repo.topics,
          html_url: repo.html_url, // Include URL for the button
          description: repo.description || defaultDescription,
        }));

        // Set the formatted data in the state
        setRepos(formattedRepos);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="projects-section">
      <div className="projects-wrapper">
        <MainHeading
          className={"heading-text projects"}
          text={"Featured Projects"}
        />
        {repos.map((repo) => (
          <div className="projectCard" key={repo.name}>
            <div className="projects-text-box">
              <strong>{repo.name}</strong>
              <p> {repo.description} </p>

              <div className="topics-wrapper">
                {" "}
                {repo.topics.map((topic) => (
                  <div className="topics" key={topic}>
                    {topic}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href="https://app.netlify.com/teams/innakokic/sites"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="icon-button github">
                  <img
                    className="icon"
                    src="./src/assets/Live Demo.svg"
                    alt="github icon"
                  />
                  Live demo
                </button>
              </a>

              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <button className="icon-button github">
                  <img
                    className="icon"
                    src="./src/assets/github.svg"
                    alt="github icon"
                  />
                  View the code
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
