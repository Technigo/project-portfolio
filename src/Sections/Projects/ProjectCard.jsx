import "./projects.css";
//import { Button } from "../../ReusableComponents/FormElements/Button.jsx";
import repoImages from "./repoImages.json";
import { SubHeading } from "../../ReusableComponents/Typography/SubHeading.jsx";
import { ImageComponent } from "../../ReusableComponents/ImageElements/ImageComponent.jsx";
import { Tag } from "../../ReusableComponents/Typography/Tag.jsx";

export const ProjectCard = ({ repositories }) => {
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
                        <p>{repo.description}</p>
                        <div className="tags">
                            {topics.map((topic, index) => (
                                <Tag key={index} tagText={topic} />
                            ))}
                        </div>
                        {/* <Button buttonName={`Live Demo`} link={repo.homepage} icon={`src/assets/livedemo.svg`} iconAlt={`Web icon`} />
                            <Button buttonName={`View the Code`} link={repo.html_url} icon={`src/assets/github.svg`} iconAlt={`GitHub logo`} /> */}
                    </article>
                );
            })}
        </>
    )
}