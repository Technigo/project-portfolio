import "../components/headline.css";
import "../components/tagComponent.css";
import "./featuredProjectsPage.css";
import { useState, useEffect } from "react";
import { FeaturedProjects } from "../components/FeaturedProjectsComponent/FeaturedProjects";
import { Headline } from "../components/Headline";

export const FeatureProjectsPage = () => {
    const headerText = "Featured Projects";
    const githubUsername = 'VAstrom';
    const specificRepositories = ['project-happy-thoughts-vite', 'project-survey-vite', 'project-music-releases-vite', 'project-weather-app', 'project-guess-who', 'project-chatbot', 'project-news-site'];  // Add the specific repositories you want to fetch

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch specific repositories
                /*Explanation:
                I use Promise.all() to wait for all promises in specificReposPromises array to settle (either resolve or reject).
                This ensures that we wait for all repositories to be fetched.
                */
                const specificReposPromises = specificRepositories.map(async (repo) => {
                    const response = await fetch(`https://api.github.com/repos/${githubUsername}/${repo}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch repository ${repo}`);
                    }
                    return await response.json();
                });

                const specificReposData = await Promise.all(specificReposPromises);
                // the spread operator is used to create a new array with a shallow copy of all the elements from the specificReposData array. Essentially, it's creating a new array with the same data as specificReposData.
                setRepos([...specificReposData]);
                console.log('data is:', repos);
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };
       
        fetchData();    
    }, []);

    return (
        <section className="featured-page-wrapper">
            <Headline className="big-heading blue-h1" headerText={headerText} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {repos.length > 0 && <FeaturedProjects repos={repos} />}
        </section>
    );
};
