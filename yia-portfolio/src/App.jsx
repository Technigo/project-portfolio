import { Homescreen } from "./assets/sections/Homescreen.jsx";
import { Tech } from "./assets/sections/Tech.jsx";
import { FeaturedProject } from "./assets/sections/FeaturedProject.jsx";
import { MyWords } from "./assets/sections/MyWords.jsx";
import { Skills } from "./assets/sections/Skills.jsx";
import { ContactMe } from "./assets/sections/ContactMe.jsx";
import "./App.css";

export const App = () => {
  return (
    <>
      <Homescreen />
      <Tech />
      <FeaturedProject />
      <MyWords />
      <Skills />
      <ContactMe />
    </>
  );
};
