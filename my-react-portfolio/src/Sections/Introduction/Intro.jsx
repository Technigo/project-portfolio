import "./intro.css";
import { CircleImage } from "../../ReusableComponents/Images/CircleImage";
import MainTitle from "../../ReusableComponents/Texts/MainTitle";
import { NormalText } from "../../ReusableComponents/Texts/NormalText";
import { SmallSubTitle } from "../../ReusableComponents/Texts/SmallSubTitle";
//import hamdi from "../../assets/hamdi.jpg";
import hamdi from "../../../public/assets/hamdi.jpg";

import { ArrowDownAnimation } from "../../ReusableComponents/Animation/Arrow/ArrowDownAnimation";

const introText =
  "Meet Hamdi, an exceptional full-stack developer known for her innovative solutions and exceptional coding abilities. With expertise spanning front-end and back-end development, she creates user-friendly applications and solves complex issues with ease. Her drive for excellence and problem-solving makes her a valuable asset to any project and a standout in the technology field.";

export const Intro = () => {
  return (
    <header>
      <section className="profile-image">
        <CircleImage
          className="profile-img"
          src={hamdi}
          alt="hamdis profile image"
        />
      </section>
      <section className="headings">
        <SmallSubTitle className="subtitle" text={"This is Hamdi Olad"} />
        <MainTitle className="maintitle" text={"Frontend Developer"} />
      </section>
      <section className="intro-text">
        <NormalText className="normaltext" text={introText} />
      </section>
      <div className="arrow-container">
        <ArrowDownAnimation
          className="arrow-down"
          aria-label="this is a arrow down"
        />
      </div>
    </header>
  );
};
