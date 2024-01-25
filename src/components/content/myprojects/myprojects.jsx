//NOT DONE:
//Picture
//Remove bulletpoints
//Change project Names
//icons to github and netlify
//link to netlify
//Change descriptions
//Tags

import style from "./myprojects.module.css"
import { useState, useEffect } from "react"
import { MainHeader } from "../../reusable/mainheader/mainheader"
import { SubHeader } from "../../reusable/subheader/subheader"
import myProjectsData from "../../../../myprojects.json"

export const MyProjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/mirelcac/repos')
            .then((response) => response.json())
            .then((githubData) => {
                const mergedProjects = githubData.map((githubProject) => {
                    // Find the project in your JSON data that matches the GitHub project
                    const additionalData = myProjectsData.projects.find(
                        p => p.github === githubProject.html_url
                    );

                    // Merge GitHub data with data from your JSON file
                    return {
                        ...githubProject,
                        ...additionalData,
                        // Override the name with the one from your JSON file, if available
                        name: additionalData?.name || githubProject.name,
                    };
                });
                setProjects(mergedProjects);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className={style.myProjectsBox}>
            <div className={style.projectsWrapper}>
                <MainHeader className={style.h1} mainHeading="Featured Projects" />
                <ul className={style.projectsList}>
                    {projects && projects.length > 0 ? ( // Check if projects is an array and has elements
                        projects.map((project) => (
                            <li className={style.eachProject} key={project.id}>
                                <div className={style.eachProjectTextBox}>
                                    <SubHeader className={style.h2} subHeading={project.name} />
                                    <p className={style.pDescription}>{project.description}</p>
                                </div>
                                <img
                                    className={style.projectPic}
                                    src={project.image}
                                    alt={project.name}
                                />
                                <div className={style.projectLinks}>
                                    <a className={style.gitButton} href={project.github} target="_blank" rel="noopener noreferrer">
                                        View the Code
                                    </a>
                                    {project.netlify && (
                                        <a className={style.netButton} href={project.netlify} target="_blank" rel="noopener noreferrer">
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                                <div className={style.tagContainer}>
                                    {project.tags?.map((tag, index) => (
                                        <span key={index} className={style.tag}>{tag}</span>
                                    ))}
                                </div>
                            </li>
                        ))
                    ) : (
                        <li>No projects to display.</li> // Display a message or loading indicator if no projects
                    )}
                </ul>
            </div>
        </div>
    );
};
