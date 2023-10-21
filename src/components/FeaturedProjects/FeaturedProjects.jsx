import "./featuredprojects.css";
import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard.jsx";


export const FeaturedProjects = () => {
     // Define a state variable `repos` and a function `setRepos` to update it.
    const [repos, setRepos] = useState([])

     // Define the URL for the GitHub API to fetch user repositories.
    const REPOSAPI = "https://api.github.com/users/jennylarsen/repos"

    // Use the `useEffect` hook to perform side effects when the component mounts.
    useEffect(() => {
                // Define an asynchronous function to fetch repository data from the API.
        const fetchRepos = async () => {
            try {
                                // Make an HTTP request to the GitHub API.
                const response = await fetch(REPOSAPI);
                                // Check if the response is not okay (e.g., 404 or 500).
                if (!response.ok) {
                                // Throw an error with a message including the response status text.
                    throw new Error("Network response was not ok" + response.statusText)
                }

                // If the response is okay, parse it as JSON.
                const data = await response.json();
                // Update the `repos` state with the fetched data.
                setRepos(data);
            } catch (error) {
                // If there's an error during the fetch operation, log it to the console.
                console.error(
                    "There has been a problem with your fetch operation:", error
                );
            }
        }
                // Call the `fetchRepos` function to initiate the data fetching.
        fetchRepos();
    }, []) // The empty dependency array ensures this effect runs only on component mount.

    return (
        <section className="featuredprojects-section">
        <h1 className="h1-featuredprojects">Featured Projects</h1>
        <ProjectCard repos={repos}/>
        </section>
    )
}
