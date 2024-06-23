
//import "./Skills.css";

export const Skills = () => {

  const codeSkills = ["HTML5", "CSS3", "JavaScript ES6", "React", "Ruby", "Node.js", "MongoDB", "Github", "Web Accessibility", "API:s", "Tailwind", "Styled Components", "Flexbox", "Grids"];
  const toolboxSkills = [
    "VS Code", "Atom", "Postman", "Figma", "Adobe Photoshop", "Adobe Illustrator",
    "Adobe Indesign", "Adobe XD", "Sketch", "Affinity Designer", "Keynote", "Office 365",
    "Slack", "Notion", "Jira", "Confluence", "Mural"
  ];
  const upcomingSkills = ["Typescript", "Svelte", "Flutter", "Next.js"];
  const moreSkills = [
    "Concept Development", "Art Direction", "UX/UI", "Agile Methodology",
    "Scrum Master", "Product Owner", "Digital Producer", "Workshop facilitator",
    "Design Sprints", "Design Thinking", "Project Management", "Team Lead"
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="code container">
          <h3>Code</h3>
          {codeSkills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
        <div className="toolbox container">
          <h3>Toolbox</h3>
          {toolboxSkills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
        <div className="upcoming container">
          <h3>Upcoming</h3>
          {upcomingSkills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
        <div className="more container">
          <h3>More</h3>
          {moreSkills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
