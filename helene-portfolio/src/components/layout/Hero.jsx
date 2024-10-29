import helene from "../../assets/images/helene-westrin.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="grid-container">
        <div className="col-12">
          <h1 className="hero__title">
            <div className="pill">
              <img
                className="pill__avatar"
                width="72"
                height="72"
                alt=""
                src={helene}
              />
              <span className="pill__text">
                Hi, I&apos;m Helene! <span className="wave">👋</span>
              </span>
            </div>
            A product designer with a knack for frontend finesse, creating
            digital experiences that put people first — always.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
