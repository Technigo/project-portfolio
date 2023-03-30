import React from "react"
import projectList from "../assets/projectList"
import '../styles/projects.css'

const Projects = () => {
    return (
<section className="featured">
      <h2 className="featured-header" id="featured-header">Featured projects</h2>
      {projectList.map((project) => {
        return (
    <div className="featured-wrapper" id="featuredWrapper">
    <article className="featured-article">
        <div className="article-image-wrapper">
        <img src={project.img} class="article-image" alt="{project.alt}" />
          </div>
          <div className="article-text">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          </div>
          <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="project-links-wrapper">
          <form action={project.demo} method="get" target="_blank">
              <button type="submit" className="view-demo-link">
                <img src="../img/Live-demo.svg" className="icon" alt="" />Live demo</button>
            </form>
            <form action={project.code} method="get" target="_blank">
              <button type="submit" className="view-code-link">
                <img src="../img/github-bl.svg" className="icon" alt="" />View the code
              </button>
            </form>
          </div>
        </article>
</div>
        )
      })}
      
      
      
     
    </section>
    )
}

export default Projects