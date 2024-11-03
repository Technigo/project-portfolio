import React, { useState } from 'react';
import './skills.css';
import Wave from '../wave/Wave';




export const Skills = () => {
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
    'Git',
    'GitHub',
    'Express',
  ]);

  const tools = [
   'Postman',
   'Figma',
   'Slack',
   'Stack Overflow',
   'Notion',
   'Render',
   'MongoDB',
   'Netlify',
   'Trello',
  ];

  const more = [
    'Record keeping',
    'Microsoft Office 365 & OneDrive',
    'Committee administration',
    'System administration',
    'Customer service',
  ]

  return (
    <section className='skills-container'>
      <Wave />
     <div className='skills'>
     <h1 className='h1skills'>Skills</h1>
     <div className='skills-columns'>
      <div className='skills-column'>
      <h3 className='h3skills'>Code</h3>
      <ul>
        {skillsList.map((item, index) => (
          <li key={index} className='skills-item'>
            {item}
          </li>
        ))}
      </ul>
      </div>

      <div className='skills-column'>
        <h3 className='h3tools'>Tools</h3>
        <ul>
          {tools.map((item, index) => (
            <li key={index} className='skills-item'>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className='skills-column'>
        <h3 className='h3more'>More</h3>
        <ul>
          {more.map((item, index) => (
            <li key={index} className='skills-item'>
              {item}
            </li>
          ))}  
        </ul>
      </div>

     </div>
     </div>
    </section>
    
  );
};
