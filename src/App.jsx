import './App.css';
import { Articles } from './Sections/Articles/Articles';
import { FeaturedProjects } from './Sections/FeaturedProjects/FeaturedProjects';
import { Footer } from './Sections/Footer/Footer';
import { NameBanner } from './Sections/Footer/NameBanner';
import { Header } from './Sections/Header/Header';
import { Skills } from './Sections/Skills/Skills';
import { Tech } from './Sections/Tech/Tech';
import { ImageComponent } from './ReusableComp/ImageElements/ImageComp';

export const App = () => {
return (
    <>
    <Header />
    <ImageComponent
          sectionClassName={"arrow-divider"}
          elementClassName={"image"}
          imagePath={"Arrow (1).svg"}
          ImageAltText={"Follow arrow down"}
          tabIndex="1"
        />
    <Tech />
    <FeaturedProjects />
    <div className="wavy-line-wrapper"></div>
        <img
          src="/icons/Wavyline-Divider.svg"
          className="wavy-line"
          alt="A wavy line for decoration"
        />
    <Articles />
    <Skills />
    <Footer />
    <NameBanner />
    </>
  )

}

export default App