import { useState, useEffect } from "react"
import Photo from "/src/components/Photo.jsx"
import Tag from "/src/components/Tag.jsx"
import Button from "/src/components/Button.jsx"
import projects from "/src/projects.json"
import { fetchRepos } from "/src/helpers/github/repos"
import "./projects.css"

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [isSmal, setIsSmal] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    fetchRepos().then((data) => setRepos(data))
    handleWindowSizeChange()
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])

  const handleWindowSizeChange = () => {
    setIsSmal(window.innerWidth >= 320 && window.innerWidth <= 371)
    setIsTablet(window.innerWidth >= 744 && window.innerWidth <= 1279)
    setIsDesktop(window.innerWidth > 1279)
  }

  return (
    <div className="page">
      <h1 style={{ color: "#0B24F5" }}>Featured Projects</h1>
      <ul className="project-list">
        {repos.map((repo) => {
          const project = projects.find((project) => project.repo === repo.name)
          if (!project) {
            return null
          }
          return (
            <li className="all-projects" key={repo.id}>
              <a
                className="photo"
                href={project.netlify}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="project photo"
              >
                <Photo
                  src={project.image}
                  color={"#0B24F5"}
                  width={
                    isSmal
                      ? "300px"
                      : isTablet
                      ? "200px"
                      : isDesktop
                      ? "280px"
                      : "350px"
                  }
                  height={isTablet ? "280px" : isDesktop ? "280px" : "200px"}
                  alt={repo.name}
                  url={project.netlify}
                />
              </a>
              <div>
                <div className="project-title">
                  <h4 style={{ color: "black " }}>{project.name}</h4>
                </div>
                <p style={{ color: "black" }}>{repo.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
                <div className="buttons">
                  <Button
                    text="Live demo"
                    icon="/img/live-button.png"
                    url={project.netlify}
                  />
                  <Button
                    text="View the code"
                    icon="/img/view-button.png"
                    url={repo.html_url}
                  />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
