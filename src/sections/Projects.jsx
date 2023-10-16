// import { useState, useEffect } from "react";
import { Project } from "../components/Project";
import projects from "../projects.json";

fetch("https://api.github.com/users/KroLuna/repos")
  .then((res) => res.json())
  .then((json) => console.log(json));

export const Projects = () => {
  return projects.projects.map((project) => {
    return (
      <Project
        key={project.id}
        photo={project.image}
        name={project.name}
        tags={project.tags}
      />
    );
  });
};
