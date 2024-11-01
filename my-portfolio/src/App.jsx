import React from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import Tech from "./components/Tech";
import Skills from "./components/Skills";
import FeaturedProjects from "./components/FeaturedProjects";
import LetsTalk from "./components/LetsTalk";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Introduction />
      <FeaturedProjects />
      <Tech />
      <Skills />
      <LetsTalk />
      <Footer />
      {/* Other components can go here */}
    </div>
  );
}

export default App;
