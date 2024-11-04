import BoxImage from "./BoxImage";
import BoxText from "./BoxText";
import "./css/ProjectBox.css"
import Button from "./Button";
 

const ArticleBox = ({ title, description, image, buttonUrl }) => {
    return (
        
            <article className="project-box">
                <BoxImage image={image} />
                <BoxText title={title} description={description} />
                <div className="div-button">
                    <Button text="Read More" url={buttonUrl} className="secondary-btn" />
                </div>
            </article>
    );
};

export default ArticleBox;