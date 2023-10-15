import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
import Button from "../button/Button";
import Photo from "../photo/Photo";
import Tag from "../tag/Tag";
import data from "./data.json";
import Container from "../container/Container";

const Projects = () => {
    return (
        <Container className="bg-white">
            <h2 className="text-center md:text-left text-6xl font-bold mb-16 text-technigo-blue">{data.title}</h2>
            {data.projects.map((project, index) => (
                <div key={index} className="flex gap-8 flex-col md:flex-row mb-8 md:items-center">
                    <Photo
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        className="w-full md:w-1/3"
                        color="border-technigo-blue"
                    />
                    <div className="md:w-2/3">
                        <h3 className="text-3xl font-semibold mb-4">{project.name}</h3>
                        <p className="mb-4">{project.description}</p>
                        <div className="mb-8">
                            {project.tags.map((tag, tagIndex) => (
                                <Tag key={tagIndex} className="mr-1">
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <Button
                                href={project.demoUrl}
                                ariaLabel="Live Demo"
                                className="w-fit bg-gray-100 hover:bg-technigo-blue hover:text-white"
                            >
                                <IconWorld className="h-8 w-8 inline-block mr-2" />
                                <span className="font-semibold align-middle">Live Demo</span>
                            </Button>
                            <Button
                                href={project.githubUrl}
                                ariaLabel="View the code"
                                className="w-fit bg-gray-100 hover:bg-technigo-light-pink hover:text-white"
                            >
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

export default Projects;