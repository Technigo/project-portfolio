import "./tag.css";

export const Tag = ({ tagText }) => {
    return (
        <span className="tag-background">
            <p className="tag-text">{tagText}</p>
        </span>
    )
}