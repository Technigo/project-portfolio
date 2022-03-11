import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Thoughts from "./components/Thoughts";
import Skills from './components/Skills'
import More from './components/More'
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Tech />
      <Projects />
      <Thoughts />
      <Skills />
      <More />
      <Footer />
    </>
  );
}

export default App;
