/* eslint-disable react/prop-types */
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-wrapper">
      <h1>Skills</h1>
      <div className="skills-grid">
        <div className="skills-column">
          <h3 className="code-heading">Code</h3>
          {/* Replace with your skills */}
          <p>JavaScript</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>React</p>
          <p>React Hooks</p>
          <p>Zustand</p>
          <p>Node.js</p>
          <p>API:s</p>
          <p>Vite</p>
          <p>Express</p>
          <p>MongoDB</p>
          <p>Mongoose</p>
          <p>Web accessibility</p>
        </div>
        <div className="skills-column">
          <h3 className="toolbox-heading">Toolbox</h3>
          {/* Replace with your tools */}
          <p>VSCode</p>
          <p>Github</p>
          <p>Render</p>
          <p>Lighthouse</p>
          <p>Postman</p>
          <p>Netlify</p>
          <p>Figma</p>
          <p>Notion</p>
          <p>Developer tools</p>
        </div>
        <div className="skills-column">
          <h3 className="upcoming-heading">Upcoming</h3>
          {/* Replace with your upcoming skills */}
          <p>Python</p>
          <p>TypeScript</p>
          <p>Redux</p>
          <p>WebAssembly</p>
          <p>Streamlit</p>
          <p>Microsoft Azure</p>
          <p>WordPress</p>
          <p>ServiceNow</p>
        </div>
        <div className="skills-column">
          <h3 className="more-heading">More</h3>
          {/* Replace with additional skills or info */}
          <p>Adobe Ilustrator</p>
          <p>Adobe Indesign</p>
          <p>Adobe Photoshop</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};
