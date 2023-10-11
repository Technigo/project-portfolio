
import { MediumHeadline } from "../MediumHeadline";
import { Textbox } from "../Textbox";


export const SkillSets = () => {

    const skillCategories = [
        {
          id: "1",
          mediumSizeHeader: 'Technologies',
          text: [
            { id: "101", name: 'HTML5' },
            { id: "102", name: 'CSS3' },
            { id: "103", name: 'Javascript ES6' },
            { id: "104", name: 'React' },
            { id: "105", name: 'GitHub' }
          ]
        },
        {
          id: "2",
          mediumSizeHeader: 'Toolbox',
          text: [
            { id: "201", name: 'Slack' },
            { id: "202", name: 'Postman' }
          ]
        },
        {
          id: "3",
          mediumSizeHeader: 'Upcoming',
          text: [
            { id: "301", name: 'Node.js' }
          ]
        },
        {
          id: "4",
          mediumSizeHeader: 'More',
          text: [
            { id: "401", name: 'Agile Methodology' },
            { id: "402", name: 'Project Management' },
            { id: "403", name: 'Process Design' }
          ]
        }
      ];


    return (
        <>
            {skillCategories.map((category) => (
                <div key={category.id}>
                    <MediumHeadline mediumSizeHeader={category.mediumSizeHeader} />
                    <ul className="list-without-bullets">
                        {category.text.map((skill) => (
                            <li key={skill.id}><Textbox text={skill.name} /></li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
};
