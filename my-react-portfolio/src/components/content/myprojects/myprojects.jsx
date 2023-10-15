import { useState, useEffect } from "react"
import { MainHeader } from "../../reusable/mainheader/mainheader"
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
                {/*subHeader imported from subHeader component for easer acces to styling of similar headers on the page*/}
                <ul>
                    {projects.map((project) => (
                        <li className={style.eachProject} key={project.id}>
                            <p>{project.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}