import React, { useState } from 'react';

function Skills() {
  const [skillsList] = useState([
    'React',
    'Node.js',
    'JavaScript',
    'HTML',
    'CSS',
    'Pair Programming',
    'Mob Programming',
    'JSX',
    'APIs',
    'Flexbox',
    'Web Accessibility',
    'GitHub',
  ]);

  const toolbox = [
    'Figma',
    'Figjam',
    'Notion',
    'Postman',
    'Wordpress',
  ];

  const more = [
    'DiSC certification',
    'Project manager',
    'Chief editor',
    'Records management',
    'E-archiving',
    'Consultancy work',
    'Agile methodology',
    'Communication skills',
  ];

  return (
    <div className="skills">
      <h2 className="skills-header">Skills</h2>
      <div className="skills-columns">
        <div className="skills-column">
          <h3 className="code-header">Code</h3>
          <ul>
            {skillsList.map((item, index) => (
              <li key={index} className="skills-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
  
        <div className="skills-column">
          <h3 className="toolbox-header">Toolbox</h3>
          <ul>
            {toolbox.map((item, index) => (
              <li key={index} className="skills-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
  
        <div className="skills-column">
          <h3 className="more-header">More</h3>
          <ul>
            {more.map((item, index) => (
              <li key={index} className="skills-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;

