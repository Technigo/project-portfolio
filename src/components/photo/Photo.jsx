// Creating a functional component named Photo which takes props as input
const Photo = ({
    src,      // Source URL of the image
    alt,      // Alternative text for the image
    color,    // Color for the border
    className // Additional CSS classes for customization (optional)
}) => {
    return (
        // Creating a div element with specified classes and relative positioning
        <div className={`relative ${className}`}>
            {/* Creating an absolute div to serve as a border */}
            <div
                className={`absolute w-full h-full border-l-photo border-b-photo ${color}`}
            />
            {/* Displaying an image with provided source and alternative text */}
            <img
                src={src}
                alt={alt}
                className="w-full object-cover"
            />
        </div>
    );
}

// Exporting the Photo component to be used in other files
export default Photo;
