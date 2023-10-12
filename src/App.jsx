import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Headline } from "./Components.jsx/Headlines";
import { Presentation } from "./Components.jsx/Presentation";
import { Contact } from "./Components.jsx/Contact";
import { Footer } from "./Components.jsx/Footer";

function App() {
  return (
    <>
      <Presentation />
      <Headline />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
