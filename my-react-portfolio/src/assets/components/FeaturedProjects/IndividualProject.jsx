import {useState, useEffect} from "react";
import { ProjectWrapper } from "./ProjectWrapper";

export const IndividualProject = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const URL = 'https://api.github.com/users/trista1987/repos'

    useEffect (() => {
        setLoading(true)
        const fetchData = async () =>{
            try {
                const res = await fetch(URL)
                if (!res.ok){
                  throw new Error('Error fetching data')
                }
                const data = await res.json()
                const projects = await data.filter(project =>
                  project.topics.includes("portfolio")
                )
                projects.sort((a,b)=> new Date(b.created_at) - new Date(a.created_at)) 

                
                setProjects(projects)
                console.log(projects.topics)
            } catch (error) {
                console.error ('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()

        const intervalID = setInterval(fetchData, 5000)
  
        return () => {
          clearInterval(intervalID)
        }
      }, [])

      return(
        <>
          {error && setError}
          <div className="project-container">
            {loading ? (<p>Loading...</p>) : <div className="project-wrapper">
                {projects.map(project => {
                    return(
                    <ProjectWrapper 
                    key={project.id} 
                    projectName={project.name}
                    topics={project.topics}
                    codeLink={project.html_url}
                    demoLink={project.homepage}
                    projectIntro={project.description}/>)
                })}</div>}
          </div>
        </>
      )
    }
