import React, { useState } from 'react';
import './Skills.css';

function Skills() {
  const [skillsList] = useState([
    'React',
    'Node.js',
    'JavaScript',
    'HTML',
    'CSS',
    'JSX',
    'APIs',
    'Flexbox',
    'GitHub',
    'Zustand',
    'Mongoose',
    'Mongo',
    'SQL',
    'XML'
  ]);

  const toolbox = [
    'Figma',
    'Figjam',
    'Notion',
    'Postman',
    'Wordpress',
    'Netlify',
    'Render',
    'Mongo DB Atlas'
  ];

  const more = [
    'Project manager',
    'Web Accessibility',
    'Information security/GDPR',
    'Pair Programming',
    'Mob Programming',
    'Consultancy work',
    'Agile methodology',
    'DiSC certification',
    'Chief editor',
    'Records management',
    'E-archiving',
    'Communication skills',
  ];

  return (
    <div className="skills">
      <h2 className="skills-header">Skills</h2>
      <div className="skills-columns">
        <div className="skills-column">
          <h3 className="code-header">Code</h3>
          <ul>
            {skillsList.map((item) => (
              <li key={item} className="skills-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
  
        <div className="skills-column">
          <h3 className="toolbox-header">Toolbox</h3>
          <ul>
            {toolbox.map((item) => (
              <li key={item} className="skills-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
  
        <div className="skills-column">
          <h3 className="more-header">More</h3>
          <ul>
            {more.map((item) => (
              <li key={item} className="skills-item">
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

