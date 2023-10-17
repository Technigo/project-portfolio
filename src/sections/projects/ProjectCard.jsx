import './projects.css';
import repoData from './repo-data.json'; // Assuming you have a JSON file with project data
import { Heading } from '/src/components/typography/Heading.jsx';
import { Image } from '/src/components/images/Image.jsx';
import { Tag } from '/src/components/typography/Tag.jsx';
import { Paragraph } from '/src/components/typography/Paragraph.jsx';
import { Button } from '/src/components/button/Button.jsx';

export const ProjectCard = ({ repositories }) => {
    return (
        <>
            {repositories.map((repo) => {
                const projectName = repo.name;
                const cleanProjectName = projectName.replace(/-/g, " "); // Cleaning the project name

                // Find the corresponding data in repoData.projects based on repoName
                const matchingData = repoData.projects.find((data) => data.repoName === repo.name);

                if (!matchingData) {
                    return null; // Handle missing data
                }

                return (
                    <article className="project-card" key={matchingData.id}>
                        <div className="project-img-container">
                            <Image
                                sectionClassName={"project-img"}
                                elementClassName={"project-img"}
                                link={matchingData.imageUrl}
                                ImageAltText={`Profile Image of ${projectName}`}
                            />
                        </div>
                        <Heading
                            level={3}
                            text={cleanProjectName}
                            aria-label="This is the main heading"
                            className="project-card-heading"
                        />
                        <Paragraph
                            text={matchingData.description} // Assuming you have a description property
                        />
                        <section className="tags">
                            {/* Add tags if available */
                            matchingData.tags.map((tag, index) => (
                                <Tag key={index} text={tag} className="tag" />
                            ))}
                        </section>
                        <Button
                            icon="/assets/icons/live-demo.svg" // Replace with the actual icon path
                            label="Live demo"
                            link={matchingData.netlifyUrl}
                            className="netlify-btn"
                        />
                        <Button
                            icon="/assets/icons/github-btn.svg" // Replace with the actual icon path
                            label="View the code"
                            link={matchingData.repoName}
                            className="github-btn"
                        />
                    </article>
                );
            })}
        </>
    );
};
