import Pill from "../common/Pill";
import { H1 } from "../common/Typography";
import helene from "../../assets/images/helene-westrin.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero section-spacing-horizontal">
      <div className="grid-container">
        <div className="col-12">
          <H1 className="hero__title">
            <Pill image={helene}>
              Hi, I&apos;m Helene! <span className="wave">👋</span>
            </Pill>
            A product designer with a knack for frontend finesse, creating
            digital experiences that put people first — always.
          </H1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
