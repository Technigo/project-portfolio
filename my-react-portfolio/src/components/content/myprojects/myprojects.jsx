//NOT DONE:
//Picture
//Remove bulletpoints
//Change project Names
//icons to github and netlify
//link to netlify
//Change descriptions
//Tags

import { useState, useEffect } from "react"
import { MainHeader } from "../../reusable/mainheader/mainheader"
import { SubHeader } from "../../reusable/subheader/subheader"
import style from './myprojects.module.css'

export const MyProjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/mirelcac/repos')
            .then((response) => response.json())
            .then((data) => {
                setProjects(data)
                console.log(data)
            })
            .catch((error) => console.error('Error fetching data:', error))
    }, [])

    return (
        <div className={style.myProjectsBox}>
            <div className={style.projectsWrapper}>
                <MainHeader
                    className={style.h1}
                    mainHeading="Featured Projects"
                />
                {/* SubHeader imported from SubHeader component for easier access to styling of similar headers on the page */}
                <ul>
                    {projects.map((project) => (
                        <li className={style.eachProject} key={project.id}>
                            <div className={style.eachProjectTextBox}>
                                <SubHeader
                                    subHeading={project.name}
                                >
                                    {/* Change name of the project? */}
                                </SubHeader>
                                <p className={style.pDescription}>{project.description}</p> {/* Project description */}
                            </div>
                            {project.homepage && (
                                <img
                                    className={style.projectPic}
                                    src="/your-custom-image-url.jpg" // Having this code even if I have not figured out this yet
                                    alt="ProjectPicture"
                                />
                            )}
                            <a className={style.gitButton} href={project.html_url}>View the Code</a> {/* Link to GitHub */}
                            {project.homepage &&
                                <a className={style.netButton} href={project.homepage}>Netlify</a>} {/*Having this code even if I have not figured out this yet */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
