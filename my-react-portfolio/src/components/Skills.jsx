import React, { useState } from 'react';

function Skills() {
  const [skillsList, setSkillsList] = useState([
    {
      skill: 'Project Management',
      description:
        'Through my years in the business I´ve been both a projectleader as well as a projectmember which gives me insight in both the roles. The projects I´ve lead have been mostly in records management but also in e- archiving where I lead projects handling delivieries to an e- archive as well as producing a requirements specification for an organization looking to procure an e- archive.',
    },
    {
      skill: 'Records management',
      description:
        'Highlight your background in records management, which includes skills related to information organization, retrieval, and compliance.,Showcase your knowledge and experience in archive management, including creating management plans, policies, and handling sensitive information.',
    },
    {
        skill: 'e-Archiving and digital preservation',
        description:
          'As mentioned above I worked with delivieries to an e- archive and also the process of producing a requirements specification. I also worked for one of the swedish e- archive companies as a records manager which meant teaching them about the system and being involved in product developement. I also worked with XML and XSD schemas who were the basis of our customers doing deliveries to the e- archive in a structured way.',
      },
    {
      skill: 'Consulting',
      description:
        'I´ve worked as a consultant for many years now and I really love it. You meet a lot of different people, get to do a lot of different projects and you learn so much. It really is a great way to constantly learn and evolve in your profession.',
    },
   
    {
      skill: 'Web Development',
      description:
        'I´m in a webdeveloper bootcamp where we learned JavaScript, React, HTML5, CSS, and Node.js. We worked in pair- programming and mob-programming. Even though it was really tough at sometimes you always had to have the mindset that everything would clear in the end. It´s been a learning experience which I hope to incorporate to my work experience in the future.',
    },
    {
      skill: 'Agile Methodology',
      description:
        'When I worked at a tech company, we followed the agile methodology, which included sprints, daily stand-ups, and retrospectives. It´s a great way to catch up with your team, see where everyone is at, and determine if you can be of assistance to one another.',
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
      'Fluent in Swedish and English at a high level. Currently learning to speak Latvian.'
    },
    {
      skill: 'Professional Organizations',
      description:
        'Highlight your involvement in professional organizations, like FAI (Föreningen Arkiv Information), to showcase your industry engagement.',
    },
  ]);

  return (
    <div className="skills">
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
