import styles from "./FeaturedProjects.module.css";

import { ProjectInfo as data } from "../Data/ProjectInfo";

import { useEffect, useState } from "react";

export const FeaturedProjects = () => {
  const [myGits, setMyGits] = useState([]);

  ///--REMOVED API Fetch from github for my resubmit and have created my own object data file to keep information about the exact projects I wanted to display.

  // const myGitHubURL = "https://api.github.com/users/BeckieMorton/repos";
  //const sortedbyPush = "https://api.github.com/users/BeckieMorton/repos?sort=pushed_at";
  //get my GitHub info from the GitHub API
  // useEffect(() => {
  //   const getMyProjects = () => {
  //     fetch(myGitHubURL)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setMyGits(data);
  //       })
  //       .catch((error) => console.error("Failed to fetch info", error));
  //   };

  //   getMyProjects();
  // }, [myGitHubURL]);

  return (
    <div className={styles.outer_containerWrapper}>
      <div className={styles.wrapper_projects}>
        <div className={styles.projectsHeader}>
          <h1>Featured Projects</h1>
        </div>
        {data.map((project) => (
          <div key={project.repoName} className={styles.projectContainer}>
            <img
              src={project.imagePath}
              alt={project.displayName}
              className={styles.projectImage}
            />

            <div className={styles.textContainer}>
              <h2 className={styles.displayName}>{project.displayName}</h2>
              <p className={styles.text}>{project.text}</p>
              <ul className={styles.skillsList}>
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>

              <div className={styles.iconContainer}>
                <a
                  className={styles.liveDemo}
                  href={project.netlifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="See Live demo of project"
                >
                  <img
                    src="./assets/Live-Demo-Button.png"
                    alt="live demo button"
                  />
                </a>

                <a
                  className={styles.viewCode}
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="See view code of project"
                >
                  <img
                    src="./assets/View-Code-Button.png"
                    alt="view code button"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // return (
  //   <>
  //     <div className={styles.projectsHeader}>
  //       <h1>Featured Projects</h1>
  //     </div>
  //     <div className={styles.projectsContainer}>
  //       <div className={styles.projectsBox}>
  //         <img
  //           src="./assets/happy-thoughts.jpg"
  //           className={styles.projectsThumbnail}
  //         />
  //       </div>
  //       <div className={styles.projectsBox}>
  //         <h2>Project Name</h2>
  //         <p>info about project</p>
  //         <p>
  //           <span style={{ backgroundColor: "black", color: "white" }}>
  //             &nbsp; HTML5 &nbsp;
  //           </span>
  //           &nbsp;
  //           <span style={{ backgroundColor: "black", color: "white" }}>
  //             &nbsp; CSS3 &nbsp;
  //           </span>
  //           &nbsp;
  //           <span style={{ backgroundColor: "black", color: "white" }}>
  //             &nbsp; React &nbsp;
  //           </span>
  //         </p>
  //         <p>
  //           <a
  //             target="_blank"
  //             rel="noreferrer noopener"
  //             className={styles.liveDemoButton}
  //           >
  //             <img src=".\assets\Live-Demo-Button.png" alt="live demo" />
  //           </a>
  //           <a
  //             target="_blank"
  //             rel="noreferrer noopener"
  //             className={styles.viewCodeButton}
  //           >
  //             <img src=".\assets\View-Code-Button.png" alt="view code" />
  //           </a>
  //         </p>
  //       </div>
  //     </div>
  //   </>
  // );
};
