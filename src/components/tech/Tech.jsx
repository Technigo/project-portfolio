// Importing necessary components and external data
import Container from "../container/Container"; // Importing a container component
import data from "./data.json"; // Importing external data

// Creating a functional component named Tech
const Tech = () => {
    // This is the JSX code that will be rendered when this component is used

    return (
        // Using a Container component with a specified background color
        <Container className="bg-technigo-blue">
            {/* Creating a flexbox layout with a vertical orientation */}
            <div className="flex flex-col text-center gap-20 md:text-left md:items-center md:flex-row">
                {/* Displaying a large title */}
                <h2 className="text-6xl font-bold text-white">{data.title}</h2>
                {/* Displaying content */}
                <p className="text-white font-semibold">{data.content}</p>
            </div>
        </Container>
    );
}

// Exporting the Tech component to be used in other files
export default Tech;
