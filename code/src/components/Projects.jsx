import React, { useEffect, useState } from "react";

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const apiUrl = "https://api.github.com/users/lisawh0/repos";

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setRepos(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="projects">
            <h2>Github Repositories</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
