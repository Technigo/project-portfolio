import "./typo.css";

export const Tag = ({ tagText }) => {

        // Function to capitalize specific words in the tag text
    const capitalizeSpecificWords = (text) => {
        return text
            .replace(/\b(html5|css3)\b/g, (match) => match.toUpperCase()) // Capitalize specific words (e.g., html5, css3)
            .replace(/(^|\s)([a-z])/g, (match) => match.toUpperCase()); // Capitalize the first letter of each word
    };

    return (
        <span role="tag" className="tag-background">
            <p className="tag-text">{capitalizeSpecificWords(tagText)}</p> {/* Display the tag text with capitalized words */}
        </span>
    )
}