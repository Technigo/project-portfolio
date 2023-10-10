import React, {useState, useEffect} from 'react'

import { ProjectCard } from  '../ProjectCard'

export const SecFeaturedProjects = () => {
  const [projects, setProjects] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [homepage, setHomepage] = useState("")
  const [gitLink, setGitLink] = useState("")

  const API = "https://api.github.com/users/emmydieden/repos"

  const fetchProjects = async () => {
    try {
      const response = await fetch(API)

      if(!response.ok) {
        throw new Error ('Failed to fetch data')
      }

      const data = await response.json() //parse the response as JSON
      console.log([data])
      setProjects(data) //update the state with fetched data (putting it into array to get correct fetch)
      console.log(projects)
      console.log(projects[2])

    }catch (error) { 
      console.error('Error fetching data:', error)
    }
    

  }
  useEffect (() => {
    fetchProjects()
  }, [])

  const randomConst = "Hello World"
  return (
    <>
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} name={project.name} description={project.description} gitLink={project.html_url} homepage={project.homepage} text={randomConst}/>
      ))}
    
    </div>
      
  </>
  )
}
