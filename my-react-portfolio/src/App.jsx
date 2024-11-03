import "./App.css";
import HeroSection from "./sections/HeroSection/HeroSection";
import { ArticleSection } from "./sections/ArticleSection";
import { ProjectSection } from "./sections/ProjectSection";
import TechSection from "./sections/TechSection/TechSection"; 
import SkillsSection from "./sections/SkillsSection/SkillsSection";
import ConnectSection from "./sections/ConnectSection/ConnectSection";
import techList from "./data/TechList"; // Import techList from data
import skillsCategories from "./data/SkillsCategories"; // Import skillsCategories from data
import socialLinks from "./data/SocialLinks"; // Import socialLinks from data
import cholponImage from "./assets/Cholpon.png";


const App = () => {
  return (
    <main>
      <HeroSection
        name="Cholpon Abdyrakhman"
        title="Frontend Developer"
        description="Cholpon is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field."
        imageSrc={cholponImage}
      />
      <TechSection title="Tech" techList={techList} /> 
      <ProjectSection /> 
      <ArticleSection />    
      <SkillsSection title="Skills" categories={skillsCategories} />
      <ConnectSection
        name="Cholpon Abdyrakhman"
        phone="+46 79 101 5158"
        email="cholpoun@gmail.com"
        socialLinks={socialLinks}
      />
    </main>
  );
};

export default App;
