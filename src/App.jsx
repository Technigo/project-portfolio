import { ProjectList } from "./Components/FeaturedProjects/ProjectList";
import { Intro } from "./Components/Intro/Intro";
import { Tech } from "./Components/Tech/Tech";
import { Article } from "./Components/Articles/Article";
import { Skills } from "./Components/Skills/Skills";
import { Contact } from "./Components/Contact/Contact";

import "./App.css";

export const App = () => {
  return (
    <>
      <Intro />
      <Tech />
      <ProjectList />
      <Article />
      <Skills />
      <Contact />
    </>
  );
};
