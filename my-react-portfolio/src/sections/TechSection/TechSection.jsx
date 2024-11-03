import "./TechSection.css"; 
import SectionTitle from '../../ui/SectionTitle';



const TechSection = ({ title, techList }) => {
  return (
    <section className="tech-section">
     <SectionTitle color="#ffffff">{title}</SectionTitle>
      <div className="tech-content">
      <p>{techList.join(', ')}</p>
      </div>
    </section>
  );
};

export default TechSection;
