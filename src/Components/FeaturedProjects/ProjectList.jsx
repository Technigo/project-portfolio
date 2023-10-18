//här mappar jag
import React from "react";
import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Heading1 } from "../Heading1/Heading1";

import "./ProjectList.css";

export const ProjectList = () => {
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
      <Heading1 className={"featured-heading"} text={"Featured Projects"} />
      <div className="individual-project-info">
        {projectList
          .filter((project) => project.description)
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
      </div>
    </section>
  );
};
