import img1 from "../../../assets/img1.jpeg";
import img2 from "../../../assets/img2.jpeg";
import img3 from "../../../assets/img3.jpeg";
import "./Library.css"

export const images = {
  img1,
  img2,
  img3
};

export const Library = () => {
  return (
    <div className="library-container">
      <div className="image-container">
        <img className="img1" src={images.img1} alt="Image 1" />
        <img className="img2" src={images.img2} alt="Image 2" />
        <img className="img3" src={images.img3} alt="Image 3" />
      </div>
    </div>
  );
};