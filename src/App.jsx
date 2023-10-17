import React from "react";
import "./App.css";

import { SecPresentation } from "./components2/sections/SecPresentation";
import { SecTech } from "./components2/sections/SecTech"
import { SecFeaturedProjects } from "./components2/sections/SecFeaturedProjects";
import { SecMywords } from "./components2/sections/SecMywords";
import { SecSkills } from "./components2/sections/SecSkills"
import { SecContact } from "./components2/sections/SecContact";
import { Footer } from "./components2/footer/Footer";

function App() {
  return (
    
      <div className="main-section">
        <SecPresentation />
        <SecTech />
        <SecFeaturedProjects />
        <SecMywords />
        <SecSkills />
        <SecContact />
        <Footer />
      </div>
    
  );
}

export default App;
