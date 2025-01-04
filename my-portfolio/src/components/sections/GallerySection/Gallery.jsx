import { images } from "../../ui/Images/Images";
import "./Gallery.css";

export const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="image-container">
        <div className="image-wrapper"> 
        <img className="img1" src={images.img1} alt="Image 1" />
        <img className="img2" src={images.img2} alt="Image 2" />
        <img className="img3" src={images.img3} alt="Image 3" />
        </div>
      </div>
    </div>
  );
};