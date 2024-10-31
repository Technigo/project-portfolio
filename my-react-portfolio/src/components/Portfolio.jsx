import { BtnLive } from './buttons/ButtonLive.jsx';
import { BtnMore } from './buttons/ButtonMore.jsx';
import { Tag } from './Tag.jsx';
import { TopImages } from './TopImages.jsx'
import { HeaderIntro } from './Header.jsx'
import { BioSection } from './MyBio.jsx'
import { ProjectSection } from './sections/ProjectSection.jsx';

import "../App.css";


export const Portfolio = () => {
  return (
    <>
      <HeaderIntro />
      <TopImages />
      <BioSection />
      <BtnLive />
      <BtnMore />
      <Tag />
      <ProjectSection />
    </>
  );
};