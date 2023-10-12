import "./featuredprojects.css";
import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard.jsx";


export const FeaturedProjects = () => {
    const [repos, setRepos] = useState([])

    const REPOSAPI = "https://api.github.com/users/jennylarsen/repos"

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(REPOSAPI);
                if (!response.ok) {
                    throw new Error("Network response was not ok" + response.statusText)
                }
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.error(
                    "There has been a problem with your fetch operation:", error
                );
            }
        }
        fetchRepos();
    }, [])

    return (
        <section className="featuredprojects-section">
        <h1 className="h1-featuredprojects">Featured Projects</h1>
        <ProjectCard repos={repos}/>
        </section>
    )
}
