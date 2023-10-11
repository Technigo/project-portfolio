import "./projects.css";
import { useEffect, useState } from "react";
import { MainHeading } from "../../ReusableComponents/Typography/MainHeading";
import { ProjectCard } from "./ProjectCard";

const API = "https://api.github.com/users/LauraLyckholm/repos";

export const FeaturedProjects = () => {
    // Initialize projectData and error as empty arrays
    const [projectData, setProjectData] = useState([]);
    const [error, setError] = useState(null);

    // Function to fetch projects from the GitHub API.
    const fetchProjects = async () => {
        try {
            const response = await fetch(API);

            if (!response.ok) {
                // Handle error, show an error-message in validation p-tag
                throw new Error("Response was not ok");
            }

            const rawData = await response.json();
            // Destructuring the properties in the response, so that I only get the ones I need
            const processedData = rawData.map(({ name, id, description, topics }) => ({
                name,
                id,
                description,
                topics,
            }));

            setProjectData(processedData);
        } catch (error) {
            setError(error);

        }
    }

    // Gets the fetch from fetchProjects.js
    useEffect(() => {
        fetchProjects();
    }, []);

    console.log(error);

    return (
        <section className="projects-section">
            <MainHeading className={"featured-projects-heading"} text={"Featured Projects"} />
            <ProjectCard repositories={projectData} />
        </section>
    )
}
