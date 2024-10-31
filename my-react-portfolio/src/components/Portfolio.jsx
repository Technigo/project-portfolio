import { BtnLive } from './ButtonLive.jsx';
import { BtnMore } from './ButtonMore.jsx';
import { Tag } from './Tag.jsx';
import { Info } from './Projects.jsx'
import { TopImages } from './TopImages.jsx'
import { HeaderIntro } from './Header.jsx'
import { BioSection } from './MyBio.jsx'


export const Portfolio = () => {
  return (
    <>
      <HeaderIntro />
      <TopImages />
      <BioSection />
      <BtnLive />
      <BtnMore />
      <Tag />
      <Info />
    </>
  );
};