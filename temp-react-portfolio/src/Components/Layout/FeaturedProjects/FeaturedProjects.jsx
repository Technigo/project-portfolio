import style from './FeaturedProjects.module.css';
import { SectionHeader } from '../../UI/SectionHeader/SectionHeader.jsx';
import { Photos } from '../../UI/Photos/Photos.jsx';
import { projectData as data } from "../../../Statics/projectData.js";

export const FeaturedProjects = () => {

    return (
        <div className={style.outer_containerWrapper}>
            <div className={style.wrapper_projects}>

                <SectionHeader
                    heading="FeaturedProjects"
                    className={style.projectsHeader}
                />

                {data.map((project) => (
                    <div key={project.repoName} className={style.projectContainer}>

                        <img src={project.imagePath} alt={project.displayName} className={style.projectImage} />
                        <div class="textContainer">
                            <h2 className={style.displayName}>{project.displayName}</h2>

                            <p className={style.text}>{project.text}</p>

                            <ul className={style.skillsList}>
                                {project.skills.map(skill => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>

                            <div className={style.iconContainer}>
                                <a className={style[`${project.className}Git`]} href={project.gitUrl} target="_blank" rel="noopener noreferrer">
                                    <Photos selectedMode="ViewCode" />
                                </a>

                                <a className={style[`${project.className}Live`]} href={project.netlifyUrl} target="_blank" rel="noopener noreferrer">
                                    <Photos selectedMode="Live" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}