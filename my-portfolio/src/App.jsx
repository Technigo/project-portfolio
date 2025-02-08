import React from "react";
import "./App.css";

import { Introduction } from "./Components/Introduction";
import { Tech } from "./Components/Tech";
import { Skills } from "./Components/Skills";
import { Marquee } from "./Components/Marquee";





function App() {
  return (
    <div>
      <Introduction />
      <Tech />
      <Skills />
      <Marquee />


    </div>
  );
}

export default App;

