import React from 'react'

export const ProjectCard = ({ name, image, description, tags, netlify, github }) => {
    return (
        <div>ProjectCard
            {image}
            {name}
            {description}
            {tags}
            {netlify}
            {github}
        </div>
    )
}
