import "./App.css";
import { Header } from "./components/Header"
import { ImagesComponent } from "./components/Image";
import { Bio } from "./components/Bio";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Tech } from "./components/Tech";
import { Skills } from "./components/Skills";
import { MyWords } from "./components/MyWords";
import { LetsTalk } from "./components/LetsTalk";


const App = () => {
  return (
    <>
      <Header />
      <ImagesComponent />
      <Bio />
      <FeaturedProjects />
      <Tech />
      <Skills />
      <MyWords />
      <LetsTalk />
    </>
  );
};

export default App;
