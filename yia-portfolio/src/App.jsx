import { Homescreen } from "./assets/sections/Homescreen.jsx";
import { Tech } from "./assets/sections/Tech.jsx";
import { FeaturedProject } from "./assets/sections/FeaturedProject.jsx";
import "./App.css";

export const App = () => {
  return (
    <>
      <Homescreen />
      <Tech />
      <FeaturedProject />
    </>
  );
};
