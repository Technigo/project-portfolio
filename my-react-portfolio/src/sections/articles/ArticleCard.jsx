import "./article.css";
import { Heading } from '/src/components/typography/Heading.jsx';
import { Image } from '/src/components/images/Image.jsx';
import { Paragraph } from '/src/components/typography/Paragraph.jsx';
import { Tag } from '/src/components/tag/Tag.jsx';
import { Button } from '/src/components/button/Button.jsx';


export const ArticleCard = ({ title, imageUrl, tagText, description, link }) => {
    return (
        <div className="project-card">
            <Image
                sectionClassName={"project-img"}
                elementClassName={"project-img"}
                link={imageUrl} // Use the passed imageUrl
                ImageAltText={title} // Use the title as alt text
            />
            <Tag tagText={tagText} className="custom-class" />
            <Heading
                level={3}
                text={title}
                aria-label="This is the main heading"
                className="give-it-a-name" />
            <Paragraph text={description} />
            <Button icon="/src/assets/social-icons/read.svg" label="Read article" link={link} />
        </div>
    );
};
