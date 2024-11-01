import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import skillsData from "./skills.json";
import ProjectBox from "./components/ProjectBox";
import projectsData from "./projects.json";

console.log(projectsData);

const App = () => {

      

  return (
    <>
      <Header />
      <Skills skillsData={skillsData} />
      <section className="project-box-grid">
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
      </section>
    </>
  )
}

export default App;
