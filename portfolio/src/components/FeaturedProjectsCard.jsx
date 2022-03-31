import React from "react";
import ProjectTag from "./ProjectTag";
import weather from "../assets/arnold-francisca-unsplash.jpg"

// SRC FOR IMAGE FROM JSON NOT WORKING
// UNIQUE KEY FOR EACH PROJECT TAG

const FeaturedProjectsCard = ({project}) => {

    const projectTags = project.tags.split(',')

    return (
    <article className="roboto">
        <div className="project-image-group">
            <img alt={project.img_alt} className="project-image" src={weather} />
            <div className="project-image-overlay"></div>
            <h3 className="project-image-text-overlay montserrat fw-bold" aria-hidden="true">{project.cover_name}</h3>
        </div>
        <div className="project-text-group">
            <h3 className="fs-normal fw-bold color-font">{project.name}</h3>
            <p className="fs-normal fw-normal">{project.short_description}</p>
            <a className="fs-normal fw-normal underline" href={project.github_href} target="_blank" rel="noreferrer">View it on Github here!</a>
            <p></p>
            <a className="fs-normal fw-normal underline" href={project.live_href} target="_blank" rel="noreferrer">View it live here!</a>
        </div>
        <div>
        {projectTags.map((tag) => {
            return (
                <ProjectTag tag={tag} />
            )
        })}
        </div>
    </article>
    )
}

export default FeaturedProjectsCard