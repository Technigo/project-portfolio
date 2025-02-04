import "./Img.css";
import TodoApp from "/assets/todoappimg-min.webp";
import HappyThoughtImg from "/assets/happythoughtblue-min.webp";
import FirstAidKit from "/assets/Firstaidkit-min.webp";

const Img = () => {
  return (
    <section className="image-section">
      <img src={HappyThoughtImg} alt="Happy Thoughts App with a light blue background" className="image-grey" />
      <img src={FirstAidKit} alt="The band First Aid Kit with a blue sky in the background" className="image-pink" />
      <img src={TodoApp} alt="To-Do List app with a cute penguin" className="image-red" />
    </section>
  );
};

export default Img;
