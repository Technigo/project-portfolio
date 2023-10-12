import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Presentation } from "./Components.jsx/Presentation";
import { Footer } from "./Components.jsx/Footer";

function App() {
  return (
    <>
      <Presentation />
      <Footer />
    </>
  );
}

export default App;
