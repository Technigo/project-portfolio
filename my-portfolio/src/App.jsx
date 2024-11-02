import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import skillsData from "./skills.json";
import ProjectBox from "./components/ProjectBox";
import projectsData from "./projects.json";
import ArticleBox from "./components/ArticleBox";

console.log(projectsData);

const App = () => {

      

  return (
    <>
      <Header />
      <Skills skillsData={skillsData} />
      {/* projects */}
      {<section className="projects-section">
        <h2>Featured Projects</h2>
        <article className="project-box-grid">
          {projectsData.projects.map((project, index) => (
            <ProjectBox
            key={index}
            title={project.name}
            description={project.description}
            image={project.image}
            demoUrl={project.netlify}
            codeUrl={project.github}
            />
          ))}
        </article>
      </section>}
      {/* articles */}
      <section className="projects-section">
        <h2>Articles</h2>
        <article className="project-box-grid">
        {projectsData.projects.map((art, i) => (
            <ArticleBox
            key={i}
            title={art.name}
            description={art.description}
            image={art.image}
            buttonUrl={art.buttonUrl}
            />
        ))}
        </article>
      </section>
    </>
  )
}

export default App;
