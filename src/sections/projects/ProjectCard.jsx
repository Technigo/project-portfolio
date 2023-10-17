import "./projects.css";
import repoData from './repo-data.json'; // Import the JSON file
import { Heading } from '/src/components/typography/Heading.jsx';
import { Image } from '/src/components/images/Image.jsx';
import { Paragraph } from '/src/components/typography/Paragraph.jsx';
import { Button } from '/src/components/button/Button.jsx';
import { Tag } from '/src/components/typography/Tag.jsx';

export const ProjectCard = ({ project }) => {
  return (
      <article className="project-card">
          <div className="project-img-container">
          <Image
              sectionClassName={"project-img"}
              elementClassName={"project-img"}
              link={"/assets/project-img/dummy-image.jpg"}
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
              icon="/assets/icons/live-demo.svg" // Replace with icon path
              label="Live demo"
              link="https://www.example.com"
              className="netlify-btn"
          />
          <Button
              icon="/assets/icons/github-btn.svg" // Replace with icon path
              label="View the code"
              link={project.svn_url}
              className="github-btn"
          />
      </article>
  );
};