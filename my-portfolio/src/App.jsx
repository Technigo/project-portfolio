import "./App.css";
import Introduction from "./components/Introduction";
import Tech from "./components/Tech";
import FeaturedProjects from "./components/FeaturedProjects";
import LetsTalk from "./components/LetsTalk";

function App() {
  return (
    <div className="App-container">
      <Introduction />
      <FeaturedProjects />
      <Tech />
      <LetsTalk />
    </div>
  );
};

export default App;
