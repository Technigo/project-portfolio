import repoImages from './repoImages.json'; 

import { SubHeading } from "../../ReusableComp/Typo/SubHeading";
import { ImageComponent } from "../../ReusableComp/ImageElements/ImageComp";
import { Tag } from "../../ReusableComp/Typo/Tag";
import { Button } from "../../ReusableComp/FormElements/Button";
import { NormalText } from "../../ReusableComp/Typo/NormalText";

export const ProjectCard = ({ repositories }) => {
    console.log(repositories);

    // Filter and sort the repositories based on image information and creation date
    const filteredRepos = repositories
        .filter((repo) => repoImages.find((img) => img.repoName === repo.name))
        .sort((a, b) => {
            const dateA = new Date(a.created_at);
            const dateB = new Date(b.created_at);

            return dateB - dateA;
        });

    return (
        <>
        {/* Map through filtered repositories and render a card for each */}
            {filteredRepos.map((repo) => {
                // Find the corresponding image data in repoImages
                const repoImage = repoImages.find((img) => img.repoName === repo.name);
                // Extract topics from the repository data (default to an empty array)
                const topics = repo.topics || [];
                // Extract project name and format it for display
                const projectName = repo.name;
                const cleanProjectName = projectName.replace(/-/g, " ");

                return (
                    <article className="project-cards" key={repo.id}>
                        {/* Render the project image using ImageComponent */}
                        <ImageComponent
                            sectionClassName={"image"}
                            elementClassName={"square-img"}
                            imagePath={repoImage?.imageUrl}
                            ImageAltText={cleanProjectName}
                        />
                        <div className="project-text-section">
                            <SubHeading text={cleanProjectName} />
                            <NormalText text={repo.description} />
                            <div role="tag" aria-label="Tags" className="tags">
                            {/* Map through topics and render each as a tag */}
                                {topics.map((topic, index) => (
                                    <Tag key={index} tagText={topic} />
                                ))}
                            </div>
                            <div aria-label="Buttons" className="buttons-section">
                                {/* Render a button for the live demo with provided information */}
                                <Button
                                    className={"demo-btn"}
                                    btnURL={repo.homepage}
                                    imgAlt={"Web icon"}
                                    iconURL={"/icons/Live Demo.svg"}
                                    btnText={"Live demo"}
                                />
                                {/* Render a button for viewing the code with provided information */}
                                <Button
                                    className={"github-btn"}
                                    btnURL={repo.html_url}
                                    imgAlt={"Github icon"}
                                    iconURL={"/icons/github.svg"}
                                    btnText={"View the code"}
                                />
                            </div>
                        </div>
                    </article>
                );
            })}
        </>
    );
}
