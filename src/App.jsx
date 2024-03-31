import "./App.css";

import { Introduction } from "./components/1.Introduction/Introduction.jsx";
import { Tech } from "./components/2.Tech/Tech.jsx";
import { ProjectContainer } from "./components/3.Projects/ProjectContainer.jsx";
import { ArticlesContainer } from "./components/4.Articles/ArticlesContainer.jsx";
import { Skills } from "./components/5.Skills/Skills.jsx";

export const App = () => {
  return (
    <div>
      <Introduction />
      <Tech />
      <ProjectContainer />
      <ArticlesContainer />
      <Skills />
    </div>
  );
};

export default App;
