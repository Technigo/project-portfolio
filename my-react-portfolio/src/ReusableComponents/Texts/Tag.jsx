
import "../Texts/text.css";

export const Tag = ({ tagText }) => {
    return (
        <div className="tag">
            {tagText.map((tag, index) => (
                <span key={index} className="tag-background">
                    <p className="tag-text">{tag}</p>
                </span>
            ))}
        </div>
    );
};

