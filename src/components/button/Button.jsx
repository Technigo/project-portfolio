// Creating a functional component named Button which takes props as input
const Button = ({
    href,         // The URL the button will navigate to
    children,     // The content (text, elements) within the button
    ariaLabel,    // Descriptive label for accessibility
    className = "",  // Additional CSS classes for customization (optional)
}) => {
    return (
        // Creating an anchor element (link) with specified properties
        <a
            href={href}
            aria-label={ariaLabel}
            target="_blank"  // Opens link in a new tab or window
            rel="noopener noreferrer" // Security measures for opening in a new tab/window
            className={`px-4 py-2 rounded-full hover:cursor-pointer ${className}`}>
            {children}  {/* Displaying the content within the button */}
        </a>
    );
}

// Exporting the Button component to be used in other files
export default Button;
