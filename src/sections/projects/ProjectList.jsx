import "./projects.css";
import React, { useEffect, useState } from 'react';
import { ProjectCard } from './ProjectCard';

const API = "https://api.github.com/users/mariateresepettersson/repos";

//Component to fetch data from API
export const Project = () => {
    const [gitData, setGitData] = useState([]);
    const [error, setError] = useState(null);

    //function to fetch the API data
    const fetchProjetcs = async () =>{
        try {
            const response = await fetch (API);

            if (!response.ok) {
                throw new Error("Problem fethcing API data");
            }

            const rawData =await response.json();
            setGitData(rawData);
        }   catch (error) {
                setError(error);
                console.error(error);
        }
    }

    //Handle fetch
    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <section className="project-list">
 
 <MainHeading className={"featured-projects-heading"} text={"Featured Projects"} />
            {error ? (
                <p className="error-message">An error occurred: {error.message}</p>
            ) : (
                <ProjectCard repositories={projectData} />
            )}
        </section>
    );
}
