import { useEffect, useState } from "react";
import { Header } from "../common/Header";
import { ProjectCard } from "./ProjectCard";
import "./projects.css";

const API = "https://api.github.com/users/Maria-Manuela/repos";

//component to fetch data from API
export const Projects = () => {
  const [gitData, setGitData] = useState([]);
  const [error, setError] = useState(null);

  //function to fetch the API data
  const fetchProjects = async () => {
    try {
      const response = await fetch(API);

      if (!response.ok) {
        throw new Error("Problem fetching API data");
      }

      const rawData = await response.json();
      setGitData(rawData);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  //handle Fetch
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="projects-container">
      <Header
        level={1}
        className={"projects-heading"}
        text={"Featured Projects"}
      />
      {error ? (
        <p className="error-message">An error occurred: {error.message}</p>
      ) : (
        <ProjectCard repositories={gitData} />
      )}
    </section>
  );
};
