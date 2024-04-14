import { Header } from "../common/Header";
import { Image } from "../common/Image";
import { Paragraph } from "../common/Paragraph";

import "./intro.css";
import "../../components/common/common.css";

//Define the Intro component
export const Intro = () => {
  // Define the introduction text

  const introText =
    "I am a frontend developer, who excels in crafting user-friendly applications with a focus on accessibility. My dedication is to inclusivity and innovative solutions whic sets me apart in the technology field.";

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
          />
          <Header
            level={2}
            text="Frontend Developer"
            aria-label="Frontend Developer"
          />
        </section>
        <div className="profile-text">
          <Paragraph text={introText} />
        </div>
      </section>
    </header>
  );
};

/* 
The tabIndex attribute in HTML specifies whether an element is focusable and determines its position in the tabbing order within the document when users navigate through it using the keyboard's Tab key. Setting tabIndex to "0" on an element makes it programmatically focusable, meaning you can use JavaScript to give it focus. Improves accessibility for users who navigate using the keyboard or assistive technologies. */
