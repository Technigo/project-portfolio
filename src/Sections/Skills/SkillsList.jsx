import { SubHeading } from "../../ReusableComponents/Typography/SubHeading";
import skills from "./skills.json";

export const SkillsList = () => {
    return (
        <>
            {skills.map((skillCategory) => (
                <article key={skillCategory.name}>
                    <SubHeading text={skillCategory.name} />
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
