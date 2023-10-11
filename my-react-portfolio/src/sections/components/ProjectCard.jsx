import { SubHeading } from "./Typo/SubHeading.jsx";
import { BodyText } from "./Typo/BodyText.jsx";
import { Tags } from "./Tags.jsx"
import { Button } from "./Button.jsx"

import  repoImages  from "./data/repoImages.json";


export const ProjectCard = ({repos}) => {

    // console.log("the Repos:", repos)
    // console.log("repoImages:", repoImages)

    //creating a variable to store the repos with a matching name to the names from the repoImages array.
    const filteredRepos = repos.filter((repo) => {
        return repoImages.find((img) => img.repoName === repo.name);
    });
    // console.log("the filtered repos:",filteredRepos);


    return (
        <div>
            <ul>
                {filteredRepos.map((repo) => {
                    const repoImage = repoImages.find((img) => img.repoName === repo.name);
                    return (
                        <li key={repo.id}>
                            <img src={repoImage?.imageUrl} alt={repo.name} />
                            <SubHeading text={repo.name} />
                            <BodyText text={repo.description} />
                            <Tags tags={repo.topics} id={repo.id}/>
                            <Button buttonName={`Live Demo`} link={repo.homepage} icon={`src/assets/button-icons/live-demo.svg`} iconAlt={`Web icon`} />
                            <Button buttonName={`View the Code`}link={repo.html_url} icon={`src/assets/button-icons/github.svg`} iconAlt={`GitHub logo`} />
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}