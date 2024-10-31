import "./Footer.css";
import { Heading } from "/src/components/typography/Heading.jsx";
import { Image } from "/src/components/images/Image.jsx";

export const Footer = () => {
  return (
    <footer className="contact-container">
      <section className="contact-wrapper">
        <Heading
          level={1}
          text="Let's talk"
          aria-label="This is the main heading"
          className="contact-heading"
        />
        <Image
          sectionClassName={"profile-img"}
          elementClassName={"circle-img"}
          link={"/assets/profile-img-zoe.jpg"}
          ImageAltText={"Profile Image of zoe"}
        />
        <div className="contact-info">
          <Heading level={4} text={"Zoe Lindqvist"} />
          <a href="tel:+762704816">
            <Heading level={4} text={"+46(0)762 704 816"} />
          </a>
          <a href="mailto:zoe.lindqvist@gmail.com">
            <Heading level={4} text={"zoe.lindqvist\n@gmail.com"} />
          </a>
        </div>
        <div className="icons">
          <a href="https://www.linkedin.com/in/zoe-lindqvist/">
            <Image
              sectionClassName={"icon-box"}
              elementClassName={"icon"}
              link={"/assets/icons/linkedin.svg"}
              ImageAltText={"Link to LinkedIn"}
            />
          </a>
          <a href="https://github.com/zoe-lindqvist">
            <Image
              sectionClassName={"icon-box"}
              elementClassName={"icon"}
              link={"/assets/icons/github.svg"}
              ImageAltText={"Link to GitHub"}
            />
          </a>
          <a href="https://stackoverflowteams.com/c/technigo/users/647/">
            <Image
              sectionClassName={"icon-box"}
              elementClassName={"icon"}
              link={"/assets/icons/stackoverflow.svg"}
              ImageAltText={"Link to StackOverflow"}
            />
          </a>
          <a href="https://www.instagram.com/zjazzles/">
            <Image
              sectionClassName={"icon-box"}
              elementClassName={"icon"}
              link={"/assets/icons/instagram.svg"}
              ImageAltText={"Link to Instagram"}
            />
          </a>
        </div>
      </section>
    </footer>
  );
};
