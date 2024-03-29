import { ProfileImage } from "../profileImage/ProfileImage";
import "./Introduction.css";

export const Introduction = () => {
  return (
    <section className="flex intro-section">
      <div className="flex intro-container">
        <ProfileImage />

        {/* <div className="flex intro-image"></div> */}
        <div className="flex intro-wrapper">
          <h5>Hi, I&#39;m Eliane Weber</h5>
          <h2 className="blue">Marketing Manager with coding skills</h2>
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
        <button>
          <img src="../arrow.svg" alt="scroll-down-button" />
        </button>
      </div>
    </section>
  );
};
