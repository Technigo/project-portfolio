import "./App.css";
import { FeaturedProjects } from "./components/FeaturedProjects";
import Introduction from "./components/Introduction";
import { Skills } from "./components/Skills";
import Tech from "./components/Tech";

const App = () => {
  return (
    <>
      <Introduction />
      <Tech />
      <FeaturedProjects />
      <Skills />
    </>
  );
};

export default App;
