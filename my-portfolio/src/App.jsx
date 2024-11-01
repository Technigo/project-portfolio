import React from "react";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import skillsData from "./skills.json";
/* import { demoUrl, codeUrl } from "./projects.json"; */
import ProjectBox from "./components/ProjectBox";



const App = () => {

  return (
    <>
      <Header />
      <Skills skillsData={skillsData} />
      <ProjectBox 
        title={title}
        description={description}
        image={image}
        demoUrl={projects.netlify}
        codeUrl={projects.github}
      />
    </>
  )
}

export default App;
