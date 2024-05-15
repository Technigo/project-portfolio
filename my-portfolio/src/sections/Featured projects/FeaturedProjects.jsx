import PropTypes from "prop-types";
import { useState } from "react";

import { Button } from "../../components/FormElements/Button";
import { MainHeading } from "../../components/TextElements/MainHeading";
import { ProjectCard } from "./ProjectCard";

import "./FeaturedProjects.css";

export const FeaturedProjects = ({
  projects,
  showAllProjects,
  toggleShowAllProjects,
}) => {
  // Filter favorized projects
  const favorizedProjects = projects.filter(
    (project) => project.stargazers_count === 1
  );

  // Filter other projects
  const otherProjects = projects.filter(
    (project) => project.stargazers_count !== 1
  );

  return (
    <section className="projects-container">
      <MainHeading className={"projects-heading"} text={"Featured Projects"} />

      {/* Render favorized projects */}
      {favorizedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

      {/* Render other projects only if showAllProjects is true */}
      {showAllProjects &&
        otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      {/* Toggle-button */}
      <div className="toggle-btn">
        <Button
          className={"see-btn"}
          btnText={showAllProjects ? "See less" : "See more"}
          onClick={toggleShowAllProjects}
        />
      </div>
    </section>
  );
};

// Prop type validation
FeaturedProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      stargazers_count: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  showAllProjects: PropTypes.bool.isRequired,
  toggleShowAllProjects: PropTypes.func.isRequired,
};
