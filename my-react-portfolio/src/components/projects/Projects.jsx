import "./Projects.css";

import { SingleProject } from "../singleProject/SingleProject";
import { useState, useEffect } from "react";

//fetching data from personal github API
export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/El1an3/repos")
      .then((response) => response.json())
      .then((data) => {
        const sortedList = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setProjects(sortedList);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="flex projects-section">
      <div className="flex projects-container">
        <h1 className="blue">Featured Projects</h1>
        <SingleProject projects={projects} />
      </div>
    </section>
  );
};
