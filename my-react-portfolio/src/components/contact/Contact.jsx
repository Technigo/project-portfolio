import { Header } from "../common/Header";
import { Image } from "../common/Image";

import "./contact.css";

export const Contact = () => {
  return (
    <section className="contact-container">
      <section className="contact-wrapper">
        <Header
          level={1}
          text="Let's talk!"
          aria-label="This is contact heading"
          className="contact-heading"
        />
        <Image
          sectionClassName={"profile-image"}
          elementClassName={"circle-image"}
          src={"/images/profile.jpg"}
          alt={"Profile picture of Maria-Manuela"}
        />
        <div className="contact-info">
          <Header level={4} text={"Maria-Manuela Bîrnat"} />
          <a href="tel:+45 91268018">
            <Header level={4} text={"+45 91 26 80 18"} />
          </a>
          <a href="mailto:manuelabirnat@gmail.com">
            <Header level={4} text={"manuelabirnat@gmail.com"} />
          </a>
          <div className="icons">
            <a href="https://www.linkedin.com/in/maria-manuelabirnat/">
              <Image
                sectionClassName={"icon-box"}
                elementClassName={"icon"}
                src={"/icons/linkedin.svg"}
                alt={"Link to LinkediIn"}
              />
            </a>
            <a href="https://github.com/Maria-Manuela">
              <Image
                sectionClassName={"icon-box"}
                elementClassName={"icon"}
                src={"/icons/github1.svg"}
                alt={"Link to GitHub"}
              />
            </a>
            <a href="https://www.instagram.com/manuelabirnat/">
              <Image
                sectionClassName={"icon-box"}
                elementClassName={"icon"}
                src={"/icons/instagram.svg"}
                alt={"Link to Instagram"}
              />
            </a>
            <a href="https://stackoverflowteams.com/c/technigo/users/605/?tab=profile">
              <Image
                sectionClassName={"icon-box"}
                elementClassName={"icon"}
                src={"/icons/stackoverflow.svg"}
                alt={"Link to StackOverflow"}
              />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};
