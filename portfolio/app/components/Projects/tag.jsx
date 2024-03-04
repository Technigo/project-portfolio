const Tag = ({ children }) => {
    return (
        <span className="bg-black text-white px-2 py-1 text-sm mr-1">
            {children} {/* Displaying the content within the tag */}
        </span>
    )
}

// Exporting the Tag component to be used in other files
export default Tag;