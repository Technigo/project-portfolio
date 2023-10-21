import { SubHeading } from "../../ReusableComp/Typo/SubHeading";
import skills from "./skills.json";

export const SkillsList = () => {
    return (
        <>
            {skills.map((skillCategory) => (
                <article key={skillCategory.name}>
                    <div className="skill-heading-padding">
                        <SubHeading className={skillCategory.name.toLowerCase().replace(/ /g, "-")} text={skillCategory.name} />
                    </div>
                    <ul>
                        {skillCategory.skillset.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </>
    );
};