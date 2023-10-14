import { useState, useEffect } from 'react';
import style from './FeaturedProjects.module.css';
import { SectionHeader } from '../../UI/SectionHeader/SectionHeader.jsx';
import { SmallerHeader } from '../../UI/SmallerHeader/SmallerHeader.jsx';

export const FeaturedProjects = () => {
    const [myGitProjects, setmyGitProjects] = useState([])

    const featuredProjects = [
        { repoName: 'project-chatbot', displayName: 'Plant Chatbot' },
        { repoName: 'EmE-weather-app', displayName: 'Weather App' },
        { repoName: 'project-guess-who-elbine', displayName: 'Game: Guess the Taylor Swift song' }
    ];
    //Makes it possible for me to choose the name of the project I display, and what projects to display. 

    useEffect(() => {
        fetch('https://api.github.com/users/elbines/repos')
            .then((response) => response.json())
            .then((data) => {
                const filteredProjects = data.filter(project =>
                    featuredProjects.some(itemFromGit => itemFromGit.repoName === project.name));
                // .some() will return true if any element in the array satisfies the provided testing function:(itemFromGit => itemFromGit.repoName === project.name)
                setmyGitProjects(filteredProjects)
                console.log(data)
            })
            .catch((error) => console.error('Error fetching data:', error))
    }, [])

    return (
        <div className={style.wrapper_projects}>
            <SectionHeader
                heading="FeaturedProjects"
                className={style.projectsHeader}
            />
            <SmallerHeader
                smallHeading="test"
                className={style.smallerHeadingProject1}
            />
            <div>
                <ul>
                    {myGitProjects.map((project) => {
                        const foundProject = featuredProjects.find(itemFromGit => itemFromGit.repoName === project.name);
                        //.find() will return the first element in the array that satisfies the provided testing function, or undefined if none found. If I for example write: repoName: 'weather-app' instead of repoName: repoName: 'EmE-weather-app', and will be logged:
                        if (!foundProject) {
                            console.log('Project not found for:', project.name);
                        }
                        return (
                            <li key={project.id}>
                                <p>{foundProject ? foundProject.displayName : 'Project not found'}</p>

                                {foundProject && (
                                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                                )}
                                {/* View on GitHub: add a Wiev the code button instead */}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}
