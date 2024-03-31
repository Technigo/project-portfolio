import "./App.css";

import { Introduction } from "./components/1.Introduction/Introduction.jsx";
import { Tech } from "./components/2.Tech/Tech.jsx";
import { ProjectContainer } from "./components/3.Projects/ProjectContainer.jsx";

export const App = () => {
  return (
    <div>
      <Introduction />
      <Tech />
      <ProjectContainer />
    </div>
  );
};

export default App;
