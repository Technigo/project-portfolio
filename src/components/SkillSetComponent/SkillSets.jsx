
import "../mediumHeadline.css";
import "../textbox.css";
import { MediumHeadline } from "../MediumHeadline";
import { Textbox } from "../Textbox";


export const SkillSets = () => {

    const skillCategories = [
        {
            id: "100",
            className: "code",
            mediumSizeHeader: 'Code',
            text: [
                { id: "101", name: 'HTML5' },
                { id: "102", name: 'CSS3' },
                { id: "103", name: 'Javascript ES6' },
                { id: "104", name: 'React' },
                { id: "105", name: 'GitHub' }
            ]
        },
        {
            id: "200",
            className: "toolbox",
            mediumSizeHeader: 'Toolbox',
            text: [
                { id: "201", name: 'Slack' },
                { id: "202", name: 'Postman' }
            ]
        },
        {
            id: "300",
            className: "upcoming",
            mediumSizeHeader: 'Upcoming',
            text: [
                { id: "301", name: 'Node.js' }
            ]
        },
        {
            id: "400",
            className: "more",
            mediumSizeHeader: 'More',
            text: [
                { id: "401", name: 'Agile Methodology' },
                { id: "402", name: 'Project Management' },
                { id: "403", name: 'Process Design' }
            ]
        }
    ];

    // I chose to create an array that contains all the different skills as objects. I did this in order to be able to map() them in case I want to add or remove things in the future. First I mapped the whole skill set card. Since the header for each category is the same as the orther pages regarding styling I chose to import the H2 text component. Second I mapped an unordered list of different skills. The text for each skill is using the textbox component which is the regular body text.
    return (
        <div className="skillset-card-container">
            {skillCategories.map((category) => (
                <div className="skill-sets-card" key={category.id}>
                    <MediumHeadline
                        className={`${category.className}`}
                        mediumSizeHeader={category.mediumSizeHeader}
                        useSpan={true}
                    />
                    <ul className="list-without-bullets">
                        {category.text.map((skill) => (
                            <li key={skill.id}>
                                <Textbox text={skill.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
