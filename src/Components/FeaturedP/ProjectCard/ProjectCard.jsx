//Imports
import { Tags } from "/src/Components/Reusablecomponents/Tags.jsx";
import { Button } from "/src/Components/Reusablecomponents/Button.jsx";

import repoImages from "./repoImages.json";

//Export with the prop "repos"
export const ProjectCard = ({ repos }) => {

    //Extracts 'repoName' from each object in the repoImages and stores these names in the 'orderedRepoNames' array. This is used to determine the order in which projects are displayed.
    const orderedRepoNames = repoImages.map((image) => image.repoName);

    //Return with loop, iterates through the 'orderedRepoNames' array to display information about each project. If both repository and image are found, it proceeds to display information about project. If not, it skips and returns 'null'.
    return (
        <div className="featured-projects-wrapper">
            <h1>Featured projects</h1>
            <div>
                {orderedRepoNames.map((repoName) => {
                    const repo = repos.find((repo) => repo.name === repoName);
                    const repoImage = repoImages.find((img) => img.repoName === repoName);

                    if (repo && repoImage) {
                        //Structure of a single project card. Includes image, title, description, tags and buttons/links. If a new Portfolio Name is added to the .json-file that will be shown instead of the repoName. Two reusable components are used (tags and buttons).
                        return (
                            <div key={repo.id} className="project-card-inner">
                                <img src={repoImage.imageUrl} alt={repo.name} className="repo-image" />
                                <div className="project-info">
                                    <h3>{repoImage.portfolioName || repo.name}</h3>
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





