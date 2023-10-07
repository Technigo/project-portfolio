import React, { useState } from 'react';

function Skills() {
  const [skillsList, setSkillsList] = useState([
    {
      skill: 'Project Management',
      description:
        'Emphasize your extensive experience as a Project Manager and your ability to lead and manage projects effectively.',
    },
    {
      skill: 'Information Management',
      description:
        'Highlight your background in records management, which includes skills related to information organization, retrieval, and compliance.',
    },
    {
      skill: 'IT Consulting',
      description:
        'Mention your experience in IT consulting, which involves providing expert advice and solutions to clients.',
    },
    {
      skill: 'Archive Management',
      description:
        'Showcase your knowledge and experience in archive management, including creating management plans, policies, and handling sensitive information.',
    },
    {
      skill: 'e-Archiving',
      description:
        'Highlight your expertise in e-archiving, which is essential in today\'s digital age.',
    },
    {
      skill: 'Web Development',
      description:
        'Mention your recent education in web development and proficiency in JavaScript, React, HTML5, CSS, and Node.js.',
    },
    {
      skill: 'AI and Digital Preservation',
      description:
        'If applicable, mention your knowledge in AI and digital preservation, as these are emerging areas in tech.',
    },
    {
      skill: 'Agile Methodology',
      description:
        'Emphasize your familiarity with Agile development methodologies, such as Scrum and Kanban.',
    },
    {
      skill: 'Leadership and Teamwork',
      description:
        'Highlight your leadership roles and teamwork skills, as these are valuable in tech projects.',
    },
    {
      skill: 'Regulatory Knowledge',
      description:
        'Mention your understanding of laws and regulations related to data and archives, which is crucial in tech compliance.',
    },
    {
      skill: 'Communication Skills',
      description:
        'Showcase your strong communication skills, which are vital for collaborating with cross-functional teams.',
    },
    {
      skill: 'Problem-Solving',
      description:
        'Highlight your ability to analyze complex issues and find practical solutions.',
    },
    {
      skill: 'IT Skills',
      description:
        'Include your proficiency in IT tools and technologies used in your roles, such as document management systems.',
    },
    {
      skill: 'Certifications',
      description:
        'If you have certifications, like your DiSC certification, mention them to demonstrate your commitment to professional development.',
    },
    {
      skill: 'Languages',
      description:
        'Mention your proficiency in languages like English, Swedish, and others, which can be a valuable asset in a global tech environment.',
    },
    {
      skill: 'Professional Organizations',
      description:
        'Highlight your involvement in professional organizations, like FAI (Föreningen Arkiv Information), to showcase your industry engagement.',
    },
  ]);

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skillsList.map((item, index) => (
          <li key={index}>
            <h3>{item.skill}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
