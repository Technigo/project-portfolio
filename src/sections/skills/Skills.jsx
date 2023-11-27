import { MediumsizedTitle } from '../../reusableComponents/texts/MediumsizedTitle'
import { SectionTitle } from '../../reusableComponents/texts/SectionTitle'
import skills from '../../skills.json'
import './Skills.css'

export const Skills = () => {

    return (

        <section className="skills-section">
            <SectionTitle sectionTitletext={skills.skillsTitle} />
            <div className="skills-flex">
                {skills.categories.map((category, index) => (
                    <div key={category.mediumTitle}>
                        <div style={{
                            backgroundColor: `${category.bgColour}`
                            // color: `${category.colour}`                                                  
                        }}
                            className={category.mediumTitle.toLowerCase()}>
                            <MediumsizedTitle
                                mediumHeader={category.mediumTitle}
                            // className={category.mediumTitle.toLowerCase().replace(/ /g, "-")} 
                            />
                        </div>
                        <ul>
                            {category.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section >
    )
}

// Note: Difficulty in only targeting the "more" h2 living in MediumSizedTitle component inheriting styling .medium-title and isolating it from the other MediumSizedTitle through the array in standardised json (not working) to finally create on top a classname with toLowerCase() method to get .more h2