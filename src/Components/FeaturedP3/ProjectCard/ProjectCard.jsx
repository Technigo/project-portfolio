import { Tags } from "/src/Components/Reusablecomponents/Tags.jsx";
import { Button } from "/src/Components/Reusablecomponents/Button.jsx";

import repoImages from "./repoImages.json";

export const ProjectCard = ({ repos }) => {

    const orderedRepoNames = repoImages.map((image) => image.repoName);

    return (
        <div className="featured-projects-wrapper">
            <h1>Featured projects</h1>
            <div>
                {orderedRepoNames.map((repoName) => {
                    const repo = repos.find((repo) => repo.name === repoName);
                    const repoImage = repoImages.find((img) => img.repoName === repoName);

                    if (repo && repoImage) {
                        return (
                            <div key={repo.id} className="project-card-inner">
                                <img src={repoImage.imageUrl} alt={repo.name} className="repo-image" />
                                <div className="project-info">
                                    <h3>{repo.name}</h3>
                                    <p>{repo.description} </p>
                                    <Tags tags={repo.topics} />
                                    <div className="buttons-container">
                                        <Button buttonName={`Live Demo`} link={repo.homepage} icon={`/assets/livedemo.svg`} iconAlt={`Web icon`} />
                                        <Button buttonName={`View the Code`} link={repo.html_url} icon={`/assets/github.svg`} iconAlt={`GitHub logo`} />
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return null; // Handle missing data or skip if not found
                    }
                })}
            </div>
        </div>
    );
};





