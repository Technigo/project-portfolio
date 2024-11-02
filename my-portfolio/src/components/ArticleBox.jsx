import BoxImage from "./BoxImage";
import BoxText from "./BoxText";
import "./css/ProjectBox.css"
import Button from "./Button";


const ArticleBox = ({ title, description, image, articleUrl }) => {
    return (
        
            <article className="project-box">
                <BoxImage image={image} />
                <BoxText title={title} description={description} />
                <Button articleUrl={articleUrl} />
            </article>
    );
};

export default ArticleBox;