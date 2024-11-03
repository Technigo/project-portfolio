import React from "react";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import skillsData from "./skills.json";
import techData from "./tech.json"
import ProjectBox from "./components/ProjectBox";
import projectsData from "./projects.json";
import ArticleBox from "./components/ArticleBox";
import TechStack from "./components/Tech";
import { H2 } from "./components/Typography"
import FooterContact from "./components/FooterContact"




const App = () => {


  return (
    <>
      <Header />
      <Skills skillsData={skillsData} />

      {/* projects */}
      <section className="projects-section">
        <H2>Featured Projects</H2>
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
      </section>

      <TechStack techData={techData} />

      {/* articles */}
      <section className="projects-section">
        <H2>Articles</H2>
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

      <FooterContact />
    </>
  )
}

export default App;
