import { SectionHead } from "../../components/SectionHead";

export const Skills = () => {
  const headlineId = 5;

  return (
    <div className="skills-wrapper">
      <SectionHead headlineId={headlineId} />
      <div className="skill-details">
        <figure>
          <figcaption className="code">Code</figcaption>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Express</li>
          </ul>
        </figure>
        <figure>
          <figcaption className="toolbox">Toolbox</figcaption>
          <ul>
            <li>GitHub</li>
            <li>Postman</li>
            <li>Render</li>
            <li>Figma</li>
            <li>Slack</li>
            <li>Notion</li>
          </ul>
        </figure>
        <figure>
          <figcaption className="upcoming">Upcoming</figcaption>
          <ul>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Vue</li>
          </ul>
        </figure>
        <figure>
          <figcaption className="more">More</figcaption>
          <ul>
            <li>SEO</li>
            <li>Data Analytics</li>
            <li>Problem Solving</li>
            <li>Communications</li>
          </ul>
        </figure>
      </div>
    </div>
  );
};
