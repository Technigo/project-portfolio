import { ProjectCard } from '../ProjectCard/ProjectCard'
import './projectSection.css'
import { useState, useEffect } from 'react'
export const ProjectsSection = () => {
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/vittoriamatteoli/repos')
      .then((resp) => resp.json())
      .then((data) => {
        const sortedList = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        )

        setProjectList(sortedList)
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className="projectsContainer">
      <h1 className="projectSectionTitle">Featured Projects</h1>
      <ProjectCard projectList={projectList} />
    </div>
  )
}
