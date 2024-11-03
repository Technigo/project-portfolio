import "./App.css";
import HeroSection from "./sections/HeroSection";
import { ArticleSection } from "./sections/ArticleSection";
import { ProjectSection } from "./sections/ProjectSection";

const App = () => {
  return (
    <main>
      <HeroSection
        name="Sara Svensson"
        title="Frontend Developer"
        description="Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field."
        imageSrc="/path/to/image.jpg" // Replace with the correct path to the image
      />
      <h1>My portfolio</h1>
      <ArticleSection />
      <ProjectSection />
    </main>
  );
};

export default App;
