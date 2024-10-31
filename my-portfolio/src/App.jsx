import React from "react";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import skillsData from "./skills.json";
import ProjectBox from "./components/ProjectBox";

console.log(skillsData);

const App = () => {

  return (
    <>
      <Header />
      <Skills skillsData={skillsData} />
      {/* <ProjectBox /> */}
    </>
  )
}

export default App;
