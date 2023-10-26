import React, { useState } from 'react';
import './TechSection.css';


function TechSkills() {
  const techSkills = [
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
    'GitHub'
  ];

  // Join the techSkills array into a single string with commas
  const formattedTechSkills = techSkills.join(', ');

  return (
    <div className="tech">
  <h2 className="tech-heading">Tech</h2>
  <p className="tech-paragraph">{formattedTechSkills}</p>
</div>

  );
}

export default TechSkills;

