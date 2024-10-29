import Hero from "./components/layout/Hero";
import TechWords from "./components/layout/TechWords";
import Projects from "./components/layout/Projects";
import SkillLists from "./components/layout/SkillLists";
import Articles from "./components/layout/Articles";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <Hero />
        <TechWords />
        <Projects />
        <SkillLists />
        <Articles />
      </main>
      <Footer />
    </>
  );
}

export default App;
