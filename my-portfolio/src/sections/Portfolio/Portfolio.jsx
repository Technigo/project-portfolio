import { useState, useEffect } from "react";
import { Introduction } from "../Introduction/Introduction";
import { Tech } from "../Tech/Tech";
import { FeaturedProjects } from "../Featured projects/FeaturedProjects";
import { Article } from "../Articles/Article";
import { Skills } from "../Skills/Skills";
import { Contact } from "../Contact/Contact";
import "./Portfolio.css";

export const Portfolio = () => {
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch repositories when component mounts
    fetchRepositories();
  }, []);

  const fetchRepositories = () => {
    const URL = "https://api.github.com/users/ericamechler/repos";

    setError(null);

    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load repositories");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Sort repositories based on the newest projects first, according to pins?
        setRepositories(data);
      })
      .catch((error) => {
        setError("Error loading repositories. Please try again later");
      })
      .finally(() => {});
  };

  return (
    <div className="main-wrapper">
      <header>
        <Introduction />{" "}
      </header>
      <Tech />
      <FeaturedProjects />
      <Article />
      <Skills />
      <Contact />
    </div>
  );
};
