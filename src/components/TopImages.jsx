import Top1 from "../assets/Top1.jpg";
import Top2 from "../assets/Top2.jpg";
import Top3 from "../assets/Top3.jpg";

import './TopImages.css';

export const TopImages = () => (
  <div className="img-container"> {/* Lägg till img-container här */}
    <div className="image-wrapper">
      <img className="image-1" src={Top1} alt="Top image 1" />
      <img className="image-2" src={Top2} alt="Top image 2" />
      <img className="image-3" src={Top3} alt="Top image 3" />
    </div>
  </div>
);
