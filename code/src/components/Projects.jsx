import React from "react";
import ViewGithubBtn from "./ViewGithubBtn";
import LiveDemoBtn from "./LiveDemoBtn";
import projectsData from "../path/to/projects.json"; // Use the correct relative path


const Projects = () => {
    const projects = projectsData.projects; // Access the projects array from the imported JSON data

    return (
        <div className="projects">
            <h1>Featured Projects</h1>
            {projects.map((project, index) => (
                <div key={index} className="project-child">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ViewGithubBtn />
                    </a>
                    <a href={project.netlify} target="_blank" rel="noopener noreferrer">
                        <LiveDemoBtn />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Projects;
