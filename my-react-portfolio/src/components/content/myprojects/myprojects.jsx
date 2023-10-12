import { useState, useEffect } from "react"
//import {style} from './myprojects.module.css'

export const MyProjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/mirelcac/repos')
            .then((response) => response.json())
            .then((data) => {
                setProjects(data)
                console.log(data)
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [])

    return (
        <div>
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