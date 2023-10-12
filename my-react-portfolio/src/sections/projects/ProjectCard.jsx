import "./projects.css";
import { Heading } from '/src/components/typography/Heading.jsx';
import { Image } from '/src/components/images/Image.jsx';
import { Paragraph } from '/src/components/typography/Paragraph.jsx';


export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <Image
                sectionClassName={"project-img"}
                elementClassName={"project-img"}
                link={"/src/assets/dummy-image.jpg"}
                ImageAltText={"Profile Image of Maria"}
            />
            <Heading
                level={3}
                text={project.name}
                aria-label="This is the main heading"
                className="give-it-a-name"
            />
            <Paragraph text={project.description} />
            {/* Add more project details you want to display */}
        </div>
    );
};