import "./skills.css";

export const Skills = () => {
  return (
    <section className="flex skills-section">
      <div className="flex skills-container">
        <h1 className="white">Skills</h1>
        <div className="flex skills-wrapper">
          <h4 className="style white" id="bkgr-pink">
            Code
          </h4>
          <p className="white skills-text">
            HTML5 CSS3 Javascript ES6 React Styled Components GitHub
          </p>
        </div>
        <div className="flex skills-wrapper">
          <h4 className="style white" id="bkgr-blue">
            Toolbox
          </h4>
          <p className="white skills-text">
            Atom Postman Adobe Photoshop Adobe Illustrator Figma Keynote Slack
          </p>
        </div>
        <div className="flex skills-wrapper">
          <h4 className="style white" id="bkgr-green">
            Upcoming
          </h4>
          <p className="white skills-text">Node.js</p>
        </div>
        <div className="flex skills-wrapper">
          <h4 className="style white" id="bkgr-yellow">
            More
          </h4>
          <p className="white skills-text">
            Design Lead Branding Strategy Process design Concept development
            Agile methodology Hyper Island toolbox
          </p>
        </div>
      </div>
    </section>
  );
};
