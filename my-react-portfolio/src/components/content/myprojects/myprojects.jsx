import { useState, useEffect } from "react"
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
            <SubHeader
                subHeading="Hi, I'm Mirela Cacan"
                className={style.h1}
            />
            {/*subHeader importet from subHeader component for easer acces to styling of similar headers on the page*/}
            <ul className="myProjects">
                {projects.map((project) => (
                    <li className="eachProject" key={project.id}>
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}