// Importing necessary components and external data
import Container from "../container/Container"; // Importing a container component
import data from "./data.json"; // Importing external data

// Creating a functional component named Skills
const Skills = () => {
    // Define color and text styles for categories
    const colors = [
        "bg-technigo-light-pink",
        "bg-technigo-light-blue",
        "bg-technigo-green",
        "bg-technigo-light-yellow"
    ];

    const text = [
        "text-white",
        "text-white",
        "text-white",
        "text-technigo-blue",
    ];

    return (
        // Using a Container component with a specified background color
        <Container className="bg-technigo-blue">
            {/* Displaying a large title */}
            <h2 className="text-6xl font-bold text-white text-center mb-16">{data.title}</h2>
            {/* Creating a grid layout with specified columns */}
            <div className="grid gap-8 text-center md:text-left grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {/* Mapping over an array of skill categories and rendering details for each */}
                {data.categories.map((category, index) => (
                    <div key={category.title}>
                        {/* Displaying the category title with specific styling */}
                        <h3 className={`text-2xl font-medium inline-block px-1 ${text[index % 4]} mb-4 ${colors[index % 4]}`}>
                            {category.title}
                        </h3>
                        {/* Mapping over an array of skills within the category */}
                        {category.skills.map((skill) => (
                            <p key={skill} className="text-white mb-1 pl-1">{skill}</p>
                        ))}
                    </div>
                ))}
            </div>
        </Container>
    );
}

// Exporting the Skills component to be used in other files
export default Skills;