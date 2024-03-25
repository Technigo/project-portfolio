import {useState, useEffect} from "react";

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
                const data = await res.json()
                setProjects(data)
                console.log(data)
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
                    return(<p key={project.id}>{project.name}</p>)
                })}</div>}
          </div>
        </>
      )
    }
