import { useEffect, useState } from "react";
import { Header } from "../common/Header";
import { ProjectCard } from "./ProjectCard";
import "./projects.css";

const API = "https://api.github.com/users/Maria-Manuela/repos";

//component to fetch data from API
export const Projects = () => {
  const [gitData, setGitData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const parseLinkHeader = (header) => {
    const linkHeadersArray = header
      .split(", ")
      .map((header) => header.split("; "));
    const links = {};
    linkHeadersArray.forEach((link) => {
      const linkPart = link[0].slice(1, -1);
      const relPart = link[1].replace(/"/g, "").replace("rel=", "");
      links[relPart] = linkPart;
    });
    return links;
  };

  //function to fetch the API data
  const fetchAllProjects = async () => {
    let allRepos = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      try {
        const response = await fetch(`${API}?page=${page}&per_page=30`);

        if (!response.ok) {
          throw new Error("Problem fetching API data");
        }

        const rawData = await response.json();
        allRepos = [...allRepos, ...rawData];

        // Check if there are more pages
        const linkHeader = response.headers.get("Link");
        if (linkHeader) {
          const links = parseLinkHeader(linkHeader);
          hasMore = links.next ? true : false;
          page++;
        } else {
          hasMore = false;
        }
      } catch (error) {
        setError(error);
        console.error(error);
        hasMore = false;
      }
    }

    // Filter the fetched repositories to include only those whose names start with "project"
    const filteredRepos = allRepos.filter((repo) =>
      repo.name.startsWith("project")
    );

    setGitData(filteredRepos);
    setLoading(false);
    // Set loading to false after data is fetched
  };

  //handle Fetch
  useEffect(() => {
    fetchAllProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="projects-container">
      <Header
        level={1}
        className={"projects-heading"}
        text={"Featured Projects"}
      />
      {loading ? ( // Display loading state while fetching data
        <p className="loading-message">Loading...</p>
      ) : error ? ( // Display error message if there's an error
        <p className="error-message">An error occurred: {error.message}</p>
      ) : (
        <ProjectCard repositories={gitData} />
      )}
    </section>
  );
};
