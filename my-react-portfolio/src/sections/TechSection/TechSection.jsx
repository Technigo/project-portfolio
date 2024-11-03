import "./TechSection.css"; 
// import SectionTitle from '../../ui/SectionTitle';



const TechSection = ({ title, techList }) => {
  return (
    <section className="tech-section">
     <h2 color="#ffffff">{title}</h2>
      <div className="tech-content">
      <p>{techList.join(', ')}</p>
      </div>
    </section>
  );
};

export default TechSection;
