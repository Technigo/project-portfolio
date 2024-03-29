// import {useState, useEffect} from "react";
import data from '../../../../projects.json';
import { PageTopic } from '../smallComps/PageTopic';
import { ProjectWrapper } from './ProjectWrapper';
import "./projects.css"


export const FeaturedProjects = () => {
    const projects = data.projects

    return (
      <>
        <section className="project-wrapper">
            <div className='topicDiv'>
                <PageTopic pageTopic={"Featured Projects"} className={"project"} />
            </div>
          
          <div className="detail-container">
            {projects.map((project) => (
              <ProjectWrapper
                key={project.id}
                projectImg={project.image}
                alt={project.alt}
                projectName={project.name}
                description={project.about}
                projectTags={project.tags.join(" ")}
                demoLink={project.netlify}
                codeLink={project.github}
              />
            ))}
          </div>
        </section>
      </>
    );
    }


    // const [projects, setProjects] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)

    // const URL = 'https://api.github.com/users/trista1987/repos'

    // useEffect (() => {
    //     setLoading(true)
    //     const fetchData = async () =>{
    //         try {
    //             const res = await fetch(URL)
    //             const data = await res.json()
    //             setProjects(data)
    //             console.log(data)
    //         } catch (error) {
    //             console.error ('Error fetching data:', error)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     fetchData()

    //     const intervalID = setInterval(fetchData, 5000)
  
    //     return () => {
    //       clearInterval(intervalID)
    //     }
    //   }, [])

    //   return(
    //     <>
    //       {error && setError}
    //       <div className="project-container">
    //         {loading ? (<p>Loading...</p>) : <div className="project-wrapper">
    //             {projects.map(project => {
    //                 return(<p key={project.id}>{project.name}</p>)
    //             })}</div>}
    //       </div>
    //     </>
    //   )

      
    
