import React from 'react'
import { Button } from './Button'
import { Tag } from './tag/Tag'
import "./projectCard.css"
export const ProjectCard = ({name, description, gitLink, homepage, text}) => {
  return (
    
    <div className="project-card">
        <img className="image.jpg" src=""/>
        <div className="project-card-info">
        <h2 className="project-card-heading">{name} {text}</h2>
        <p className="project-card-text">{description}</p>

        <div className="project-card-tags"> 
            <Tag text={"JavaScript"}/>
            <Tag text={"HTML"}/>
        </div>

        <div className="project-card-buttons">
         <Button text={"Live demo"} hoverColor={"blue"}/>
         <Button text={"View the code"} hoverColor={"pink"}/>
        </div>
        </div>
    </div>
  )
}