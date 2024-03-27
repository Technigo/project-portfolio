import { useState, useEffect } from "react";
import { Profile } from "./components/Profile";
import { Tech } from "./components/Tech";
import { Projectlist } from "./components/Projectlist";
// import { Words } from "./components/Words";
import { Skills } from "./components/Skills";
import { Talk } from "./components/Talk";
import { Footer } from "./components/Footer";
import "./App.css";

export const App = () => {
  const [repos, setRepos] = useState([]);
  const [fetched, setFetched] = useState(false);
  const gitHubRepo = "https://api.github.com/users/Martin-Joensson/repos";

  useEffect(() => {
    setFetched(false);
    fetch(gitHubRepo)
      .then((result) => result.json())
      .then((json) => {
        setRepos(json);
        setFetched(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("Repos: ",  repos);

  return (
    <div className="App">
      <Profile />
      <Tech />
      {fetched && fetched ? (
        <Projectlist />
      ) : (
        <div className="thought">
          <p>Loading...</p>
        </div>
      )}
      {/* <Words />  add when written articles*/}
      <Skills />
      <Talk />
      <Footer />
    </div>
  );
};
