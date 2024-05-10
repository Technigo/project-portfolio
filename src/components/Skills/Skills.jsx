import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-div" style={{ backgroundColor: "var(--lilac)"}}>
      <h1>Skills</h1>
      <div className="skills-boxes">
      <div className="code">
      <h3 id="skills-title" className="code-title">Code</h3>
        <p>Test</p> 
        <p>Test</p>  
        <p>Test</p> 
      </div>
      <div className="toolbox">
      <h3 id="skills-title" className="toolbox-title">Toolbox</h3>
        <p>Test</p> 
        <p>Test</p>  
        <p>Test</p> 
      </div>
      <div className="upcoming">
      <h3 id="skills-title" className="upcoming-title">Upcoming</h3>
        <p>Test</p> 
        <p>Test</p>  
        <p>Test</p> 
      </div>
      <div className="more">
      <h3 id="skills-title" className="more-title">More</h3>
        <p>Test</p> 
        <p>Test</p>  
        <p>Test</p> 
      </div>
      </div>
    </div>
  );
};