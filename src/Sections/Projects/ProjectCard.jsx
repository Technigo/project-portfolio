// import { useState } from "react";
import "./projects.css";
import repoImages from "./repoImages.json";
import { SubHeading } from "../../ReusableComponents/Typography/SubHeading.jsx";
import { ImageComponent } from "../../ReusableComponents/ImageElements/ImageComponent.jsx";
import { Tag } from "../../ReusableComponents/Typography/Tag.jsx";
import { Button } from "../../ReusableComponents/FormElements/Button";
import { NormalText } from "../../ReusableComponents/Typography/NormalText";

// Component for each individual project-card. Takes in data as a prop from its parent the FeaturedProjects.jsx where the fetch from Github is made.
export const ProjectCard = ({ repositories }) => {

    // Declaring a variable that uses the images to find the relevant repositories. If the name in the image-json is in the list of repos in the Fetch it will be saved in the filteredRepos. 
    const filteredRepos = repositories.filter((repo) => {
        return repoImages.find((img) => img.repoName === repo.name);
    });

    return (
        <>
            {filteredRepos.map((repo) => {

                const repoImage = repoImages.find((img) => img.repoName === repo.name);
                const topics = repo.topics || []; // Saving repo.topics in a variable and sets an empty array as a default
                const projectName = repo.name;
                const cleanProjectName = projectName.replace(/-/g, " "); // Saving the name of the project in a cleaner format, removing the dashes from the API name.

                return (
                    <article className="project-cards" key={repo.id}>
                        <ImageComponent
                            sectionClassName={"image"}
                            elementClassName={"square-img"}
                            link={repoImage?.imageUrl}
                            ImageAltText={cleanProjectName} />
                        <div className="project-text-section">
                            <SubHeading text={cleanProjectName} />
                            <NormalText text={repo.description} />
                            {/* Adding aria-labels here to make it clear that the small texts read by the screen reader are tags */}
                            <div role="tag" aria-label="Tags" className="tags">
                                {/* Mapping through tags, to display them next to each other */}
                                {topics.map((topic, index) => (
                                    <Tag key={index} tagText={topic} />
                                ))}
                            </div>
                            <div aria-label="Buttons" className="buttons-section">
                                {/* Adding aria-labels here to make it clear that the buttons are coming up */}
                                <Button
                                    className={"demo-btn"}
                                    btnURL={repo.homepage}
                                    imgAlt={"Web icon"}
                                    /* Checks if the state of the button is hovered, and then change the icon url, otherwise leaves the one that is default */
                                    // iconURL={isDemoButtonHovered[index] ? '/icons/globe-white.svg' : '/icons/globe.svg'}
                                    iconURL={"/icons/globe.svg"}
                                    btnText={"Live demo"}
                                /* The methods onMouseEnter and onMouseLeave states to true and false depending on the pointer*/
                                // onTouchStart={() => setIsDemoButtonHovered(index, true)} // onTouchStart for mobile devices where there is no hover
                                // onTouchEnd={() => setIsDemoButtonHovered(index, false)}   // onTouchEnd for mobile devices where there is no hover
                                // onMouseEnter={() => setIsDemoButtonHovered({ ...isDemoButtonHovered, [index]: true })}
                                // onMouseLeave={() => setIsDemoButtonHovered({ ...isDemoButtonHovered, [index]: false })}
                                />
                                <Button
                                    className={"github-btn"}
                                    btnURL={repo.html_url}
                                    imgAlt={"Github icon"}
                                    // iconURL={isGithubButtonHovered[index] ? '/icons/github-white.svg' : '/icons/github-darkgray.svg'}
                                    iconURL={"/icons/github-darkgray.svg"}
                                    btnText={"View the code"}
                                // onTouchStart={() => setIsGithubButtonHovered(index, true)} // Touch start event
                                // onTouchEnd={() => setIsGithubButtonHovered(index, false)}   // Touch end event
                                // onMouseEnter={() => setIsGithubButtonHovered({ ...isGithubButtonHovered, [index]: true })}
                                // onMouseLeave={() => setIsGithubButtonHovered({ ...isGithubButtonHovered, [index]: false })}
                                />
                            </div>
                        </div>
                    </article>
                );

            })}
        </>
    )
}