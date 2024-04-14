import { Intro } from "./components/introduction/Intro";
import { Tech } from "./components/tech/Tech";
import { Projects } from "./components/projects/Projects";
import { Articles } from "./components/blog/Articles";
import { Skills } from "./components/skills/Skills";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import "./App.css";
import arrowImage from "/icons/Arrow.svg";

export const App = () => {
  return (
    <div>
      <Intro />
      <section className="arrow-container">
        <img
          src={arrowImage}
          alt="Animated Arrow"
          className="arrow"
        />
      </section>
      <Tech />
      <Projects />
      <Articles />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
