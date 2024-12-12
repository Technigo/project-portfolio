import { Homescreen } from "./assets/sections/Homescreen/Homescreen.jsx";
import { Tech } from "./assets/sections/Tech/Tech.jsx";
import { FeaturedProject } from "./assets/sections/FeaturedProject/FeaturedProject.jsx";
import { Skills } from "./assets/sections/MySkills/Skills.jsx";
import { ContactMe } from "./assets/sections/ContactMe/ContactMe.jsx";
import { Footer } from "./assets/sections/Footer/Footer.jsx";
import "./App.css";

export const App = () => {
  return (
    <>
      <Homescreen />
      <Tech />
      <FeaturedProject />
      <Skills />
      <ContactMe />
      <Footer />
    </>
  );
};
