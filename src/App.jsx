import { Header } from "./sections/Header/Header";
import { Tech } from "./sections/Tech/Tech";
import { Projects } from "./sections/Projects/Projects";
// import { MyWords } from "./sections/MyWords/MyWords";
import { Skills } from "./sections/Skills/Skills";
import { LetsTalk } from "./sections/LetsTalk/LetsTalk";
import { Footer } from "./sections/Footer/Footer";
import { useEffect, useState } from "react";
import "./App.css";

export const App = () => {
  const [repoList, setRepoList] = useState([]);
  const [loading, setLoading] = useState(true);

  const repoNames = [
    "Final-project",
    "Project-Chatbot",
    "Project_Music_Releases_vite",
    "Project-QR-code-generator",
    "Project_Weather_app",
    "Project-Quiz",
  ];

  const apiCall = async () => {
    try {
      const promises = repoNames.map((name) =>
        fetch(`https://api.github.com/repos/Kroluna/${name}`).then((response) =>
          response.json()
        )
      );

      const repos = await Promise.all(promises);
      setRepoList(repos.filter((repo) => repo));
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    apiCall();
    console.log(repoList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Tech />
      {!loading ? <Projects projectData={repoList} /> : <p>Loading...</p>}
      {/* <MyWords /> */}
      <Skills />
      <LetsTalk />
      <Footer />
    </>
  );
};

export default App;
