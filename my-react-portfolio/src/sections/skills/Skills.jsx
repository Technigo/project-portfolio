import { Heading } from '/src/components/typography/Heading.jsx';
import { SkillCard } from './SkillCard.jsx';



export const Skills = () => {

    return (
        <section className='skills'>
            <Heading
                level={1}
                text="Skills"
                aria-label="SKills section label"
                className="hello-text"
            />
            <SkillCard />
        </section>
    );
};