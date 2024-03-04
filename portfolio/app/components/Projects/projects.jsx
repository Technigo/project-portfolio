{/* This component is used to display some of my projects, and uses the data from a json-file to display the information and links to the projects. Here I also import the tags and button components to display the tags and links to the projects. */}
import Image from "next/image";
import data from "./data.json";
import Tag from "./tag.jsx";
import DemoButton from "./demoButton.jsx"; 
import CodeButton from "./codeButton.jsx";

const Projects = () => {
  return (
    <section className="flex flex-col items-center bg-white w-screen min-h-screen">
      <div className="flex-grow mt-16 justify-center mx-4 md:mx-16 lg:mx-60 flex flex-col">
        <h2 className="text-center md:text-left text-6xl font-bold mb-16 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Featured projects</h2>
        {/* This part of the code uses the data in the json-file in the same folder which contains links and info to some of my projects, and pictures from the public-folder to use the optimized image format for Next.js */} 
        {data.projects.map((project, index) => (
          <div key={index} className="flex gap-8 flex-col md:flex-row mb-16 md:items-center">
            <Image
              src={project.imageUrl}
              alt={project.imageAlt}
              width={100}
              height={100}
              className="w-full md:w-1/3 aspect-auto box-border border-l-20 border-b-20 border-pink-400"
            />
            <div className="md:w-2/3">
              <h3 className="text-3xl font-semibold mb-4">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              {/* This is where I use the tag-component to display the technologies used for each project */}
              <div className="mb-8">
                {project.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </div>
              {/* Using the demoButton and codeButton components to as links to the projects */}
              <div className="flex flex-col md:flex-row gap-4">
                <DemoButton url={project.demoUrl} />
                <CodeButton url={project.githubUrl} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
