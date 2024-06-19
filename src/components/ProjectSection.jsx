import React from "react";
import "./ProjectSection.css";
import { Heading } from "./Heading";
import { ProjectCard } from "./ProjectCard";

export const ProjectSection = ({ repositories, repoImages }) => {
  return (
    <div className="repositories-container">
      <Heading text="Featured Projects" />
      {repositories.map((repo) => {
        const repoImage = repoImages.find((img) => img.repoName === repo.name);
        const imageUrl = repoImage ? repoImage.imageUrl : "";
        return <ProjectCard key={repo.id} repo={repo} imageUrl={imageUrl} />;
      })}
    </div>
  );
};
