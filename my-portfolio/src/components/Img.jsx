import "./Img.css";
import TodoApp from "/public/assets/todoappimg.png";
import HappyThoughtImg from "/public/assets/happythoughtblue.png";
import FirstAidKit from "/public/assets/Firstaidkit.png";

const Img = () => {
  return (
    <section className="image-section">
      <img src={HappyThoughtImg} alt="Abstract art" className="image-grey" />
      <img src={FirstAidKit} alt="Abstract art" className="image-pink" />
      <img src={TodoApp} alt="Abstract art" className="image-red" />
    </section>
  );
};

export default Img;
