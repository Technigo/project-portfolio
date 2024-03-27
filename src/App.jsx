import Introduction from "./Sections/Introduction";
import Tech from "./Sections/Tech";
import FeaturedProjects from "./Sections/FeaturedProjects";
import MyWords from "./Sections/MyWords";
import Skills from "./Sections/Skills";
import Contact from "./Sections/Contact";

import "./index.css";

export const App = () => {
  return (
    <div className="body page-grid">
      <Introduction />
      <Tech />
      <FeaturedProjects className="projects" />
      <MyWords />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
