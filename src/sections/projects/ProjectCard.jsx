import './projects.css';
import repoData from './repo-data.json';
import { Heading } from '/src/components/typography/Heading.jsx';
import { Image } from '/src/components/images/Image.jsx';
import { Tag } from '/src/components/typography/Tag.jsx';
import { Paragraph } from '/src/components/typography/Paragraph.jsx';
import { Button } from '/src/components/button/Button.jsx';

export const ProjectCard = ({ repositories }) => {
    // Filter and match repositories with data in repoData.projects
    const filteredRepos = repositories.filter((repo) => {
        return repoData.projects.some((data) => data.repoName === repo.name);
    });

    // Sort the filtered repositories by their creation date (most recent first)
    filteredRepos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return (
        <>
            {filteredRepos.map((repo) => {
                const projectName = repo.name;

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
                            text={matchingData.publicName}
                            aria-label="This is the main heading"
                            className="project-card-heading"
                        />
                        <Paragraph
                            text={repo.description} // Retrieve the description from the API
                        />
                        <section className="tags">
                            {/* Add tags if available */
                                matchingData.topics.map((topics, index) => (
                                    <Tag key={index} text={topics} className="tag" />
                                ))}
                        </section>
                        <Button
                            icon="/assets/icons/live-demo.svg" // Replace with the actual icon path
                            label="Live demo"
                            link={matchingData.netlifyUrl} // Use the URL from the JSON data
                            className="netlify-btn"
                        />
                        <Button
                            icon="/assets/icons/github-btn.svg" // Replace with the actual icon path
                            label="View the code"
                            link={repo.svn_url} // Retrieve GitHub link from the API
                            className="github-btn"
                        />
                    </article>
                );
            })}
        </>
    );
};
