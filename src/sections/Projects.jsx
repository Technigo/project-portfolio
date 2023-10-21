// import { useState, useEffect } from "react";
import { Project } from "../components/Project";
import { Button } from "../components/Button";
import projects from "../projects.json";
import "./Projects.css";

fetch("https://api.github.com/users/KroLuna/repos")
  .then((res) => res.json())
  .then((json) => console.log(json));

export const Projects = () => {
  return projects.projects.map((project) => {
    return (
      <>
        <Project
          key={projects.id}
          photo={project.image}
          name={project.name}
          tags={project.tags}
        />
        <Button />
      </>
    );
  });
};
