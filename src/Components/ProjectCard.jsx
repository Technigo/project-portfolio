import React from 'react'
import {MainHeading} from './typography/mainHeading/MainHeading'
import {SubHeading} from './typography/subHeading/SubHeading'
import { Button } from './Button'
import { Tag } from './tag/Tag'
import "./projectCard.css"

export const ProjectCard = ({projects}) => {
  const originalProjectsArray = projects
  console.log(originalProjectsArray)
  const namesToFilter = ["Happy-Thoughts", "Chatbot", "Survey", "Music-Releases", "Guess-Who"]
  const filteredProjects = projects.filter((project) => namesToFilter.includes(project.name)) //filtering the projects I want to display in portfolio
  console.log(filteredProjects)

  return (
    
    <>
    <section className="project-wrapper">
      <MainHeading className="projects-h2"text={"Featured Projects"}/>
      {filteredProjects.map((project)=> {
         {console.log(project)}
        return (
          <div className="project-card"> 
          <img className="project-card-img"src="https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg"/>
         
       
          <div className="project-card-info">
            <SubHeading text={project.name}/>
        {/* <h2 className="project-card-heading">{project.name}</h2> */}
        <p className="project-card-text">{project.description}</p>

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
      })}
        
    </section>
    </>
  )
}