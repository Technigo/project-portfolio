import Hero from "./components/sections/hero/Hero";
import { TextSection } from "./components/sections/text-section/TextSection";
import { CardSection } from "./components/sections/card-section/CardSection";
import { Footer } from "./components/sections/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <TextSection category="skills" />
      <CardSection category="project-card" />
      <TextSection category="tech" />
      <CardSection category="article-card" />
      <Footer />
    </div>
  );
};

export default App;
