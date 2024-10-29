import data from "../../data/techstack.json";
import "./TechWords.css";

const TechWords = () => {
  return (
    <section className="tech-words">
      <div className="grid-container">
        <div className="col-12">
          <ul className="tech-words__list" aria-label="List of my tech skills">
            {data.techstack.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechWords;
