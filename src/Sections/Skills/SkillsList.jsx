import { SubHeading } from "../../ReusableComp/Typo/SubHeading";
import skills from "./skills.json";

export const SkillsList = () => {
    return (
        <>
        {/* Map through skill categories and render each as an article */}
            {skills.map((skillCategory) => (
                <article key={skillCategory.name}>
                    <div className="skill-heading-padding">
                        {/* Render a subheading for the skill category */}
                        <SubHeading className={skillCategory.name.toLowerCase().replace(/ /g, "-")} text={skillCategory.name} />
                    </div>
                    <ul>
                        {/* Map through the skillset of the category and render each skill as a list item */}
                        {skillCategory.skillset.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </>
    );
};