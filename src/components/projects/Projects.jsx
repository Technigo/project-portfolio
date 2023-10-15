import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
import Button from "../button/Button";
import Photo from "../photo/Photo";
import Tag from "../tag/Tag";
import data from "./data.json";

const Projects = () => {
    return (
        <div className="container mx-auto py-40 px-8">
            <h2 className="text-center md:text-left text-6xl font-bold mb-16 text-blue-700">{data.title}</h2>
            {data.projects.map((project, index) => (
                <div key={index} className="flex gap-8 flex-col md:flex-row">
                    <Photo
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        className="w-full md:w-40"
                        color="blue"
                    />
                    <div>
                        <h3 className="text-3xl font-semibold mb-4">{project.name}</h3>
                        <p className="mb-4">{project.description}</p>
                        <div className="mb-8">
                            {project.tags.map((tag, tagIndex) => (
                                <Tag key={tagIndex} className="mr-1">
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                        <div className="flex place-content-between">
                            <Button href={project.demoUrl} className="bg-gray-100">
                                <IconWorld className="my-2 sh-8 w-8 inline-block" />
                                <span className="font-semibold align-middle">Live Demo</span>
                            </Button>
                            <Button href={project.githubUrl} className="bg-gray-100">
                                <IconBrandGithub className="my-2 sh-8 w-8 inline-block" />
                                <span className="font-semibold align-middle">View the code</span>
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;