import { useState, useEffect } from 'react';
import style from './FeaturedProjects.module.css';
import { SectionHeader } from '../../UI/SectionHeader/SectionHeader.jsx';
import { SmallerHeader } from '../../UI/SmallerHeader/SmallerHeader.jsx';

export const FeaturedProjects = () => {
    const [myProjects, setMyProjects] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/elbines/repos')
            .then((response) => response.json())
            .then((data) => {
                setMyProjects(data)
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
                    {myProjects.map((myProjects) => (
                        <li key={myProjects.id}>
                            <p>{myProjects.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}