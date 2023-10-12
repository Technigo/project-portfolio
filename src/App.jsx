import { Introduction } from "./Components/Introduction/Introduction";
import { Tech } from "./Components/Tech/Tech";
import { FeaturedProjects } from "./Components/FeaturedProjects/FeaturedProjects";
import { MyWords } from "./Components/MyWords/MyWords";
import { Skills } from "./Components/Skills/Skills";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="portfolio-container">
      <Introduction />
      <Tech />
      <FeaturedProjects />
      <div className="divider"></div>
      <MyWords />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
