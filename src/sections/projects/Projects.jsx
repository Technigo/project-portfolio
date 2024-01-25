import "./projects.css";
import { useEffect, useState } from 'react';
import { Heading } from '/src/components/typography/Heading.jsx';
import { ProjectCard } from './ProjectCard';

const API = "https://api.github.com/users/mariateresepettersson/repos?per_page=100"; //Added query-param to fetch all projects (100) becaus ethey were dissapearing even though they're public

//Component to fetch data from API
export const Projects = () => {
    const [gitData, setGitData] = useState([]);
    const [error, setError] = useState(null);

    //function to fetch the API data
    const fetchProjetcs = async () => {
        try {
            const response = await fetch(API);

            if (!response.ok) {
                throw new Error("Problem fethcing API data");
            }

            const rawData = await response.json();
            setGitData(rawData);
        } catch (error) {
            setError(error);
            console.error(error);
        }
    }

    //Handle fetch
    useEffect(() => {
        fetchProjetcs();
    }, []);

    return (
        <section className="projects-container">
            {/* Shows mainheading, and then IF something goes wrong, it displays an error message, otherwise the cards are shown. */}
            <Heading level={1} className={"projects-heading"} text={"Featured Projects"} />
            {error ? (
                <p className="error-message">An error occurred: {error.message}</p>
            ) : (
                <ProjectCard repositories={gitData} />
            )}
        </section>
    );
}
