import { ProfileImage } from "../profileImage/ProfileImage";
import { Heading } from "../heading/Heading";
import "./Introduction.css";

export const Introduction = () => {
  return (
    <section className="flex intro-section">
      <div className="flex intro-container">
        <ProfileImage />

        {/* <div className="flex intro-image"></div> */}
        <div className="flex intro-wrapper">
          <p className="welcome">Hi, I&apos;m Eliane</p>
          <Heading
            level="1"
            text="Project Manager & Frontend Developer"
            className="blue"
          />
        </div>
        <div className="flex text-wrapper">
          <p>
            I&#39;m baby lomo kickstarter celiac keffiyeh austin shoreditch
            seitan sustainable. Paleo pickled pour-over gastropub. Godard umami
            biodiesel, small batch meggings portland farm-to-table chambray
            slow-carb echo park enamel pin man braid letterpress prism. Shaman
            selvage kitsch plaid fam meggings forage VHS organic post-ironic
            drinking vinegar vice bruh narwhal vinyl. Locavore literally cliche
            next level seitan copper mug.
          </p>
        </div>
        <button className="arrow-container">
          <img src="../arrow.svg" alt="scroll-down-button" />
        </button>
      </div>
    </section>
  );
};
