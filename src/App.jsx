import "./App.css";
import { Introduction } from "./Sections/Header/Introduction.jsx";
import { ImageComponent } from "./ReusableComponents/ImageElements/ImageComponent";
import { Tech } from "./Sections/Tech/Tech.jsx";
import { FeaturedProjects } from "./Sections/Projects/FeaturedProjects";
import { Articles } from "./Sections/Articles/Articles";
import { Skills } from "./Sections/Skills/Skills";
import { Footer } from "./Sections/Footer/Footer";

export const App = () => {

  return (
    <main>
      <Introduction />
      <ImageComponent sectionClassName={"arrow-divider"} elementClassName={"image"} link={"/assets/arrow.svg"} ImageAltText={"Follow arrow down"} />
      <Tech />
      <FeaturedProjects />
      <Articles />
      <Skills />
      <Footer />
    </main>
  )
}