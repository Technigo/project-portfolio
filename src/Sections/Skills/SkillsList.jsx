import { SubHeading } from "../../ReusableComponents/Typography/SubHeading";
import skills from "./skills.json";

// Component for each individual skills list.
export const SkillsList = () => {
    return (
        <>
            {skills.map((skillCategory) => (
                <article key={skillCategory.name}>
                    {/* Setting the skillcategory-name as a classname, but in lowercase */}
                    <div className="skill-heading-padding">
                        <SubHeading className={skillCategory.name.toLowerCase().replace(/ /g, "-")} text={skillCategory.name} />
                    </div>
                    <ul>
                        {/* Mapping through the skills to show them as a list */}
                        {skillCategory.skillset.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </>
    );
};
