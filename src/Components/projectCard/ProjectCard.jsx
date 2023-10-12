import React from 'react'
import {HeadingH1} from '../typography/headingH1/HeadingH1'
import {HeadingH3} from '../typography/headingH3/HeadingH3'
import {HeadingH2} from '../typography/headingH2/HeadingH2'
import { RectangleMobileImg } from '../images/RectangleMobileImg'
import { Button } from '../button/Button'
import { Tag } from '../tag/Tag'

import "./projectCard.css"

export const ProjectCard = ({projects}) => {
  
  const namesToFilter = ["Happy-Thoughts", "Chatbot", "Survey", "Music-Releases", "Guess-Who"]
  const filteredProjects = projects.filter((project) => namesToFilter.includes(project.name)) //filtering the projects I want to display in portfolio
  

  return (
    
    <>
    <section className="project-wrapper">
      <HeadingH1 className="projects"text={"Featured Projects"}/>

      {filteredProjects.map((project)=> {
         
        return (
          <div className="project-card" key={project.id}> 
          <RectangleMobileImg/>

          <div className="project-card-info">
            <HeadingH3 text={project.name}/>
            <p className="project-card-text">{project.description}</p>

              <div className="project-card-tags"> 
                  <Tag topics={project.topics}/>
              </div>
          </div> 

          <div className="project-card-buttons">
            <Button text={"Live demo"} hoverColor={"blue"} src={'assets/icons/globe.png'} link={project.homepage}/>
            <Button text={"View the code"} hoverColor={"pink"} src={'assets/icons/github.png'} link={project.html_url}/>
          </div>
        
        
        </div>
          
     
        )
      })}
        
    </section>
    </>
  )
}