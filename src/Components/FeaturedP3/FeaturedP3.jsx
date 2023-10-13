//Imports
import React, { useState, useEffect } from 'react'

import { ProjectCard } from './ProjectCard/ProjectCard.jsx'

//Export and initialize state using the useState hook
export const FeaturedP3 = () => {

    const [repos, setRepos] = useState([]) //Will update the repos

    const REPOSAPI = "https://api.github.com/users/IdahCollin/repos" //Defining a constant for the GitHub API URL

    //useEffect hook to fetch data
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

    //Renders component ProjectCard
    return (
        <div>
            <ProjectCard repos={repos} />
        </div>
    )
}
