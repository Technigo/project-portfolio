import { ContactInfo } from "./ContactInfo";
import { FeaturedProjects } from "./FeaturedProjects";
import { Footer } from "./Footer";
import { TopSection } from "./TopSection";
import { Skills } from "./Skills";
import { Tech } from "./Tech";

export const Home = () => {
  return (
    <>
      <TopSection />
      <Tech />
      <FeaturedProjects />
      <Skills />
      <ContactInfo />
      <Footer />
    </>
  );
};
