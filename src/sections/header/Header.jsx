import "./Header.css";
import { Heading } from "/src/components/typography/Heading.jsx";
import { Image } from "/src/components/images/Image.jsx";
import { Paragraph } from "/src/components/typography/Paragraph.jsx";

const introText =
  "I’m a Junior Software Developer, currently pursuing a Bachelor’s in Computer & Systems Science at Stockholm University while building hands-on experience in web development through Technigo's bootcamp. With a background in teaching and linguistics, I bring good communication skills, adaptability and a keen eye for problem-solving. I’m looking for a place where I can combine my skills with my passion for tech — a team that values collaboration, learning and creating something meaningful together.";

export const Header = () => {
  return (
    // The main header element with a tabIndex for accessibility
    <header tabIndex="0">
      <section className="introduction">
        {/* Image component to display profile pic */}
        <Image
          sectionClassName={"profile-img"}
          elementClassName={"circle-img"}
          link={"/assets/profile-img-zoe.jpg"}
          ImageAltText={"Profile Image of Zoe"}
        />
        <section className="headings">
          {/* First heading element with greeting message */}
          <Heading
            level={4} //renders as <h4>
            text="Hi, I'm Zoe Lindqvist"
            aria-label="Developer greeting"
            className="header-h4"
          />
          <Heading
            level={2}
            text="Software Developer"
            aria-label="Software Developer"
            className="header-h2"
          />
        </section>
        <section className="intro-text">
          {/* Paragraph component to display the introduction text */}
          <Paragraph text={introText} />
        </section>
      </section>
    </header>
  );
};
