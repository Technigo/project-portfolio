import { useEffect, useState } from "react";

export const FeaturedProjects = () => {
  const [projectData, setProjectData] = useState();

  const gitHubURL = "https://api.github.com/users/schouenkes/repos";

  useEffect(() => {
    fetch(gitHubURL)
      .then((response) => response.json())
      .then((json) => setProjectData(json))
      .catch((error) => console.log(error));
  }, []);

  console.log(projectData);
};
