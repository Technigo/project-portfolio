import React from "react";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import skillsData from "./skills.json";

console.log(skillsData);

const App = () => {

  return (
    <>
      <Header />
      <Skills skillsData={skillsData} />
    </>
  )
}

export default App;
