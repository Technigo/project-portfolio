import { useState, useEffect } from "react"
import { CardImage } from "../../ui/CardImage/CardImage"
import { ProjectButton } from "../../ui/ProjectButton/ProjectButton"
import { HeaderThree } from "../../ui/Typography/Typography"
import "./ProjectCard.css"
import repoImages from "../../../src/projects.json"

export const ProjectCard = () => {
  const [projects, setProjects] = useState([])
  const [repos, setRepos] = useState([])

  useEffect(() => {

    const fetchProjects = async () => {
      const response = await fetch("../../../src/projects.json")
      const projectData = await response.json()
      setProjects(projectData)
    }

    fetchProjects()
  }, [])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/gittebe/repos")
        if (!response.ok) {
          throw new Error("Network response was not ok" + response.statusText);
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
      }
    };
    fetchRepos()
  }, [])

  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className="project-card" >
          <CardImage cardImage={project.cardImage} alt={project.alt} />
          <div className="project-title">
            <HeaderThree>{project.header}</HeaderThree>
          </div>
          <div className="button-container">
            <ProjectButton label="Live demo" background="primary"></ProjectButton>
            <ProjectButton label="View Code" background="neutral"></ProjectButton>
          </div>
          <div className="github-repos">
            <h4>GitHub Repositories:</h4>
            <ul>
              {repos.map((repo) => {
                const repoImage = repoImages.find((img) => img.repoName === repo.name);
                return (
                  <li key={repo.id}>
                    <CardImage cardImage={repoImage?.imageUrl} alt={repo.name} />
                    {repo.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}