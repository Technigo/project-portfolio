import "./FeaturedProjects.css";

import { useEffect, useState } from "react";
//import moment from "moment";
//{moment(myGit.created_at).format("MMMM YYYY")}

export const FeaturedProjects = () => {
  //URL to my github: https://api.github.com/users/BeckieMorton/repos

  const [myGits, setMyGits] = useState([]);

  const myGitHubURL = "https://api.github.com/users/BeckieMorton/repos";

  useEffect(() => {
    getMyProjects();
  }, []);

  const getMyProjects = () => {
    fetch(myGitHubURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyGits(data);
      })
      .catch((error) => console.error("Failed to fetch info", error));
  };

  console.log(myGits);
  //slice array so we only display first 6 github projects
  let first6Gits = myGits.slice(0, 5);

  return (
    <>
      <div className="featured-projects-container">
        {" "}
        <h1>Featured Projects</h1>
        {first6Gits.map((myGit) => (
          <div className="projects-parent" key={myGit._id}>
            <div className="projects-child">
              <img
                className="project-img"
                src="/Assets/featured-projects-temp.jpg"
              />
            </div>
            <div className="projects-child">
              <h2>{myGit.name}</h2>
              <p>
                {myGit.description}
                <p>
                  <span style={{ backgroundColor: "black", color: "white" }}>
                    &nbsp;HTML5&nbsp;
                  </span>
                  &nbsp;
                  <span style={{ backgroundColor: "black", color: "white" }}>
                    &nbsp;CSS3&nbsp;
                  </span>
                  &nbsp;
                  <span style={{ backgroundColor: "black", color: "white" }}>
                    &nbsp;React&nbsp;
                  </span>
                  <p>
                    <img
                      className="live-demo-button"
                      src="\Assets\Live-Demo-Button.png"
                      alt="live demo"
                    />
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
                </p>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
