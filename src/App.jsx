import "./App.css";
import { FeaturedProjects } from "./components/FeaturedProjects";
import Introduction from "./components/Introduction";
import { LetsTalk } from "./components/LetsTalk";
import { Skills } from "./components/Skills";
import Tech from "./components/Tech";
import { TickerTape } from "./components/TickerTape";

const App = () => {
  return (
    <>
      <Introduction />
      <Tech />
      <FeaturedProjects />
      <Skills />
      <LetsTalk />
      {/* <TickerTape /> */}
    </>
  );
};

export default App;
