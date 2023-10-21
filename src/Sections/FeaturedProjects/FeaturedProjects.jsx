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
            const response = await fetch(RepoAPI);

            if (!response.ok) {
                throw new Error("Response was not ok");
            }
            const rawData = await response.json();
            setProjectData(rawData);
        } catch (error) {
            setError(error);
            console.error(error);
        }
    };

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
    );
};
