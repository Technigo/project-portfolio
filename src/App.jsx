import { Introduction } from "./components/Introduction/Introduction.jsx";
import { Tech } from "./components/Tech/Tech.jsx";
import { FeaturedProjects } from "./components/Featured Projects/FeaturedProjects.jsx";
import { MyWords } from "./components/My Words/MyWords.jsx";
import { Skills } from "./components/Skills/Skills.jsx";
import { ContactInfo } from "./components/ContactInfo/ContactInfo.jsx";
import { TickerTape } from "./components/TickerTape/TickerTape.jsx";

export const App = () => {
  return (
    <div className="main-wrapper">
      <Introduction />
      <Tech />
      <div className="wavy-line-wrapper">
        <FeaturedProjects />
        <img
          src="/assets/Wavyline-Divider.svg"
          className="wavy-line"
          alt="A wavy line for decoration"
        />
        <MyWords />
      </div>
      <Skills />
      <ContactInfo />
      <TickerTape />
    </div>
  );
};
