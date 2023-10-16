import './contact.css'
import { Heading } from '/src/components/typography/Heading.jsx';
import { Image } from '/src/components/images/Image.jsx';

export const Contact = () => {

    return (
        <footer className="contact-container">
            <section className='contact-wrapper'>
                <Heading
                    level={1} text="Let's talk"
                    aria-label="This is the main heading"
                    className="contact-heading"
                />
                <Image
                    sectionClassName={"profile-img"}
                    elementClassName={"circle-img"}
                    link={"/src/assets/profile-image.png"}
                    ImageAltText={"Profile Image of Maria"}
                />
                <div className="contact-info">
                    <Heading level={3} text={"Maria Pettersson"} />
                    <a href="tel:+730300766">
                        <Heading level={3} text={"+46(0)730 300 766"} />
                    </a>
                    <a href="mailto:mariateresepettersson@gmail.com">
                        <Heading level={3} text={"mariateresepettersson@gmail.com"} />
                    </a>
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/mariateresepettersson">
                        <Image sectionClassName={"icon-box"} elementClassName={"icon"} link={"/src/assets/social-icons/linkedin.svg"} ImageAltText={"Link to LinkedIn"} />
                    </a>
                    <a href="https://github.com/mariateresepettersson">
                        <Image sectionClassName={"icon-box"} elementClassName={"icon"} link={"/src/assets/social-icons/github.svg"} ImageAltText={"Link to GitHub"} />
                    </a>
                    <a href="https://https://stackoverflowteams.com/c/technigo/users/492/?tab=profile">
                        <Image sectionClassName={"icon-box"} elementClassName={"icon"} link={"/src/assets/social-icons/stackoverflow.svg"} ImageAltText={"Link to StackOverflow"} />
                    </a>
                    <a href="https://www.instagram.com/grekmaria/">
                        <Image sectionClassName={"icon-box"} elementClassName={"icon"} link={"/src/assets/social-icons/instagram.svg"} ImageAltText={"Link to Instagram"} />
                    </a>
                </div>
                <div className="banner">
                    <Heading
                        level={3}
                        text="Maria Pettersson · Fullstack Developer · Maria Pettersson · Fullstack Developer · Maria Pettersson · Fullstack Developer"
                        aria-label="This is the main heading"
                        className="scroll-text"
                    />
                </div>
            </section>
        </footer>
    );
};