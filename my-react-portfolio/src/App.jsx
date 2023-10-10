import { Introduction } from "./Components/Introduction/Introduction";
import { Tech } from "./Components/Tech/Tech";
import { FeaturedProjects } from "./Components/FeaturedProjects/FeaturedProjects";
import { MyWords } from "./Components/MyWords/MyWords";
import "./App.css";

function App() {
  return (
    <div>
      <Introduction />
      <Tech />
      <FeaturedProjects />
      <div className="divider"></div>
      <MyWords />
    </div>
  );
}

export default App;
