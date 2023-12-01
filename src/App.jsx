import { Introduction } from "./Sections/Introduction";
import { Tech } from "./Sections/Tech";
import { Projects } from "./Sections/Projects";
import { MyWords } from "./Sections/MyWords";
import { Skills } from "./Sections/Skills";
import { Contact } from "./Sections/Contact";
import { Footer } from "./Sections/Footer";

import "./App.css";

const App = () => {
  
  return (
    <div className="main-wrapper">
      <Introduction />
      <Tech />
      <Projects />
      <MyWords />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;


