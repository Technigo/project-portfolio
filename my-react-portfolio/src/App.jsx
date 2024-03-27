import { Intro } from "./components/intro/Intro";
import { Articles } from "./components/blog/Articles";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";
import { Tech } from "./components/tech/Tech";

export const App = () => {
  return (
    <div>
      <Intro />
      <Tech />
      <Projects />
      <Articles />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};
