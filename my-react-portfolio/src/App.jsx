import Intro from "./sections/Intro";
import Tech from "./sections/Tech";
import FeatureProjects from "./sections/FeatureProjects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="app">
      <Intro />
      <Tech />
      <FeatureProjects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
