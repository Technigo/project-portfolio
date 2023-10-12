import Introduction from "./Page/Introduction";
import Tech from "./Page/Tech";
import FeaturedProjects from "./Page/FeaturedProjects";
import MyWords from "./Page/MyWords";
import Skills from "./Page/Skills";
import Contact from "./Page/Contact";

export const App = () => {
  return (
    <div>
      <Introduction />
      <Tech />
      <FeaturedProjects />
      <MyWords />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
