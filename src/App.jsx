import "./App.css";

import { Introduction } from "./components/1.Introduction/Introduction.jsx";
import { Tech } from "./components/2.Tech/Tech.jsx";
import { Projects } from "./components/3.Projects/Projects.jsx";

export const App = () => {
  return (
    <div>
      <Introduction />
      <Tech />
      <Projects />
    </div>
  );
};

export default App;
