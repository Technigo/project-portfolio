import { Header } from "../common/Header";
import { Image } from "../common/Image";
import { Paragraph } from "../common/Paragraph";
import "../../components/common/common.css";
import arrowImage from "/src/assets/icons/Arrow.svg";

//Define the Intro component
export const Intro = () => {
  // Define the introduction text
  const introText =
    "This is a brief introduction about myself and my portfolio. Feel free to explore!";

  // Return the JSX structure of the Intro component
  return (
    <header tabIndex="0">
      <section className="intro-section">
        <Image
          sectionClassName={"intro-image"}
          elementClassName={"circle-image"}
          src="public/profile.jpg"
          alt="Introduction Image of Maria-Manuela"
        />
        <section className="headings">
          <Header
            level={4}
            text="Hello, I´m Maria-Manuela"
            aria-label="user gretting"
            className="hello-text"
          />
          <Header
            level={2}
            text="Frontend Developer"
            aria-label="Frontend Developer"
            className="intro-h2"
          />
        </section>
        <section className="intro-text">
          <Paragraph text={introText} />
        </section>
        <div className="arrow-container">
          <img src={arrowImage} alt="Animated Arrow" className="arrow" />
        </div>
      </section>
    </header>
  );
};

/* 
The tabIndex attribute in HTML specifies whether an element is focusable and determines its position in the tabbing order within the document when users navigate through it using the keyboard's Tab key. Setting tabIndex to "0" on an element makes it programmatically focusable, meaning you can use JavaScript to give it focus. Improves accessibility for users who navigate using the keyboard or assistive technologies. */
