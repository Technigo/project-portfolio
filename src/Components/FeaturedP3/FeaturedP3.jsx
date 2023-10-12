import React, { useState, useEffect } from 'react'

import { ProjectCard } from './ProjectCard/ProjectCard.jsx'


export const FeaturedP3 = () => {

    const [repos, setRepos] = useState([])

    const REPOSAPI = "https://api.github.com/users/IdahCollin/repos"

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(REPOSAPI);
                if (!response.ok) {
                    throw new Error("Network response was not ok" + response.statusText);
                }
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.error(
                    "There has been a problem with your fetch operation:",
                    error
                );
            }
        };

        fetchRepos();
    }, []);

    return (
        <div>
            <ProjectCard repos={repos} />
        </div>
    )
}
