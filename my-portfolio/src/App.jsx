import { FeaturedProjects } from "./sections/FeaturedProjects.jsx";
import { Introduction } from "./sections/Introduction.jsx";
import { Skills } from "./sections/Skills.jsx";
import { Tech } from "./sections/Tech.jsx";

export const App = () => {
  return (
    <div className="outer-container">
      <Introduction />
      <Tech />
      <FeaturedProjects />
      <Skills />
    </div>
  );
};
