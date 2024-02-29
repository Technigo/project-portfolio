import "./featuredprojects.css";
import { useEffect, useState } from "react";
import { MainHeading } from "../../ReusableComp/Typo/MainHeading";
import { ProjectCard } from "./ProjectCard";

const RepoAPI = "https://api.github.com/users/jennylarsen/repos";

export const FeaturedProjects = () => {
    const [projectData, setProjectData] = useState([]);
    const [error, setError] = useState(null);

    const fetchProjects = async () => {
        try {
                        // Send a request to the GitHub Repositories API
            const response = await fetch(RepoAPI);

            if (!response.ok) {
                                // Handle non-successful responses with an error
                throw new Error("Response was not ok");
            }
                        // Parse the response data into JSON format
            const rawData = await response.json();

                        // Update the projectData state with the fetched data
            setProjectData(rawData);

        } catch (error) {
                        // Handle errors by setting the error state and logging the error
            setError(error);
            console.error(error);
        }
    };

    // Use the useEffect hook to fetch project data when the component mounts
    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <section className="projects-section">
            {/* Render the main heading for featured projects */}
            <MainHeading className={"featured-projects-heading"} text={"Featured Projects"} />
            {/* Conditionally render an error message or the ProjectCard component with the project data */}
            {error ? (
                <p className="error-message">An error occurred: {error.message}</p>
            ) : (
                <ProjectCard repositories={projectData} />
            )}
        </section>
    );
};
