import "./App.css";
import { Introduction } from "./Sections/Header/Introduction.jsx";
import { ImageComponent } from "./ReusableComponents/ImageElements/ImageComponent";
import { FeaturedProjects } from "./Sections/Projects/FeaturedProjects";
import { Tech } from "./Sections/Tech/Tech.jsx";

export const App = () => {

  return (
    <main>
      <Introduction />
      <ImageComponent sectionClassName={"arrow-divider"} elementClassName={"image"} link={"/assets/arrow.svg"} ImageAltText={"Follow arrow down"} />
      <Tech />
      <FeaturedProjects />
    </main>
  )
}