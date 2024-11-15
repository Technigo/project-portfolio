import { H1, H3 } from "../../ui/Typography/Typography";
import { Gallery } from "../GallerySection/Gallery";
import { Bio } from "../BioSection/Bio";
import "./Header.css";

export const Header = () => {
  return (
  <div className="header"> 
    <section className="header-container">
      <div className="header-section">
        <H3> Hi there, I’m</H3>
        <H1>Fanny Henriques</H1>
        <H3>
          Creative Front-End Developer with a background in social science and social work
        </H3>
      </div>
    </section>
    <Gallery/>
    <Bio/>
  </div>
  );
};