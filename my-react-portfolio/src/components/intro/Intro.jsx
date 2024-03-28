import { useRef } from "react";
import { Header } from "../common/Header";
import { Image } from "../common/Image";
import { Paragraph } from "../common/Paragraph";
import arrowImage from "/public/icons/Arrow.svg";
import "../../components/intro/intro.css";
import "../../components/common/common.css";
import { Tech } from "../tech/Tech";

//Define the Intro component
export const Intro = () => {
  const techSectionRef = useRef(null); // Create a ref for the Tech Section

  const handleArrowClick = () => {
    // Scroll to the Tech section when the arrow is clicked
    techSectionRef.current.scrollIntoView({ behaviour: "smooth" });
  };
  // Define the introduction text
  const introText =
    "Maria-Manuela, a frontend developer, excels in crafting user-friendly applications with a focus on accessibility. Her dedication to inclusivity and innovative solutions sets her apart in the technology field.";

  // Return the JSX structure of the Intro component
  return (
    <header tabIndex="0">
      <section className="intro-section">
        <Image
          sectionClassName={"profile-image"}
          elementClassName={"circle-image"}
          src="public/images/profile.jpg"
          alt="Introduction Image of Maria-Manuela"
        />
        <section className="headings">
          <Header
            level={4}
            text="Hello, I´m Maria-Manuela"
            aria-label="user gretting"
            className="header-h4"
          />
          <Header
            level={2}
            text="Frontend Developer"
            aria-label="Frontend Developer"
            className="header-h2"
          />
        </section>
        <section className="intro-text">
          <Paragraph text={introText} />
        </section>
        <div className="arrow-container" onClick={handleArrowClick}>
          <img src={arrowImage} alt="Animated Arrow" className="arrow" />
        </div>
      </section>
      <Tech refProp={techSectionRef} />
    </header>
  );
};

/* 
The tabIndex attribute in HTML specifies whether an element is focusable and determines its position in the tabbing order within the document when users navigate through it using the keyboard's Tab key. Setting tabIndex to "0" on an element makes it programmatically focusable, meaning you can use JavaScript to give it focus. Improves accessibility for users who navigate using the keyboard or assistive technologies. */

/* Tech section is implemented as another component. pass a function from Intro to the component Tech  which can call to trigger the scroll*/
