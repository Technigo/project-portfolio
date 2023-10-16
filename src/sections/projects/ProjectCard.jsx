import "./projects.css";
import { Heading } from '/src/components/typography/Heading.jsx';
import { Image } from '/src/components/images/Image.jsx';
import { Paragraph } from '/src/components/typography/Paragraph.jsx';
import { Button } from '/src/components/button/Button.jsx';
import { Tag } from '/src/components/tag/Tag.jsx';



export const ProjectCard = ({ project }) => {
    return (
        <aside className="project-card">
            <div className="project-img-container">
            <Image
                sectionClassName={"project-img"}
                elementClassName={"project-img"}
                link={"/src/assets/dummy-image.jpg"}
                ImageAltText={"Profile Image of Maria"}
            />
            </div>
            <Heading
                level={3}
                text={project.name}
                aria-label="This is the main heading"
                className="project-card-heading"
            />
            <Paragraph
                text={project.description}
            />
            {/* Add more project details you want to display */}
            <section className="tags">
                <Tag tagText="HTML" className="custom-class" />
                <Tag tagText="CSS" className="custom-class" />
                <Tag tagText="React" className="custom-class" />
                <Tag tagText="Node" className="custom-class" />
            </section>
            <Button
                icon="/src/assets/social-icons/live-demo.svg" // Replace with icon path
                label="Live demo"
                link="https://www.example.com"
                className="netlify-btn"
            />
            <Button
                icon="/src/assets/social-icons/github-btn.svg" // Replace with icon path
                label="View the code"
                link={project.svn_url}
                className="github-btn"
            />
        </aside>
    );
};