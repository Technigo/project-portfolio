import "./FeaturedProjects.css";

import { useEffect, useState } from "react";

export const FeaturedProjects = () => {
  const [myGits, setMyGits] = useState([]);

  const myGitHubURL = "https://api.github.com/users/BeckieMorton/repos";

  const sortedbyPush =
    "https://api.github.com/users/BeckieMorton/repos?sort=pushed_at";

  const formatGitName = (name) => {
    let newName = name.split("-").join(" ");
    console.log(newName);

    const capitals = newName.split(" ");
    for (var i = 0; i < capitals.length; i++) {
      capitals[i] = capitals[i].charAt(0).toUpperCase() + capitals[i].slice(1);
    }

    const newCapitalisedName = capitals.join(" ");
    console.log(newCapitalisedName);

    return newCapitalisedName;
  };

  useEffect(() => {
    getMyProjects();
  }, []);

  const getMyProjects = () => {
    fetch(sortedbyPush)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyGits(data);
      })
      .catch((error) => console.error("Failed to fetch info", error));
  };

  //----///

  const topicsArray = myGits.filter(
    (item) => item.topics && item.topics.includes("portfolio")
  );

  //slice array so we only display first 6 github projects
  //let first6Gits = myGits.slice(0, 6);

  return (
    <>
      <div className="featured-projects-container">
        <h1 className="featured-projects-heading">Featured Projects</h1>
        {topicsArray.map((myGit) => (
          <div className="projects-parent" key={myGit._id}>
            <div className="projects-child">
              <img className="projects-img" src="/Assets/airport.jpg" />
            </div>
            <div className="projects-child">
              <h2>{formatGitName(myGit.name)}</h2>
              <p>{myGit.description}</p>
            </div>
            <div className="projects-child">
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
                <a
                  target="_blank"
                  className="live-code-link"
                  href={myGit.homepage}
                  key={myGit.id}
                  rel="noreferrer noopener"
                >
                  <img
                    className="live-demo-button"
                    src="\Assets\Live-Demo-Button.png"
                    alt="live demo"
                  />
                </a>
                <a
                  target="_blank"
                  className="my-git-hub-link"
                  href={myGit.html_url}
                  key={myGit.id}
                  rel="noreferrer noopener"
                >
                  <img
                    className="view-code-button"
                    src="\Assets\View-Code-Button.png"
                    alt="view code"
                  />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
