import "./projects.css";
//import { Button } from "../../ReusableComponents/FormElements/Button.jsx";
import repoImages from "./repoImages.json";
import { SubHeading } from "../../ReusableComponents/Typography/SubHeading.jsx";
import { ImageComponent } from "../../ReusableComponents/ImageElements/ImageComponent.jsx";
import { Tag } from "../../ReusableComponents/Typography/Tag.jsx";
import { Button } from "../../ReusableComponents/FormElements/Button";
import { NormalText } from "../../ReusableComponents/Typography/NormalText";

export const ProjectCard = ({ repositories }) => {
    // Declaring a variable that uses the images to find the relevant repositories. If the name in the image-json is in the list of repos in the Fetch it will be saved in the filteredRepos. 
    const filteredRepos = repositories.filter((repo) => {
        return repoImages.find((img) => img.repoName === repo.name);
    });

    return (
        <>
            {filteredRepos.map((repo) => {

                const repoImage = repoImages.find((img) => img.repoName === repo.name);
                const topics = repo.topics || []; // Saving repo.topics in a variable and provide an empty array as a default

                return (
                    <article key={repo.id}>
                        <ImageComponent sectionClassName={"image"} elementClassName={"square-img"} link={repoImage?.imageUrl} ImageAltText={repo.name} />
                        <SubHeading text={repo.name} />
                        <NormalText text={repo.description} />
                        <div className="tags">
                            {topics.map((topic, index) => (
                                <Tag key={index} tagText={topic} />
                            ))}
                        </div>
                        <Button btnURL={repo.homepage} imgAlt={"Web icon"} iconURL={`/icons/globe.svg`} btnText={"Live demo"} />
                        <Button btnURL={repo.html_url} imgAlt={"Github icon"} iconURL={`/icons/github.svg`} btnText={"View the code"} />
                    </article>
                );
            })}
        </>
    )
}