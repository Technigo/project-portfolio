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
                <address className='contact-info'>
                    <ul>
                        <li>Maria Pettersson</li>
                        <li>+46(0)730 30 07 66</li>
                        <li>mariateresepettersson@gmail.com</li>
                    </ul>
                </address>
            </section>
            <div className="banner">
                <Heading
                    level={3}
                    text="Maria Pettersson · Fullstack Developer · Maria Pettersson · Fullstack Developer · Maria Pettersson · Fullstack Developer"
                    aria-label="This is the main heading"
                    className="scroll-text"
                />
            </div>
        </footer>
    );
};