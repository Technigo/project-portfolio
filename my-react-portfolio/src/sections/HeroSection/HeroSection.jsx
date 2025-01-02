import './HeroSection.css';
import scrollArrow from '../../assets/Arrow.svg';

const HeroSection = ({ name, title, description, imageSrc }) => {
  return (
    <div className="hero-box">
      <div className="hero-section">
        {/* Hero Content */}
        <div className="hero-content">
          <h1>Hi, I’m {name}</h1>
          <h2>{title}</h2>
          <div className="hero-description">
            <img 
              src={imageSrc} 
              alt={`${name}'s profile`} 
              className="hero-image" 
            />
            <p>{description}</p>
          </div>
        </div>
        
        {/* Scroll Arrow */}
        <div className="hero-scroll">
          <img 
            src={scrollArrow} 
            alt="Scroll down arrow" 
            className="scroll-arrow-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
