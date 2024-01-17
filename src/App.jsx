// import { useState } from "react";
import "./App.css";
import { Header } from "./sections/Header";
import { Tech } from "./sections/Tech";
import { Projects } from "./sections/Projects";
// import { MyWords } from "./sections/mywords/MyWords";
// import { Skills } from "./sections/skills/Skills";
// import { LetsTalk } from "./sections/letstalk/LetsTalk";
import { Footer } from "./sections/Footer";
import { useEffect, useState } from "react";
export const App = () => {
  const [repoList, setRepoList] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiCall = async () => {
    await fetch(
      `https://api.github.com/users/Kroluna/repos?sort=pushed&direction=desc`
    )
      .then((response) => response.json())
      .then((data) => {
        const fiveLatest = data.slice(0, 5);
        setRepoList(fiveLatest);
        setLoading(!loading);
        console.log(repoList);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    apiCall();
    // console.log(repoList);
  }, []);

  return (
    <>
      <Header />
      <Tech />
      {!loading ? (
        <Projects projectData={repoList} />
      ) : (
        console.log("Loading...")
      )}
      <Footer />
    </>
  );
};

export default App;
