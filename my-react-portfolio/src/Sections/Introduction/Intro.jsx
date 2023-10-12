import "./intro.css";
import { CircleImage } from "../../ReusableComponents/Images/CircleImage";
import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";
import { NormalText } from "../../ReusableComponents/Texts/NormalText";
import { SubTitle } from "../../ReusableComponents/Texts/SubTitle";

const introText =
  "Hamdi is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.";

export const Intro = () => {
  return (
    <header>
      <section className="circle-image">
        <CircleImage />
      </section>
      <section className="sub-title">
        <SubTitle text={"Hi, Im Hamdi Olad"} />
      </section>
      <section className="main-title">
        <MainTitle text={"Frontend Dev."} />
      </section>
      <section className="normal-text">
        <NormalText text={introText} />
      </section>
    </header>
  );
};
