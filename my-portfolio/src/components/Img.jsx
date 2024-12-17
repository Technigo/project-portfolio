import "./Img.css";
import ImageRed from "../assets/ImageRed.jpeg";
import ImageGrey from "../assets/ImageGrey.jpeg";
import ImagePink from "../assets/ImagePink.jpeg";
import TodoApp from "/public/assets/todoappimg.png";
import MoviesImg from "/public/assets/moviesiteimg.png";
import WeatherImg from "/public/assets/weatherimg.png";
import BusinessImg from "/public/assets/businessimg.png";
import ChatImg from "/public/assets/chatimg.png";

const Img = () => {
  return (
    <section className="image-section">
      <img src={ChatImg} alt="Abstract art" className="image-grey" />
      <img src={MoviesImg} alt="Abstract art" className="image-pink" />
      <img src={TodoApp} alt="Abstract art" className="image-red" />
    </section>
  );
};

export default Img;
