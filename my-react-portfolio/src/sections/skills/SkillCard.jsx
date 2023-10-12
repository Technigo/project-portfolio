import { Paragraph } from '/src/components/typography/Paragraph.jsx';
import { Tag } from '/src/components/tag/Tag.jsx';


export const SkillCard = () => {

    return (
        <section className='skill-card'>
            <Tag tagText="Code" className="custom-class" />
            <Paragraph text="HTML5" />
        </section>
    );
};