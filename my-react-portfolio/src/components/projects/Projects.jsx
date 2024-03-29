import "./projects.css";
import { Heading } from "../heading/Heading";
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
        <Heading level="1" text="Featured Projects" className="blue" />
        <SingleProject projects={projects} />
      </div>
    </section>
  );
};
