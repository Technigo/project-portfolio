import "./headingarticle.css";

export const HeadingArticle = ({ text, className }) => {
    
    return (
        <h3 className={`${className}`}>
            {text}
            </h3>
    )
}

