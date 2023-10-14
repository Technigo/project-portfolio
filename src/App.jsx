import { useState } from "react";
import { Profile } from "./scenes/Profile";
import { Projects } from "./scenes/Projects";
import { Tech } from "./scenes/Tech";
import { Articles } from "./scenes/Articles";
import { Skills } from "./scenes/Skills";
import { Contact } from "./scenes/Contact";

export const App = () => {
  return (
    <main className="main">
      <Profile />
      <div className="page-wrapper">
        <Tech />
        <Projects />
        <Articles />
      </div>
      <Skills />
      <Contact />
    </main>
  );
};
