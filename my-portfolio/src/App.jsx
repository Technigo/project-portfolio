// App.jsx

import { Bio } from "./Sections/Bio/Bio";
import { Skills } from "./Sections/Skills/Skills";
import { FeaturedProjects } from "./Sections/FeaturedProjects/FeaturedProjects";
import { Tech } from "./Sections/Tech/Tech";
import { Articles } from "./Sections/Articles/Articles";
import { Contact } from "./Sections/Contact/Contact";

export const App = () => {
  return (
    <>
      <Bio />
      <Skills />
      <FeaturedProjects />
      <Tech />
      <Articles />
      <Contact />
    </>
  );
};