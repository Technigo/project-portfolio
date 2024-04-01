import "./App.css";

import { Introduction } from "./components/1.Introduction/Introduction.jsx";
import { Tech } from "./components/2.Tech/Tech.jsx";
import { ProjectContainer } from "./components/3.Projects/ProjectContainer.jsx";
import { ArticlesContainer } from "./components/4.Articles/ArticlesContainer.jsx";
import { Skills } from "./components/5.Skills/Skills.jsx";
import { Contact } from "./components/6.Contact/Contact.jsx";
import { Footer } from "./components/7.Footer/Footer.jsx";

export const App = () => {
  return (
    <div className="main-container">
      <Introduction />
      <Tech />
      <ProjectContainer />
      <ArticlesContainer />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
