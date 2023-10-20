import { ProjectList } from "./Components/FeaturedProjects/ProjectList";
import { Intro } from "./Components/Intro/Intro";
import { Tech } from "./Components/Tech/Tech";
import { MyWords } from "./Components/MyWords/MyWords";
import { Skills } from "./Components/Skills/Skills";
import { Contact } from "./Components/Contact/Contact";
import { TickerTape } from "./Components/TickerTape/TickerTape";

import "./App.css";

export const App = () => {
  return (
    <div className="big-wrapper">
      {/*<Intro />
      <Tech />*/}
      {/* <ProjectList /> */}
      <MyWords />
      {/* <Skills /> */}
      {/* <Contact /> */}
      {/* <TickerTape /> */}
    </div>
  );
};
