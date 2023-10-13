import { SubHeading } from "./ReusableTypos/SubHeading.jsx";
import { BodyText } from "./ReusableTypos/BodyText.jsx";
import { Tags } from "./ReusableTypos/Tags.jsx";
import { Button } from "./ReusableTypos/Buttons.jsx";

import "./projectcard.css";

import repoImages from "../data/repoImages.json";

export const ProjectCard = ({repos}) => {


    //creating a variable to store the repos with a matching name to the names from the repoImages array.
    const filteredRepos = repos.filter((repo) => {
        return repoImages.find((img) => img.repoName === repo.name);
    });
    // console.log("the filtered repos:",filteredRepos);


    return (
        <section className="featuredprojects-wrapper">
            
                {filteredRepos.map((repo) => {
                    const repoImage = repoImages.find((img) => img.repoName === repo.name);
                    return (
                        <div key={repo.id} className="project-card">
                            <img src={repoImage?.imageUrl} alt={repo.name} />
                            <SubHeading text={repo.name} />
                            <BodyText text={repo.description} />
                            <Tags tags={repo.topics} id={repo.id}/>
                            <div className="livedemo">
                            <Button buttonName={`Live Demo`} link={repo.homepage} icon={`src/assets/buttons/Live-Demo-Button.svg`} iconAlt={`Web icon`} />
                            </div>
                            <div className="viewthecode">
                            <Button buttonName={`View the Code`}link={repo.html_url} icon={`src/assets/buttons/View-Code-Button.svg`} iconAlt={`GitHub logo`} />
                            </div>
                        </div>
                    );
                })}
            
        </section>
    )
}