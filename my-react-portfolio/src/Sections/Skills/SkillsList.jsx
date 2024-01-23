import skills from "./skills.json";
import { SubTitle } from "../../ReusableComponents/Texts/SubTitle";

// Component for each individual skills list.
export const SkillsList = () => {
    return (
        <>
            {skills.map((skillCategory) => (
                <article key={skillCategory.name}>
                    <div className="skill-heading">
                        <SubTitle
                            text={skillCategory.name}
                            as="h3"
                            style={{ backgroundColor: getColorForCategory(skillCategory.name) }}
                            className="category-title"
                        />
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

// A function to assign background colors based on category name
function getColorForCategory(categoryName) {
    switch (categoryName) {
        case "Code":
            return "#EB5577";
        case "Tool Box":
            return "#2483E0";
        case "Upcoming":
            return "#6DB486";
        case "More":
            return "#FFDE30";
        default:
            return "";
    }
}
