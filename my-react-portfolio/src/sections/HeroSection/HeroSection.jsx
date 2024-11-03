import './HeroSection.css'; 
import scrollArrow from '../../assets/Arrow.svg';
import SectionTitle from '../../ui/SectionTitle';

const HeroSection = ({ name, title, description, imageSrc }) => {
  return (
    <div className="hero-box">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Hi, I’m {name}</h1>
          <SectionTitle color="#0041ff">{title}</SectionTitle>
          <div className="hero-description">
            <img src={imageSrc} alt={`${name}'s photo`} className="hero-image" />
            <p>{description}</p>
          </div>
        </div>
        <div className="hero-scroll">
          <img src={scrollArrow} alt="Scroll down arrow" className="scroll-arrow-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
