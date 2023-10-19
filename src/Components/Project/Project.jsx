/* eslint-disable react/prop-types */
import { Tags } from "../Tags/Tags"
import { Buttons } from "../Buttons/Buttons"
import "./project.css"

export const Project = ({ project }) => {
    const { name, image, description, tags, github, netlify } = project
    return (
        <>
            <img className="project-pic" src={image} alt={name} />

            <h4>{name}</h4>
            <p>{description}</p>

            <div className="tag-container">
                {tags.map(item => <Tags key={item} tag={item} />)}
            </div>

            <div className="button-container">
                <Buttons url={netlify} text="Live demo" hovColor="netlify" />
                <Buttons url={github} text="View the code" hovColor="github" />
            </div>
        </>
    )
}