
import { MediumHeadline } from "../MediumHeadline";
import { Textbox } from "../Textbox";


export const SkillSets = () => {
  const skillCategories = [
    {
      mediumSizeHeader: 'Technologies',
      text: ['HTML5', 'CSS3', 'Javascript ES6', 'React', 'GitHub']
    },
    {
      mediumSizeHeader: 'Toolbox',
      text: ['Slack', 'Postman']
    },
    {
        mediumSizeHeader: 'Upcoming',
        text: ['Node.js']
      },
    {
        mediumSizeHeader: 'More',
        text: ['Agile Methodology', 'Project Management', 'Process Design']
      }
  ];

  return (
    <>
      {skillCategories.map((category, index) => (
        <div key={index}>
          <MediumHeadline mediumSizeHeader={category.mediumSizeHeader} />
          <ul className="list-without-bullets">
            {category.text.map((text, itemIndex) => (
              <li key={itemIndex}><Textbox text={text} /></li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
