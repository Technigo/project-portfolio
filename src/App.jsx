// import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Bio } from "./sections/bio/Bio";
import { Tech } from "./sections/tech/Tech";
import { FeaturedProjects } from "./sections/featuredprojects/FeaturedProjects";
import { MyWords } from "./sections/mywords/MyWords";
import { Skills } from "./sections/skills/Skills";
import { LetsTalk } from "./sections/letstalk/LetsTalk";
import { useEffect, useState } from "react";

const App = () => {
  //State that tracks repos
  const [repoList, setRepoList] = useState([]);

  //State that tracks if the data from the API is loading
  const [loading, setLoading] = useState(true);

  //Call to GitHub API that sorts via latest push to each repo
  const apiCall = async () => {
    await fetch(
      `https://api.github.com/users/andrkavr/repos?sort=pushed&direction=desc`
    )
      .then((response) => response.json())
      .then((data) => {
        //Filter the repolist to the five latest project
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
    <div className="container">
      {/* <Header /> */}
      <Bio />
      <Tech />
      {!loading ? (
        <FeaturedProjects projectData={repoList} />
      ) : (
        console.log("Loading...")
      )}
      <MyWords />
      <Skills />
      <LetsTalk />
      <Footer />
    </div>
  );
};

export default App;
