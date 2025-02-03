import "./App.css";
import Introduction from "./components/Introduction";
import Tech from "./components/Tech";
import FeaturedProjects from "./components/FeaturedProjects";
import Skills from "./components/Skills.jsx";
import MyWords from "./components/MyWords.jsx";
import LetsTalk from "./components/LetsTalk";


function App() {
  return (
    <div className="App-container">
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
