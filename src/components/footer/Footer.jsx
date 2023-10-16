// Importing necessary external data and styles
import data from "./data.json"; // Importing external data
import styles from "./Footer.module.css"; // Importing CSS module

// Creating a functional component named Footer
const Footer = () => {
    // This is the JSX code that will be rendered when this component is used

    return (
        // Creating a div element with specified classes for styling
        <div className="bg-technigo-pink py-8 relative overflow-hidden">
            {/* Displaying tags from the external data, joined by a bullet point */}
            <p className={`text-white text-xl font-medium whitespace-nowrap ${styles.scroll}`}>
                {data.tags.join(' • ')}
            </p>
        </div>
    );
}

// Exporting the Footer component to be used in other files
export default Footer;
