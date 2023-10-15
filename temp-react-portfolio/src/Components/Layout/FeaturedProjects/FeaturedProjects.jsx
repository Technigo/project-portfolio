import { useState, useEffect } from 'react';
import style from './FeaturedProjects.module.css';
import { SectionHeader } from '../../UI/SectionHeader/SectionHeader.jsx';
import { Photos } from '../../UI/Photos/Photos.jsx';

export const FeaturedProjects = () => {
    const [myGitProjects, setmyGitProjects] = useState([])

    const featuredProjects = [
        { repoName: 'project-happy-thoughts-elbine-vite', displayName: 'Happy Thoughts', netlifyUrl: 'https://happy-thoughts-elbine.netlify.app', className: style.HappyThoughts },

        { repoName: 'EmE-weather-app', displayName: 'Weather App', netlifyUrl: 'https://eme-weather-app.netlify.app/', className: style.WeatherApp },

        { repoName: 'project-guess-who-elbine', displayName: 'Game: Guess the song', netlifyUrl: 'https://guess-who-elbine.netlify.app/', className: style.GuessSong },

        { repoName: 'project-survey-vite-EMS', displayName: 'Pala Survey', netlifyUrl: 'https://pala-customer-survey.netlify.app', className: style.PalaSurvey },

        { repoName: 'project-music-releases-elbine', displayName: 'New music releases', netlifyUrl: 'https://app.netlify.com/sites/music-releases-by-elbine/overview', className: style.MusicRelease },
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
        <div className={style.outer_containerWrapper}>
            <div className={style.wrapper_projects}>
                <SectionHeader
                    heading="FeaturedProjects"
                    className={style.projectsHeader}
                />

                {myGitProjects.map((project) => {
                    const foundProject = featuredProjects.find(itemFromGit => itemFromGit.repoName === project.name);
                    //.find() will return the first element in the array that satisfies the provided testing function, or undefined if none found. If I for example write: repoName: 'weather-app' instead of repoName: repoName: 'EmE-weather-app', and will be logged:
                    if (!foundProject) {
                        console.log('Project not found for:', project.name);
                        return null; // Dette vil hindre at en tom div blir opprettet for prosjekter som ikke ble funnet
                    }
                    return (
                        <div key={project.id} className={foundProject.className}>

                            <p>{foundProject.displayName}</p>
                            <div className="buttonWrapper">
                                <a href={foundProject.netlifyUrl} target="_blank" rel="noopener noreferrer">
                                    <Photos selectedMode="Live" />
                                </a>
                                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                    <Photos selectedMode="ViewCode" />
                                </a>
                                {/* Display name of project, button to github and to git*/}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )


}
