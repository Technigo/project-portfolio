import Intro from "./sections/Intro";
import Tech from "./sections/Tech";
import FeatureProjects from "./sections/FeatureProjects";

const App = () => {
  return (
    <div className="app">
      <Intro />
      <Tech />
      <FeatureProjects />
    </div>
  );
};

export default App;
