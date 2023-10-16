// Creating a functional component named Tag which takes props as input
const Tag = ({ children, className = "" }) => {
    return (
        // Creating a span element with specified classes for styling
        <span className={`bg-black text-white px-2 py-1 text-sm ${className}`}>
            {children} {/* Displaying the content within the tag */}
        </span>
    )
}

// Exporting the Tag component to be used in other files
export default Tag;
