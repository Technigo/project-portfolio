import "./TechSection.css";
// import SectionTitle from '../../ui/SectionTitle';

const TechSection = ({ title, techList }) => {
  return (
    <section className="tech-section">
      <div className="tech-title">
        <h2>{title}</h2>
      </div>
      <div className="tech-content">
        <p>{techList.join(', ')}</p>
      </div>
    </section>
  );
};

export default TechSection;
