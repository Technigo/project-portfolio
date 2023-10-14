import React, {useState}from 'react'
import { HeadingH1 } from '../typography/headingH1/HeadingH1'
import { HeadingH3 } from '../typography/headingH3/HeadingH3'
import { NormalText } from '../typography/normalText/NormalText'
import { ProjectImg } from '../images/projectImg'
import { Button } from '../button/Button'
import { Tag } from '../tag/Tag'

import "./projectCard.css"

export const ProjectCard = ({projects}) => {
  console.log(projects)
  // const [description, setDescription] = useState("")
  // const [homepage, setHomepage] = useState("")
  // const [gitLink, setGitLink] = useState("")
  
  const namesToFilter = ["Happy-Thoughts", "Chatbot", "Survey", "Music-Releases", "Guess-Who"] //Array including the projects I want to show in portfolio
  const filteredProjects = projects.filter((project) => namesToFilter.includes(project.name)) //Filtering the projects I want to display in portfolio

  
  return (
    
    <>
    <section className="project-wrapper">
      <HeadingH1 className="project-h1"text={"Featured Projects"}/>

      {filteredProjects.map((project)=> {
         
        return (
          <div className="project-card" key={project.id}> 
            <ProjectImg />

            <div className="project-card-info">
              <HeadingH3 className={"project-h3"}text={project.name}/>

              <NormalText className="project-card-text" text={project.description}/>

                <div className="project-card-tags"> 
                    <Tag topics={project.topics}/>
                </div>

              <div className="project-card-buttons">
              <Button text={"Live demo"} hoverColor={"blue"} src={'assets/icons/globe.png'} link={project.homepage}/>
              <Button text={"View the code"} hoverColor={"pink"} src={'assets/icons/github.png'} link={project.html_url}/>
           
            </div>
            </div> 

            

           </div>
          
     
        )
      })}
        
    </section>
    </>
  )
}