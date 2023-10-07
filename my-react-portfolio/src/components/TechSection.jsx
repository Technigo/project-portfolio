import { useState } from 'react'

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
    <div>
      <h2>Tech Skills</h2>
      <p>{formattedTechSkills}</p>
    </div>
  );
}

export default TechSkills;

