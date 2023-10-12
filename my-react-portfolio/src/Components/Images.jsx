import { useState, useEffect } from "react";
import repoImages from "./image-collection.json";

export const Images = () => {
  const [thumbnail, setThumbnail] = useState();

  const GithubRepos = () => {
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
      const fetchRepos = async () => {
        try {
          const response = await fetch("https://api.github.com/users/YourGithubProfile/repos");
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
  return <div>{/* Render your repositories and images here */}</div>;
};

}
