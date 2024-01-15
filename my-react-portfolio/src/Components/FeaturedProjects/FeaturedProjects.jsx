import styles from "./FeaturedProjects.module.css";

import { useEffect, useState } from "react";

export const FeaturedProjects = () => {
  const [myGits, setMyGits] = useState([]);
  const [NamesOfGits, setNamesOfGits] = useState([
    "final-project-airportfinder",
    "project-design-handoff-vite",
    "project-happy-thoughts-vite",
  ]);

  const myGitHubURL = "https://api.github.com/users/BeckieMorton/repos";

  //const sortedbyPush = "https://api.github.com/users/BeckieMorton/repos?sort=pushed_at";

  //get my GitHub info from the GitHub API
  useEffect(() => {
    const getMyProjects = () => {
      fetch(myGitHubURL)
        .then((response) => response.json())
        .then((data) => {
          setMyGits(data);
        })
        .catch((error) => console.error("Failed to fetch info", error));
    };

    getMyProjects();
  }, [myGitHubURL]);

  const formatGitName = (name) => {
    let newName = name.split("-").join(" ");

    const capitals = newName.split(" ");
    for (var i = 0; i < capitals.length; i++) {
      capitals[i] = capitals[i].charAt(0).toUpperCase() + capitals[i].slice(1);
    }

    const newCapitalisedName = capitals.join(" ");
    console.log(newCapitalisedName);

    return newCapitalisedName;
  };

  console.log(`myGits`, myGits);

  return (
    <>
      <div className={styles.projectsHeader}>
        <h1>Featured Projects</h1>
      </div>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsBox}>
          <img
            src="./assets/happy-thoughts.jpg"
            className={styles.projectsThumbnail}
          />
        </div>
        <div className={styles.projectsBox}>
          <h2>Project Name</h2>
          <p>info about project</p>
          <p>
            <span style={{ backgroundColor: "black", color: "white" }}>
              &nbsp; HTML5 &nbsp;
            </span>
            &nbsp;
            <span style={{ backgroundColor: "black", color: "white" }}>
              &nbsp; CSS3 &nbsp;
            </span>
            &nbsp;
            <span style={{ backgroundColor: "black", color: "white" }}>
              &nbsp; React &nbsp;
            </span>
          </p>
          <p>
            <a
              target="_blank"
              rel="noreferrer noopener"
              className={styles.liveDemoButton}
            >
              <img src=".\assets\Live-Demo-Button.png" alt="live demo" />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              className={styles.viewCodeButton}
            >
              <img src=".\assets\View-Code-Button.png" alt="view code" />
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
