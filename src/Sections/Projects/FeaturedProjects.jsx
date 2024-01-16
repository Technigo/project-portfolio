import "./projects.css";
import { useEffect, useState } from "react";
import { MainHeading } from "../../ReusableComponents/Typography/MainHeading";
import { ProjectCard } from "./ProjectCard";

const token = import.meta.env.GH_TOKEN;
const API = "https://api.github.com/users/LauraLyckholm/repos";

// Component for the featured projects section. Data is fetched here from the Github API and the structure of the section is set up. 
export const FeaturedProjects = () => {
    // Initializing projectData and error as empty arrays
    const [projectData, setProjectData] = useState([]);
    const [error, setError] = useState(null);

    // Function to fetch projects from the GitHub API.
    const fetchProjects = async () => {
        try {
            const response = await fetch(API, {
                headers: {
                    "Authorization": `${token}`,
                }
            });

            if (!response.ok) {
                // Handle error, show an error-message in validation p-tag if something goes wrong.
                throw new Error("Response was not ok");
            }

            const rawData = await response.json();
            setProjectData(rawData);
        } catch (error) {
            setError(error);
            console.error(error); // Log the error to the console
        }
    }

    // Handles the fetch from above
    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <section className="projects-section">
            {/* Shows mainheading, and then IF something goes wrong, it displays an error message, otherwise the cards are shown. */}
            <MainHeading className={"featured-projects-heading"} text={"Featured Projects"} />
            {error ? (
                <p className="error-message">An error occurred: {error.message}</p>
            ) : (
                <ProjectCard repositories={projectData} />
            )}

        </section>
    )
}
