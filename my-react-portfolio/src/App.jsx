import { useRef } from "react";
import FeatureProjects from "./components/FeatureProjects";
import Introduction from "./components/Introduction";

import Tech from "./components/Tech";
import { Footer } from "./components/Footer";
import { ContactInfo } from "./components/ContactInfo";
import { SkillPage } from "./components/SkillPage";

export const App = () => {
  const techRef = useRef(null);

  const scrollToTech = () => {
    techRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Introduction scrollToTech={scrollToTech} />
      <div ref={techRef}>
        <Tech />
      </div>
      <FeatureProjects />

      <SkillPage />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default App;
