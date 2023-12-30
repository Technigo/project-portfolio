import { Introduction } from "./Components/Introduction/Introduction";
import { Tech } from "./Components/Tech/Tech";
import { FeaturedProjects } from "./Components/FeaturedProjects/FeaturedProjects";
// import { MyWords } from "./Components/MyWords/MyWords";
import { Skills } from "./Components/Skills/Skills";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="main-wrapper">
      <Introduction />
      <Tech />
      <FeaturedProjects />
      {/* <MyWords /> */}
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App; 
