
import TopSection from './Components/topSection/topSection';
import ProjectsSection from './Components/projectSection/projectSection';
import TechSection from './Components/techSection/techSection';
import SkillsSection from './Components/skillsSection/skillsSection';
import MyWordsSection from './Components/myWordsSection/myWordsSection';
import ContactSection from './Components/contactSection/contactSection';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <TopSection />
      <ProjectsSection />
      <TechSection />
      <SkillsSection />
      <MyWordsSection />
      <ContactSection />
    </div>
  );
}

export default App;

