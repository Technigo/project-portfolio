import { Heading } from '/src/components/typography/Heading.jsx';
import { Image } from '/src/components/images/Image.jsx';

export const Contact = () => {

    return (
        <section className="contact">
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
            <Heading
                level={3}
                text="Maria Pettersson\n+46(0)730 30 07 66\nmariateresepettersson@gmail.com"
                aria-label="This is the main heading"
                className="contact-heading"
            />
            <div className="banner">
            <Heading
                level={3}
                text="Maria Pettersson · Fullstack Developer · Maria Pettersson · Fullstack Developer · Maria Pettersson · Fullstack Developer"
                aria-label="This is the main heading"
                className="scroll-text"
            />
            </div>
        </section>
    );
};