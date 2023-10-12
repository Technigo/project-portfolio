import cat from "/images/flyingcat.png";
import "./styleComponents/tech.css";

export const Tech = () => {
  return (
    <div className="tech-container" aria-label="Tech Section">
      <img
        src={cat}
        className="flyingcat"
        alt="flyingcat image"
        aria-hidden="true"
      ></img>
      <div className="tech-title">
        <h1>Tech</h1>
      </div>
      <div className="tech-content" aria-label="Tech Content">
        <h3 className="tech-content-title">Frontend:</h3>
        <ul>
          <li>React: [Vite, React Router]</li>
          <li>Redux: [Redux Toolkit]</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>

        <h3 className="tech-content-title">Backend:</h3>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>C#</li>
          <li>Python</li>
        </ul>

        <h3 className="tech-content-title">Upcoming:</h3>
        <ul>
          <li>TypeScript</li>
          <li>Three.js</li>
          <li>UX/UI Design</li>
          <li>.Net</li>
        </ul>
      </div>
    </div>
  );
};
