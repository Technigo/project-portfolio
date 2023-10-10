import React from 'react'
import { Button } from './Button'
import "./projectCard.css"
export const ProjectCard = () => {
  return (
    
    <div className="project-card">
        <img className="image.jpg" alt="pumpkins"/>
        <div className="project-card-info">
        <h2 className="project-card-heading">Heading</h2>
        <p className="project-card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ipsam dicta, reprehenderit quibusdam nostrum dolorem commodi quos minus rerum voluptatum soluta necessitatibus vel distinctio nisi quas consequatur optio, repudiandae quia.</p>
        <div className="project-card-tags"> {/*Tag will be mounted as component instead of divs*/}
        <div className="tag">Tag 1</div>
        <div className="tag">Tag 2</div>
        <div className="tag">Tag 3</div>
        <div className="tag">Tag 4</div>
        </div>
        <div className="project-card-buttons">
        {/*Buttons will be mounted as components instead */}
        <Button text={"Live demo"} hoverColor={"pink"}/>
        <Button/>
        <button>Live demo</button> 
        <button>View the code</button>
        </div>
        </div>
    </div>
  )
}