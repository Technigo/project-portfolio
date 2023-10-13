import data from "./data.json";

const Projects = () => {
    return (
        <div className="container mx-auto py-40 px-8">
            <h2 className="text-center md:text-left text-6xl font-bold mb-16 text-blue-700">{data.title}</h2>
        </div>
    );
}

export default Projects;