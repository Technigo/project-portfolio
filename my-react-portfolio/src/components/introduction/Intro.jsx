import { Header } from "../common/Header";
import { Image } from "../common/Image";
import { Paragraph } from "../common/Paragraph";
import { Tech } from "../tech/Tech";
import { useRef } from "react";
import arrowImage from "/icons/Arrow.svg";
import "./intro.css";
import "../../components/common/common.css";

//Define the Intro component
export const Intro = () => {
  // Define the introduction text
  const techSectionRef = useRef(null); // Create a ref for the Tech Section

  const handleArrowClick = () => {
    // Scroll to the Tech section when the arrow is clicked
    techSectionRef.current.scrollIntoView({ behaviour: "smooth" });
  };
  const introText =
    "I am a full stack developer, who excels in crafting user-friendly applications with a focus on accessibility. My dedication is to inclusivity and innovative solutions whic sets me apart in the technology field.";

  // Return the JSX structure of the Intro component
  return (
    <header tabIndex="0">
      <section className="intro-section">
        <Image
          sectionClassName={"profile-image"}
          elementClassName={"circle-image"}
          src="/images/profile.jpg"
          alt="Profile picture of Maria-Manuela"
        />
        <section className="headings">
          <Header
            level={4}
            text="Hello, I´m Maria-Manuela"
            aria-label="user gretting"
            className="intro-heading"
          />
          <Header
            level={2}
            text="Full-Stack Developer"
            aria-label="Full-Stack Developer"
            className="intro-subheading"
          />
        </section>
        <Paragraph text={introText} className="custom-paragraph" />

        <section className="arrow-container">
          <img
            src={arrowImage}
            alt="Animated Arrow"
            className="arrow"
            onClick={handleArrowClick}
          />
        </section>
      </section>
      <Tech refProp={techSectionRef} />
    </header>
  );
};

/* 
The tabIndex attribute in HTML specifies whether an element is focusable and determines its position in the tabbing order within the document when users navigate through it using the keyboard's Tab key. Setting tabIndex to "0" on an element makes it programmatically focusable, meaning you can use JavaScript to give it focus. Improves accessibility for users who navigate using the keyboard or assistive technologies. */

/* Tech section is implemented as another component. pass a function from Intro to the component Tech  which can call to trigger the scroll*/
