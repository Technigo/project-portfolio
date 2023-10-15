const Tag = ({ children, className = "" }) => {
    return (
        <span className={`bg-black text-white px-2 py-1 text-sm ${className}`}>
            {children}
        </span>
    )
}

export default Tag;