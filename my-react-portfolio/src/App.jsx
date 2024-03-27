import "./App.css";
import { FeaturedProjects } from "./components/FeaturedProjects";
import Introduction from "./components/Introduction";
import Tech from "./components/Tech";

function App() {
  return (
    <>
      <Introduction />
      <Tech />
      <FeaturedProjects />
    </>
  );
}

export default App;
