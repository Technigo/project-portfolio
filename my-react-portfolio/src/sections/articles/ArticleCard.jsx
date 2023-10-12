import "./article.css";
import { Heading } from '/src/components/typography/Heading.jsx';
import { Image } from '/src/components/images/Image.jsx';
import { Paragraph } from '/src/components/typography/Paragraph.jsx';


export const ArticleCard = () => {
    return (
        <div className="project-card">
            <Image
                sectionClassName={"project-img"}
                elementClassName={"project-img"}
                link={"/src/assets/dummy-image.jpg"}
                ImageAltText={"dummy image"}
            />
            <Heading
                level={3}
                text="article-heading"
                aria-label="This is the main heading"
                className="give-it-a-name"
            />
            <Paragraph text="some short text abou the article" />
            {/* Add more project details you want to display */}
        </div>
    );
};