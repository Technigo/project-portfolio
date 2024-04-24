import "./typography.css";

// Component for tags, for reusability across the portfolio. tagText as a prop from it's parents.
export const Tag = ({ tagText }) => {

    // Function to capitalize specific words in a string, making the tags look better. Takes in a parameter "text" as a placeholder value, and returs that
    const capitalizeSpecificWords = (text) => {
        return text
            .replace(/\b(html5|css3)\b/g, (match) => match.toUpperCase())
            .replace(/(^|\s)([a-z])/g, (match) => match.toUpperCase());
    };


    return (
        <span role="tag" className="tag-background">
            {/* Ads the prop tagText as an argument to the function capitalizeSpecificWords */}
            <p className="tag-text">{capitalizeSpecificWords(tagText)}</p>
        </span>
    )