import { TopImages } from './TopImages.jsx'
import { HeaderIntro } from './Header.jsx'
import { BioSection } from './MyBio.jsx'
import { ProjectSection } from './sections/ProjectSection.jsx';
import { TechSection } from './MyTech.jsx'
import { Skill } from './MySkills.jsx'
import { ArticleSection } from './sections/ArticleSection.jsx';
import { ContactInfo } from './ContactMe.jsx';

import "../App.css";


export const Portfolio = () => {
  return (
    <>
      <HeaderIntro />
      <TopImages />
      <BioSection />
      <ProjectSection />
      <TechSection />
      <Skill />
      <ArticleSection />
      <ContactInfo />

    </>
  );
};