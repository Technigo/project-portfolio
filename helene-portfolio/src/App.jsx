import { useState, useEffect } from "react";

/* Components */
import ScrollClasses from "./components/common/ScrollClasses";
import Header from "./components/common/Header";
import Hero from "./components/layout/Hero";
import TechWords from "./components/layout/TechWords";
import Projects from "./components/layout/Projects";
import SkillLists from "./components/layout/SkillLists";
import Articles from "./components/layout/Articles";
import Footer from "./components/layout/Footer";

const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) return storedTheme;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

function App() {
  const [theme, setTheme] = useState(getPreferredTheme);

  // Update the data-theme attribute on the html element whenever the theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save user choice in local storage
  }, [theme]);

  return (
    <>
      <ScrollClasses />
      <Header theme={theme} onSetTheme={setTheme} />
      <main id="main">
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
