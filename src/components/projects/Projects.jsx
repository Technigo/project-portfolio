// Importing necessary components, icons, and external data
import { IconBrandGithub, IconWorld } from "@tabler/icons-react"; // Importing icons
import Button from "../button/Button"; // Importing a button component
import Photo from "../photo/Photo"; // Importing a photo component
import Tag from "../tag/Tag"; // Importing a tag component
import data from "./data.json"; // Importing external data
import Container from "../container/Container"; // Importing a container component

// Creating a functional component named Projects
const Projects = () => {
    // This is the JSX code that will be rendered when this component is used

    return (
        // Using a Container component with a specified background color
        <Container className="bg-white">
            {/* Displaying a large title */}
            <h2 className="text-center md:text-left text-6xl font-bold mb-16 text-technigo-blue">{data.title}</h2>

            {/* Mapping over an array of projects and rendering project details for each */}
            {data.projects.map((project, index) => (
                <div key={index} className="flex gap-8 flex-col md:flex-row mb-16 md:items-center">
                    {/* Displaying a project image */}
                    <Photo
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        className="w-full md:w-1/3"
                        color="border-technigo-blue"
                    />
                    <div className="md:w-2/3">
                        {/* Displaying the project name */}
                        <h3 className="text-3xl font-semibold mb-4">{project.name}</h3>
                        {/* Displaying the project description */}
                        <p className="mb-4">{project.description}</p>
                        <div className="mb-8">
                            {/* Displaying project tags */}
                            {project.tags.map((tag, tagIndex) => (
                                <Tag key={tagIndex} className="mr-1">
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Creating a button for live demo */}
                            <Button
                                href={project.demoUrl}
                                ariaLabel="Live Demo"
                                className="w-fit bg-gray-100 hover:bg-technigo-blue hover:text-white"
                            >
                                {/* Displaying a world icon */}
                                <IconWorld className="h-8 w-8 inline-block mr-2" />
                                <span className="font-semibold align-middle">Live Demo</span>
                            </Button>
                            {/* Creating a button to view the code */}
                            <Button
                                href={project.githubUrl}
                                ariaLabel="View the code"
                                className="w-fit bg-gray-100 hover:bg-technigo-light-pink hover:text-white"
                            >
                                {/* Displaying a GitHub icon */}
                                <IconBrandGithub className="h-8 w-8 inline-block mr-2" />
                                <span className="font-semibold align-middle">View the code</span>
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </Container>
    );
}

// Exporting the Projects component to be used in other files
export default Projects;
