//här mappar jag
import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";

import React from "react";

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
    <section className="featured-projects">
      {projectList
        .filter((project) => project.description)
        .map((project) => (
          <ProjectCard project={project} />
        ))}
    </section>
  );
};
