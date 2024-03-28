import { useState, useEffect } from "react";
import { Profile } from "./Sections/Profile/Profile";
import { Tech } from "./Sections/Tech/Tech";
import { Projectlist } from "./Sections/Projects/Projectlist";
// import { Words } from "./components/Words";
import { Skills } from "./Sections/Skills/Skills";
import { Talk } from "./Sections/Talk/Talk";
import { Footer } from "./Sections/Footer/Footer";
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

  return (
    <div className="App">
      <Profile />
      <Tech />
      {fetched && fetched ? (
        <Projectlist />
      ) : (
        <div className="projectlist">
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
