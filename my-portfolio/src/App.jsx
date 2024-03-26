// import { useState } from "react";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";
import { Words } from "./components/Words";
import { Skills } from "./components/Skills";
import { Talk } from "./components/Talk";
import { Footer } from "./components/Footer";
import "./App.css";

export const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Profile />
        <Tech />
        <Projects />
        <Words />
        <Skills />
        <Talk />
        <Footer />
      </div>
    </>
  );
};
