import "./App.css";
import Introduction from "./components/Introduction";
import Tech from "./components/Tech";
import Skills from "./components/Skills";
import FeaturedProjects from "./components/FeaturedProjects";
import LetsTalk from "./components/LetsTalk";
import MyWords from "./components/MyWords";

function App() {
  return (
    <div className="App">
      <Introduction />
      <FeaturedProjects />
      <Tech />
      <Skills />
      <MyWords />
      <LetsTalk />
    </div>
  );
};

export default App;
