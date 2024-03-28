import { FeaturedProjects } from "./sections/FeaturedProjects.jsx";
import { Introduction } from "./sections/Introduction.jsx";
import { Tech } from "./sections/Tech.jsx";

export const App = () => {
  return (
    <div className="outer-container">
      <Introduction />
      <Tech />
      <FeaturedProjects />
    </div>
  );
};
