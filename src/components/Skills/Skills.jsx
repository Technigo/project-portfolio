import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-div" style={{ backgroundColor: "var(--lilac)"}}>
      <h1>Skills</h1>
      <div className="skills-boxes">
      <div className="code">
      <h2 id="skills-title" className="code-title">Code</h2>
        <p>Test</p> 
        <p>Test</p>  
        <p>Test</p> 
      </div>
      <div className="toolbox">
      <h2 id="skills-title" className="toolbox-title">Toolbox</h2>
        <p>Test</p> 
        <p>Test</p>  
        <p>Test</p> 
      </div>
      <div className="upcoming">
      <h2 id="skills-title" className="upcoming-title">Upcoming</h2>
        <p>Test</p> 
        <p>Test</p>  
        <p>Test</p> 
      </div>
      <div className="more">
      <h2 id="skills-title" className="more-title">More</h2>
        <p>Test</p> 
        <p>Test</p>  
        <p>Test</p> 
      </div>
      </div>
    </div>
  );
};