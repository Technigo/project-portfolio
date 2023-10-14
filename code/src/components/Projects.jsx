import React, { useEffect, useState } from "react";
import ViewGithubBtn from "./ViewGithubBtn";
import LiveDemoBtn from "./LiveDemoBtn";
import projectsData from "../data/projects.json"; // Adjust the path as needed


const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Set the projects data from the imported JSON
        setProjects(projectsData.projects);
    }, []);

    return (
        <div className="projects">
            <h1>Featured Projects</h1>
            {projects.map((project, index) => (
                <div key={index} className="project-child">
                    <h3>{project.name}</h3>
                    <img src={project.image} alt={project.name} />
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
