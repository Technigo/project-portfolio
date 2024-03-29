import { Intro } from "./components/introduction/Intro";
import { Projects } from "./components/projects/Projects";
import { Articles } from "./components/blog/Articles";
import { Skills } from "./components/skills/Skills";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import "./App.css";

export const App = () => {
  return (
    <div>
      <Intro />
      <Projects />
      <Articles />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
