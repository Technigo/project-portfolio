import React from "react";
import ProjectTag from "./ProjectTag";

const OtherProjectsCard = ({ project }) => {
  const projectTags = project.tags.split(",").reverse();

  return (
    <div>
      <a href={project.github_href} target="_blank" rel="noreferrer">
        <p className="fs-normal fw-normal">
          <span className="color-font color-font underline-desktop fw-bold">
            {project.name}{" "}
          </span>
          <br className="desktop-hidden" />
          <span className="color-black underline-desktop">
            {project.short_description}{" "}
          </span>
          <span
            className="color-font fw-bold underline-desktop"
            aria-hidden="true"
          >
            &#62;&#62;
          </span>
        </p>
      </a>
      <div>
        {projectTags.map((tag) => {
          return <ProjectTag key={tag} tag={tag} />;
        })}
      </div>
    </div>
  );
};

export default OtherProjectsCard;
