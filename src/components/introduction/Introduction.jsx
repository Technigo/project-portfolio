// Importing necessary components, external data, and an icon
import Container from "../container/Container"; // Importing a container component
import data from "./data.json"; // Importing external data
import { IconArrowDown } from '@tabler/icons-react'; // Importing an arrow down icon

// Creating a functional component named Introduction
const Introduction = () => {
    // This is the JSX code that will be rendered when this component is used

    return (
        // Using a Container component with a specified background color
        <Container className="bg-white">
            {/* Displaying a profile image (visible on mobile screens) */}
            <img
                className="block w-40 rounded-full mx-auto mb-8 md:hidden"
                src={data.profileImage}
                alt={data.profileImageAlt}
            />
            {/* Displaying a title */}
            <h2 className="text-center md:text-left text-xl font-semibold mb-4">{data.title}</h2>
            {/* Displaying a subtitle */}
            <h1 className="text-center md:text-left text-6xl font-bold mb-8 text-technigo-blue">{data.subtitle}</h1>
            <div className="flex gap-4 items-center mb-16">
                {/* Displaying a profile image (visible on larger screens) */}
                <img
                    className="hidden w-40 rounded-full md:block"
                    src={data.profileImage}
                    alt={data.profileImageAlt}
                />
                {/* Displaying an introduction paragraph */}
                <p className="text-center md:text-left font-medium">{data.introduction}</p>
            </div>
            {/* Displaying an arrow down icon */}
            <IconArrowDown className="h-12 w-12 mx-auto text-technigo-pink animate-bounce" />
        </Container>
    )
}

// Exporting the Introduction component to be used in other files
export default Introduction;
