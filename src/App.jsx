import "./App.css";
import { Introduction } from "./Sections/Header/Introduction.jsx";
import { FeaturedProjects } from "./Sections/Projects/FeaturedProjects";
import { Tech } from "./Sections/Tech/Tech.jsx";
import { FullWidthImage } from "./ReusableComponents/ImageElements/FullWidthImage";

export const App = () => {

  return (
    <main>
      <Introduction />
      <FullWidthImage className={"arrow-divider"} link={"/assets/arrow.svg"} ImageAltText={"Follow arrow down"} />
      <Tech />
      <FeaturedProjects />
    </main>
  )
}