//här mappar jag
import React from "react";
import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";

import "./ProjectList.css";

export const ProjectList = () => {
  // const projects = [{ id: 698935612 }];

  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/smexlex/repos")
      // Parsing the response as JSON
      .then((res) => res.json())
      // Updating `messageList` state with the parsed data
      .then((data) => setProjectList(data))
      // Logging any errors that occur during the fetch operation
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="featured-projects-wrapper">
      {projectList
        .filter((project) => project.description)
        .map((project) => (
          <ProjectCard project={project} />
        ))}
    </section>
  );
};
