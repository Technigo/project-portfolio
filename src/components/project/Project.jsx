import React from "react";
import projectsData from "../../projects.json";
import { FaGithub } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import './Project.css'

export const Project = () => {
    return (
        <div className="projects-container">
            {projectsData.projects.map((project, index) => (
                <div key={index} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-content">
                        <h1 className="project-title">{project.title}</h1>
                        <p className="project-body">{project.body}</p>
                        <div className="project-tags">
                            {project.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="project-tag">{tag}</span>
                            ))}
                        </div>
                        <div className="project-buttons">
                            <button className="project-button">
                                <a href={project.netlify} target="_blank" rel="noopener noreferrer" className="project-link"><IoEarth /> Live demo</a>
                            </button>
                            <button className="project-button">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link"><FaGithub /> View code</a>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
