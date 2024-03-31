import "./SingleProject.css";
import { Heading } from "../heading/Heading";
import { SingleProject } from "./SingleProject";
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
    <section className="projects-section">
      <div className="projects-container">
        <div className="heading-wrapper">
          <Heading level="2" text="Featured Projects" className="dark" />
        </div>
        <SingleProject projects={projects} />
      </div>
    </section>
  );
};
