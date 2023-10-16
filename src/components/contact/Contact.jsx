// Importing necessary components and icons
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import data from "./data.json"; // Importing external data
import Container from "../container/Container"; // Importing a container component

// Creating a functional component named Contact
const Contact = () => {
    // This is the JSX code that will be rendered when this component is used

    return (
        // Using a Container component to wrap the content
        <Container>
            {/* Displaying a large title */}
            <h2 className="text-6xl font-bold text-technigo-blue text-center mb-16">
                {data.title}
            </h2>
            {/* Displaying an image with provided URL and alternative text */}
            <img
                className="rounded-full w-40 mx-auto mb-8"
                src={data.imageUrl}
                alt={data.imageAlt}
            />
            {/* Displaying a name */}
            <p className="text-center font-semibold text-xl mb-8">
                {data.name}
            </p>
            <div className="flex gap-4 justify-center">
                {/* Creating a link to LinkedIn profile with an icon */}
                <a
                    aria-label="LinkedIn"
                    href={data.linkedinUrl}
                >
                    <IconBrandLinkedin className="text-gray-400 hover:text-gray-600" />
                </a>
                {/* Creating a link to GitHub profile with an icon */}
                <a
                    aria-label="Github"
                    href={data.githubUrl}
                >
                    <IconBrandGithub className="text-gray-400 hover:text-gray-600" />
                </a>
            </div>
        </Container>
    );
}

// Exporting the Contact component to be used in other files
export default Contact;
