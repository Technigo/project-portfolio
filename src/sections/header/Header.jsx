import './header.css'
import { Heading } from '/src/components/typography/Heading.jsx';
import { Image } from '/src/components/images/Image.jsx';
import { Paragraph } from '/src/components/typography/Paragraph.jsx';

const introText = "Maria is a versatile professional at the intersection of UX design and frontend development. Her diverse background in finance, coupled with international experience, equips her with a unique perspective. She has a deep-rooted passion for technology with the mission to create seamless, user-centric digital solutions that bridge the gap between finance and innovation.";

export const Header = () => {
    return (
        <header tabIndex="0">
            <section className='introduction'>
                <Image
                    sectionClassName={"profile-img"}
                    elementClassName={"circle-img"}
                    link={"/public/assets/profile-img-maria.jpg"}
                    ImageAltText={"Profile Image of Maria"}
                />
                <section className="headings">
                    <Heading
                        level={4}
                        text="Hi, I'm Maria Pettersson"
                        aria-label="Designer greeting"
                        className="header-h4"
                    />
                    <Heading
                        level={2}
                        text="Frontend Developer & UX Designer"
                        aria-label="Frontend Developer & UX Designer"
                        className="header-h2"
                    />
                </section>
                <section className="intro-text">
                    <Paragraph text={introText} />
                </section>
            </section>
        </header>
    );
};
