import "./App.css";
import HeroSection from "./sections/HeroSection";
import { ArticleSection } from "./sections/ArticleSection";
import { ProjectSection } from "./sections/ProjectSection";
import  TechSection  from "./sections/TechSection"; 
import SkillsSection from "./sections/SkillsSection";
import ConnectSection from "./sections/ConnectSection";

const App = () => {
  const techList = [
    "HTML", "CSS", "Flexbox", "JavaScript", "ES6", "JSX", "React",
    "React Hooks", "Node.js", "Mongo DB", "Web Accessibility",
    "APIs", "mob-programming", "pair-programming", "GitHub"
  ];

  const skillsCategories = [
    {
      name: "Code",
      color: "#e74c3c", // Red
      skills: ["HTML5", "CSS3", "JavaScript ES6", "React", "Styled Components", "GitHub"],
    },
    {
      name: "Toolbox",
      color: "#3498db", // Blue
      skills: ["Atom", "Postman", "Adobe Photoshop", "Adobe Illustrator", "Figma", "Keynote", "Slack"],
    },
    {
      name: "Upcoming",
      color: "#2ecc71", // Green
      skills: ["Node.js"],
    },
    {
      name: "More",
      color: "#f1c40f", // Yellow
      skills: ["Design Lead", "Branding", "Strategy", "Process design", "Concept development", "Agile methodology", "Hyper Island toolbox"],
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sara-svensson',
      icon: './assets/linkedin-icon.png' // Replace with actual path
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sara-svensson',
      icon: './assets/github-icon.png' // Replace with actual path
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sara-svensson',
      icon: './assets/twitter-icon.png' // Replace with actual path
    }
  ];

  return (
    <main>
      <HeroSection
        name="Sara Svensson"
        title="Frontend Developer"
        description="Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field."
        imageSrc="my-react-portfolio/src/assets/Cholpon.png" 
      />
      <h1>My portfolio</h1>
      <TechSection title="Tech" techList={techList} /> 
      <ArticleSection />
      <ProjectSection /> 
      <ArticleSection />    
      <SkillsSection title="Skills" categories={skillsCategories} />
      <ConnectSection
        name="Sara Svensson"
        phone="+46(0)763 12 33 45"
        email="sara.svensson@mail.com"
        socialLinks={socialLinks}
      />
      </main>
  );
};

export default App;
