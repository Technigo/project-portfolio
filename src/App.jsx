import { Introduction } from "./components/Introduction/Introduction.jsx";
import { Tech } from "./components/Tech/Tech.jsx";
import { FeaturedProjects } from "./components/Featured Projects/FeaturedProjects.jsx";
import { MyWords } from "./components/My Words/MyWords.jsx";
import { Skills } from "./components/Skills/Skills.jsx";
import { ContactInfo } from "./components/ContactInfo/ContactInfo.jsx";
import "./App.css";

export const App = () => {
  return (
    <div className="main-wrapper">
      <Introduction />
      <Tech />
      <FeaturedProjects />
      <MyWords />
      <Skills />
      <ContactInfo />
    </div>
  );
};
