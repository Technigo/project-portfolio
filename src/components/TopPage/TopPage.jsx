import Arrow from '../../../public/Images/Arrow.svg';
import './TopPage.css';
import { useState, useEffect } from 'react';

export const TopPage = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='presentation-wrapper'>
      <div className='presentation'>
        {windowWidth <= 600 ? (
          // For screens 600px and under
          <>
            <img src="Headshot.jpeg" alt="isaac headshot" className='profile-image' />
            <div className='presentation-titles-container'>
              <h3>Hi, I'm Isaac Kamran</h3>
              <h1 className='presentation-bigtitle'>Frontend Developer</h1>
            </div>
            <p className='presentation-text'>Isaac is an exceptional developer known for his innovative solutions and exceptional coding abilities. He creates user-friendly applications and solves complex issues with ease. His drive for excellence makes him a valuable asset to any project and a standout in the technology field.</p>
            <div className='arrow-wrapper'>
              <img src={Arrow} alt='Arrow pointing down'></img>
            </div>
          </>
        ) : (
          // For screens larger than 600px
          <>
              <div className='presentation-titles-container'>
                <h3>Hi, I'm isaac Kamran</h3>
                <h1>Frontend Developer</h1>
              </div>
            <div className='presentation-content'>
            <img src="Headshot.jpeg" alt="Isaac headshot" className='profile-image' />
              <p className='presentation-text'>Isaac is an exceptional developer known for his innovative solutions and exceptional coding abilities. He creates user-friendly applications and solves complex issues with ease. His drive for excellence makes him a valuable asset to any project and a standout in the technology field.</p>
            </div>
            <div className='arrow-wrapper'>
              <img src={Arrow} alt='Arrow pointing down'></img>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


// Isaac is an exceptional developer known for his innovative solutions and exceptional coding abilities. He creates user-friendly applications and solves complex issues with ease. His drive for excellence makes him a valuable asset to any project and a standout in the technology field.