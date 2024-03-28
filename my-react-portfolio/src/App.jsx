import "./App.css";
import { FeaturedProjects } from "./components/FeaturedProjects";
import Introduction from "./components/Introduction";
import Tech from "./components/Tech";

const App = () => {
  return (
    <>
      <Introduction />
      <Tech />
      <FeaturedProjects />
    </>
  );
};

export default App;
