import style from './Photos.module.css';
//Hopefully, all my photos are in one place now and I can render them where I need them. 
import { useState } from 'react';


export const Photos = ({ selectedMode, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const photosArray = [
    { source: './Images/ME!.png', mode: 'me' },
    { source: './Images/Vector 1.png', mode: 'arrow' },
    // { source: './Images/Btn - linkedin.png', mode: 'linkedin' },
    { source: './Images/github.png', mode: 'github' },
    { source: './Images/githubHover.png', mode: 'githubHover' },
  ];

  const selectedPhoto = photosArray.find(img => {
    if (selectedMode === 'github' && isHovered) {
      return img.mode === 'githubHover';
    }
    return img.mode === selectedMode;
  });

  return (
    <div
      className={`${style.photoContainer} ${className || ''}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {selectedPhoto &&
        <img
          src={selectedPhoto.source}
          className={`${style.photo} ${style[selectedPhoto.mode] || ''}`}
        />
      }
    </div>
  );
}



