import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { useEffect, useState } from "react";

const App = () => {
  //State that tracks repos by latest push
  const [sortedByDate, setSortedByDate] = useState([]);
  const apiCall = () => {
    fetch(
      `https://api.github.com/users/andrkavr/repos?sort=pushed&direction=desc`
    )
      .then((response) => response.json())
      .then((data) => {
        data.map((item) => {
          console.log(item.name);
        });
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <div className="container">
      <Header />
      <Footer />
    </div>
  );
};

export default App;
