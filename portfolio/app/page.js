import Projects from './components/Projects/projects.jsx';
import Intro from './components/Intro/intro.jsx';
import Articles from './components/Articles/articles.jsx';
import Tech from './components/Tech/tech.jsx';
import Skills from './components/Skills/skills.jsx';
import LetsTalk from './components/LetsTalk/letsTalk.jsx';
export default function Home() {
  return (
    <>
      <Intro />
      <Tech />
      <Projects />
      <Articles />
      <Skills />
      <LetsTalk />
    </>
  );
}