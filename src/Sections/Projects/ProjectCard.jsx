import { useState } from "react";
import "./projects.css";
//import { Button } from "../../ReusableComponents/FormElements/Button.jsx";
import repoImages from "./repoImages.json";
import { SubHeading } from "../../ReusableComponents/Typography/SubHeading.jsx";
import { ImageComponent } from "../../ReusableComponents/ImageElements/ImageComponent.jsx";
import { Tag } from "../../ReusableComponents/Typography/Tag.jsx";
import { Button } from "../../ReusableComponents/FormElements/Button";
import { NormalText } from "../../ReusableComponents/Typography/NormalText";

export const ProjectCard = ({ repositories }) => {
    // State that checks if buttons are in hover-state or not. Default is false. 
    const [isDemoButtonHovered, setIsDemoButtonHovered] = useState(false);
    const [isGithubButtonHovered, setIsGithubButtonHovered] = useState(false);

    // Declaring a variable that uses the images to find the relevant repositories. If the name in the image-json is in the list of repos in the Fetch it will be saved in the filteredRepos. 
    const filteredRepos = repositories.filter((repo) => {
        return repoImages.find((img) => img.repoName === repo.name);
    });

    return (
        <>
            {filteredRepos.map((repo) => {

                const repoImage = repoImages.find((img) => img.repoName === repo.name);
                const topics = repo.topics || []; // Saving repo.topics in a variable and provide an empty array as a default
                const projectName = repo.name;
                const cleanProjectName = projectName.replace(/-/g, " ");

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
                            <div className="tags">
                                {topics.map((topic, index) => (
                                    <Tag key={index} tagText={topic} />
                                ))}
                            </div>
                            <div className="buttons-section">
                                <Button
                                    className={"demo-btn"}
                                    btnURL={repo.homepage}
                                    imgAlt={"Web icon"}
                                    iconURL={isDemoButtonHovered ? '/icons/globe-white.svg' : '/icons/globe.svg'} // checks if the state of the button is hovered, and then change the icon url, otherwise leaves the one that is default
                                    btnText={"Live demo"}
                                    /* the methods onMouseEnter and onMouseLeave states to true and false depending on the pointer*/
                                    onMouseEnter={() => setIsDemoButtonHovered(true)}
                                    onMouseLeave={() => setIsDemoButtonHovered(false)}
                                />
                                <Button
                                    className={"github-btn"}
                                    btnURL={repo.html_url}
                                    imgAlt={"Github icon"}
                                    iconURL={isGithubButtonHovered ? '/icons/github-white.svg' : '/icons/github.svg'} // checks if the state of the button is hovered, and then change the icon url, otherwise leaves the one that is default
                                    btnText={"View the code"}
                                    /* Passes on the props onMouseEnter and onMouseLeave to set the state to true and false depending on the hover */
                                    onMouseEnter={() => setIsGithubButtonHovered(true)}
                                    onMouseLeave={() => setIsGithubButtonHovered(false)}
                                />
                            </div>
                        </div>
                    </article>
                );

            })}
        </>
    )
}