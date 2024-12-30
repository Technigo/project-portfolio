import weather from "../assets/Weather.jpg";
import movie from "../assets/Movie.jpg";
import music from "../assets/Music.jpg";

import './TopImages.css';

export const TopImages = () => (
  <div className="img-container"> {/* Lägg till img-container här */}
    <div className="image-wrapper">
      <img className="image-1" src={movie} alt="Top image 1" />
      <img className="image-2" src={weather} alt="Top image 2" />
      <img className="image-3" src={music} alt="Top image 3" />
    </div>
  </div>
);
