import { Intro } from "./components/intro/Intro";
import { Articles } from "./components/blog/Articles";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";
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
