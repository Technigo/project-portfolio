import style from './Photos.module.css';
//Hopefully, all my photos are in one place now and I can render them where I need them. 
import { useState } from 'react';


export const Photos = ({ selectedMode, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const photosArray = [
    { source: './Images/ME!.png', mode: 'me', description: 'Portrait of me' },
    { source: './Images/Vector 1.png', mode: 'arrow', description: 'Arrow downwards' },
    { source: './Images/path.png', mode: 'waveLine', description: 'Wavy separation Line' },

    { source: './Images/github.png', mode: 'github', description: 'Button icon with Githublink' },
    { source: './Images/githubHover.png', mode: 'githubHover', description: 'Button icon Github hover' },
    //{ source: './Images/linkedin.png', mode: 'linkedin' },
    //{ source: './Images/linkedinHover.png', mode: 'linkedinHover' },

    { source: './Images/ViewCode.png', mode: 'ViewCode', description: 'Button icon to wiev code in Github' },
    { source: './Images/ViewCodeHover.png', mode: 'ViewCodeHover', description: 'Button icon to wiev code in Github hover' },
    { source: './Images/Live.png', mode: 'Live', description: 'Button icon to wiev the project live' },
    { source: './Images/LiveHover.png', mode: 'LiveHover', description: 'Button icon to wiev the project live hover' },
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


  if (selectedPhoto && selectedMode === 'waveLine') {
    const numberOfRepeats = 10;
    return (
      <div className={`${style.photoContainer} ${className || ''}`}>
        {Array.from({ length: numberOfRepeats }).map((_, index) => (
          <img key={index} src={selectedPhoto.source} alt={selectedPhoto.description} className={style[selectedPhoto.mode]} />
        ))}
      </div>
    );
  }



  return (
    <div
      className={`${style.photoContainer} ${className || ''}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {selectedPhoto &&
        <img
          src={selectedPhoto.source}
          alt={selectedPhoto.description}
          className={`${style.photo} ${style[selectedPhoto.mode] || ''}`}
        />
      }
    </div>
  );

}

