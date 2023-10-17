import { useState, useEffect } from 'react';
import './projects.css';
import { ProjectCard } from './ProjectCard';
import repoData from './repo-data.json'; // Import the JSON file

export const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://api.github.com/users/mariateresepettersson/repos');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                // Access the 'projects' array within 'repoData'
                const desiredRepoNames = repoData.projects.map((project) => project.repoName);
                const filteredProjects = data.filter((project) =>
                    desiredRepoNames.includes(project.name)
                );

                // Sort the filtered projects by creation date (most recent first)
                filteredProjects.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

                // Match repositories with images based on the JSON data
                const projectsWithImages = filteredProjects.map((project) => ({
                    ...project,
                    imageUrl: repoData.projects.find((img) => img.repoName === project.name)?.imageUrl,
                }));

                setProjects(projectsWithImages);
                setLoading(false);
            } catch (err) {
                setError(err);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="project-list">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};
