import "./About.css";

export const About = () => {
  return (
    <div className="intro-div">
      <div className="intro-title">
        <h2 className="title-name">Hi, I'm Frida Forser,</h2>
        <h1 className="title-desc">A passionate problem solver with coding skills</h1>
      </div>
      <div className="intro-text">
        <img src="src\assets\FridaForser.png" width="200px" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
          delectus corrupti. Minus ex dolore temporibus aperiam corrupti saepe
          impedit nisi quidem quia neque! Facilis ea harum eius accusantium
          nobis veritatis!
        </p>
      </div>
      <img className="arrow-seafoam" src="src\assets\arrow_seafoam.png" width="60px" />
    </div>

    
  );
};
