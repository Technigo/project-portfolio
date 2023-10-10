import React, { useEffect, useState } from "react";

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const apiUrl = "https://api.github.com/users/lisawh0/repos";

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // Extract relevant information from the API response
                const projectData = data.map((repo) => ({
                    id: repo.id,
                    name: repo.name,
                    description: repo.description,
                    url: repo.html_url,
                }));
                setRepos(projectData);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="projects">
            <h2>Github Repositories</h2>

            {repos.map((project) => (
                <li key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a>
                </li>
            ))}

        </div>
    );
};

export default Projects;
