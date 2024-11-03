import "./TechSection.css"; 
import { SectionTitle } from '../../ui/Typography';

const TechSection = ({ title, techList }) => {
  return (
    <section className="tech-section">
      <SectionTitle>{title}</SectionTitle>
      <div className="tech-content">
        <ul>
          {techList.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechSection;
