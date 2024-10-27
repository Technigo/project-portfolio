import { useState, useEffect } from "react";
import repoImages from "../libraries/projects.json";

export const GithubRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
        try {
        const response = await fetch("https://api.github.com/users/xingyin2024/repos");
        if (!response.ok) {
            throw new Error("Network response was not ok" + response.statusText);
        }
        const data = await response.json();
        setRepos(data);
        } catch (error) {
        console.error(
            "There has been a problem with your fetch operation:",
            error
        );
        }
    };

    fetchRepos();
    }, []);

    return (
    <div>
        <h1>GitHub Repositories</h1>
        <ul>
        {repos.map((repo) => {
            const repoImage = repoImages.find((img) => img.repoName === repo.name);
            return (
            <li key={repo.id}>
                <img src={repoImage?.imageUrl} alt={repo.name} />
                {repo.name}
            </li>
            );
        })}
        </ul>
    </div>
    );
};