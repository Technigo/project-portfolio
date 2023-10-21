import repoImages from './repoImages.json'; 

import { SubHeading } from "../../ReusableComp/Typo/SubHeading";
import { ImageComponent } from "../../ReusableComp/ImageElements/ImageComp";
import { Tag } from "../../ReusableComp/Typo/Tag";
import { Button } from "../../ReusableComp/FormElements/Button";
import { NormalText } from "../../ReusableComp/Typo/NormalText";

export const ProjectCard = ({ repositories }) => {
    console.log(repositories);

    const filteredRepos = repositories
        .filter((repo) => repoImages.find((img) => img.repoName === repo.name))
        .sort((a, b) => {
            const dateA = new Date(a.created_at);
            const dateB = new Date(b.created_at);

            return dateB - dateA;
        });

    return (
        <>
            {filteredRepos.map((repo) => {
                const repoImage = repoImages.find((img) => img.repoName === repo.name);
                const topics = repo.topics || [];
                const projectName = repo.name;
                const cleanProjectName = projectName.replace(/-/g, " ");

                return (
                    <article className="project-cards" key={repo.id}>
                        <ImageComponent
                            sectionClassName={"image"}
                            elementClassName={"square-img"}
                            link={repoImage?.imageUrl}
                            ImageAltText={cleanProjectName}
                        />
                        <div className="project-text-section">
                            <SubHeading text={cleanProjectName} />
                            <NormalText text={repo.description} />
                            <div role="tag" aria-label="Tags" className="tags">
                                {topics.map((topic, index) => (
                                    <Tag key={index} tagText={topic} />
                                ))}
                            </div>
                            <div aria-label="Buttons" className="buttons-section">
                                <Button
                                    className={"demo-btn"}
                                    btnURL={repo.homepage}
                                    imgAlt={"Web icon"}
                                    iconURL={"/icons/Live-Demo-Button.svg"}
                                    //btnText={"Live demo"}
                                />
                                <Button
                                    className={"github-btn"}
                                    btnURL={repo.html_url}
                                    imgAlt={"Github icon"}
                                    iconURL={"/icons/github=default.svg"}
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
