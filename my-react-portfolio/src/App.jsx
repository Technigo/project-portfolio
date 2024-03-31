import Intro from "./sections/Intro";
import Tech from "./sections/Tech";
import FeatureProjects from "./sections/FeatureProjects";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div className="app">
      <Intro />
      <Tech />
      <FeatureProjects />
      <Skills />
    </div>
  );
};

export default App;
