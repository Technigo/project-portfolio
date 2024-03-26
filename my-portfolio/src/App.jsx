// import { useState } from "react";
import { Profile } from "./components/Profile";
import { Tech } from "./components/Tech";
import { Projectlist } from "./components/Projectlist";
import { Words } from "./components/Words";
import { Skills } from "./components/Skills";
import { Talk } from "./components/Talk";
import { Footer } from "./components/Footer";
import "./App.css";

export const App = () => {
  return (
    <>
      <div className="App">
        <Profile />
        <Tech />
        <Projectlist />
        <Words />
        <Skills />
        <Talk />
        <Footer />
      </div>
    </>
  );
};
