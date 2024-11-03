import './TechSection.css'; 

const TechSection = ({ title, techList }) => {
  return (
    <section className="tech-section">
      <div className="tech-content">
        <h2 className="tech-title">{title}</h2>
        <p className="tech-list">{techList.join(', ')}</p>
      </div>
    </section>
  );
};

export default TechSection;
