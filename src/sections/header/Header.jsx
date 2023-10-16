import './Header.css'
import { Heading } from '/src/components/typography/Heading.jsx';
import { Image } from '/src/components/images/Image.jsx';
import { Paragraph } from '/src/components/typography/Paragraph.jsx';
import arrowImage from '/src/assets/social-icons/arrow.svg'

const introText = "Maria is a versatile professional at the intersection of UX design and frontend development. Her diverse background in finance, coupled with international experience, equips her with a unique perspective. She has a deep-rooted passion for technology with the mission to create seamless, user-centric digital solutions that bridge the gap between finance and innovation.";

export const Header = () => {
    return (
        <header>
            <section className='introduction'>
                <Image
                    sectionClassName={"profile-img"}
                    elementClassName={"circle-img"}
                    link={"/src/assets/profile-image.png"}
                    ImageAltText={"Profile Image of Maria"}
                />
                <section className="headings">
                    <Heading
                        level={4}
                        text="Hi, I'm Maria Pettersson"
                        aria-label="Designer greeting"
                        className="hello-text"
                    />
                    <Heading
                        level={2}
                        text="Frontend Developer & UX Designer"
                        aria-label="Frontend Developer & UX Designer"
                        className="introduction-h2"
                    />
                </section>
                <section className="intro-text">
                    <Paragraph text={introText} />
                </section>
                <section className="arrow-container">
                    <img
                        src={arrowImage}
                        alt="Animated Arrow"
                        className="arrow"
                    />
                </section>
            </section>
        </header>
    );
};
