import style from './Photos.module.css';
//Hopefully, all my photos are in one place now and I can render them where I need them. 
import { useState } from 'react';


export const Photos = ({ selectedMode, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const photosArray = [
    { source: './Images/ME!.png', mode: 'me' },
    { source: './Images/Vector 1.png', mode: 'arrow' },

    { source: './Images/github.png', mode: 'github' },
    { source: './Images/githubHover.png', mode: 'githubHover' },
    //{ source: './Images/linkedin.png', mode: 'linkedin' },
    //{ source: './Images/linkedinHover.png', mode: 'linkedinHover' },

    { source: './Images/ViewCode.png', mode: 'ViewCode' },
    { source: './Images/ViewCodeHover.png', mode: 'ViewCodeHover' },
    { source: './Images/Live.png', mode: 'Live' },
    { source: './Images/LiveHover.png', mode: 'LiveHover' },
  ];

  const selectedPhoto = photosArray.find(img => {
    if (selectedMode === 'github' && isHovered) {
      return img.mode === 'githubHover';
    }
    if (selectedMode === 'ViewCode' && isHovered) {
      return img.mode === 'ViewCodeHover';
    }
    if (selectedMode === 'Live' && isHovered) {
      return img.mode === 'LiveHover';
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



