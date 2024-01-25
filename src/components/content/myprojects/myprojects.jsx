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
                    // Find the project in your JSON data that matches the GitHub project URL
                    const additionalData = myProjectsData.projects.find(
                        p => p.github === githubProject.html_url
                    );

                    if (additionalData) {
                        // If additionalData is found in JSON, use its name and other details
                        return {
                            ...githubProject,
                            ...additionalData,
                            name: additionalData.name, // Use the name from JSON data
                        };
                    } else {
                        // If no additionalData is found, just return the GitHub project data
                        return githubProject;
                    }
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
                                {/* Project Image */}
                                <div className={style.projectPicContainer}>
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className={style.projectPic}
                                    />
                                </div>
                                {/* Project Text Content */}
                                <div>
                                    <div className={style.eachProjectTextBox}>
                                        <SubHeader className={style.h2} subHeading={project.name} />
                                        <p className={style.pDescription}>{project.description}</p>
                                    </div>
                                    {/* Project Links */}
                                    <div className={style.projectLinks}>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <img src="/images/github-icon.svg" alt="GitHub" /> {/* Update the file name as needed */}
                                        </a>
                                        {project.netlify && (
                                            <a href={project.netlify} target="_blank" rel="noopener noreferrer">
                                                <img src="/images/netlify-icon.svg" alt="Netlify" /> {/* Update the file name as needed */}
                                            </a>
                                        )}
                                    </div>
                                    <div className={style.tags}>
                                        {project.tags?.map((tag, index) => (
                                            <span key={index} className={style.tag}>{tag}</span>
                                        ))}
                                    </div>
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
