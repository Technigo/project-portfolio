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
    //filteredRepos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

     // Sort the filtered repositories by their id (highest first)
     filteredRepos.sort((a, b) => {
        const aData = repoData.projects.find(data => data.repoName === a.name);
        const bData = repoData.projects.find(data => data.repoName === b.name);
        return bData.id - aData.id;
    });

    return (
        <>
            {filteredRepos.map((repo) => {

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
                                ImageAltText={`Image of ${matchingData.publicName} project`}
                            />
                        </div>
                        <div className="project-text-section">
                            <Heading
                                level={3}
                                text={matchingData.publicName}
                                aria-label="This is the main heading"
                                className="project-card-heading"
                            />
                            <Paragraph
                                text={repo.description} // Retrieve the description from the API
                            />
                            <div role="tag" aria-label="Tags" className="tags">
                                {/* Mapping through tags, to display them next to each other */}
                                {matchingData.topics.map((topic, index) => (
                                    <Tag key={index} tagText={topic} />
                                ))}
                            </div>
                            <div className='button-wrapper'>
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
                            </div>
                        </div>
                    </article>
                );
            })}
        </>
    );
};
