// import { useState } from "react";
import "./App.css";
import { Header } from "./sections/Header/Header";
import { Tech } from "./sections/Tech/Tech";
import { Projects } from "./sections/Projects/Projects";
// import { MyWords } from "./sections/MyWords/MyWords";
import { Skills } from "./sections/Skills/Skills";
import { LetsTalk } from "./sections/LetsTalk/LetsTalk";
import { Footer } from "./sections/Footer/Footer";
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
      {/* <MyWords /> */}
      <Skills />
      <LetsTalk />
      <Footer />
    </>
  );
};

export default App;
