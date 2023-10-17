import "./articles.css";
import { Heading } from '/src/components/typography/Heading';
import { Image } from '/src/components/images/Image';
import { Paragraph } from '/src/components/typography/Paragraph';
import { Tag } from '/src/components/typography/Tag';
import { Button } from '/src/components/button/Button';


export const ArticleCard = ({ title, imageUrl, tagText, description, link }) => {
    return (
        <div className="article-card">
            <div className="article-img-container">
                <Image
                    sectionClassName={"article-img"}
                    elementClassName={"article-img"}
                    link={imageUrl} // Use the passed imageUrl
                    ImageAltText={title} // Use the title as alt text
                />
            </div>
            <div className="article-text">
                <Tag tagText={tagText} className="article-tag" />
                <Heading
                    level={3}
                    text={title}
                    aria-label="This is the main heading"
                    className="give-it-a-name" />
            </div>
            <Paragraph text={description} />
            <Button
                icon="/assets/icons/read.svg"
                label="Read article"
                link={link}
                className="article-btn"
            />
        </div >
    );
};
