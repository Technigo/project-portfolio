import { Heading } from '/src/components/typography/Heading.jsx';
import { SkillCard } from './SkillCard.jsx';
import './skills.css'

export const Skills = () => {

    return (
        <section className='skills-container'>
            <Heading
                level={1}
                text="Skills"
                aria-label="Skills section label"
                className="skills-heading"
            />
            <section className='skills-wrapper'>
                <SkillCard />
            </section>
        </section>
    );
};