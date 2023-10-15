import "./typography.css";

// Component for tags, for reusability across the portfolio. tagText as a prop from it's parents.
export const Tag = ({ tagText }) => {
    return (
        <span className="tag-background">
            <p className="tag-text">{tagText}</p>
        </span>
    )
}
