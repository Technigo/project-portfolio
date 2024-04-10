import { useState, useEffect } from "react";
import { Profile } from "./Sections/Profile/Profile";
import { Tech } from "./Sections/Tech/Tech";
import { Projectlist } from "./Sections/Projects/ProjectList";
// import { Words } from "./components/Words";
import { Skills } from "./Sections/Skills/Skills";
import { Talk } from "./Sections/Talk/Talk";
import { Footer } from "./Sections/Footer/Footer";
import "./App.css";

export const App = () => {
  const [fetched, setFetched] = useState(false);
  const gitHubRepo = "https://api.github.com/users/Looziolooz/repos";

  useEffect(() => {
    setFetched(false);
    fetch(gitHubRepo)
      .then((result) => result.json())
      .then(() => {
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
      {fetched ? (
        <Projectlist />
      ) : (
        <div className="projectlist">
          <p>Loading...</p>
        </div>
      )}
      <Skills />
      <Talk />
      <Footer />
    </div>
  );
};
