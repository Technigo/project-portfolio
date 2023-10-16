// Creating a functional component named Container which takes props as input
const Container = ({ className, children }) => {
    return (
        // Creating a div element with a specified class name (if provided)
        <div className={className}>
            {/* Creating a nested div with maximum width, centered content, and padding */}
            <div className="max-w-default mx-auto px-8 py-40">
                {/* Displaying the child components */}
                {children}
            </div>
        </div>
    );
}

// Exporting the Container component to be used in other files
export default Container;
