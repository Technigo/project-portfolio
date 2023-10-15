import { SubHeading } from "./ReusableTypos/SubHeading.jsx";
import { BodyText } from "./ReusableTypos/BodyText.jsx";
import { Tags } from "./ReusableTypos/Tags.jsx";
import { Button } from "./ReusableTypos/Buttons.jsx";

import "./projectcard.css";

// Import a JSON file containing data about repository images.
//import repoImages from "../data/repoImages.json";
import repoImages from "../data/repoImages.json";

export const ProjectCard = ({repos}) => {


    //creating a variable to store the repos with a matching name to the names from the repoImages array.
    const filteredRepos = repos.filter((repo) => {
        return repoImages.find((img) => img.repoName === repo.name);
    });
    
        // Return the JSX to render to the DOM.
    return (
        <section className="featuredprojects-wrapper">
            
                {filteredRepos.map((repo) => {
                    // Find the repository image data that matches the current repository.
                    const repoImage = repoImages.find((img) => img.repoName === repo.name);
                    return (
                        <div key={repo.id} className="project-card">
                            {/* Display the repository image, if available. */}
                            <img src={repoImage?.imageUrl} alt={repo.name} />
                            {/* Render a SubHeading component with the repository name. */}
                            <SubHeading text={repo.name} />
                            <BodyText text={repo.description} />
                            <Tags tags={repo.topics} id={repo.id}/>
                            {/* Create a "Live Demo" and a "View the code" button linking to the repository's homepage. With the hover effect. */}
                            <div className="livedemo">
                            <Button 
                            link={repo.homepage} 
                            normalImage="src/assets/buttons/Live-Demo-Button.svg"
                            hoverImage="src/assets/buttons/Live-Demo-Button-Hover.svg"
                            />
                            </div>
                            <div className="viewthecode">
                            <Button 
                            link={repo.html_url} 
                            normalImage="src/assets/buttons/View-Code-Button.svg"
                            hoverImage="src/assets/buttons/View-Code-Button-Hover.svg"
                            />
                            </div>
                        </div>
                    );
                })}
            
        </section>
    )
}