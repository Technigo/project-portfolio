import './header.css'
import { Heading } from '/src/components/typography/Heading.jsx';
import { Image } from '/src/components/images/Image.jsx';
import { Paragraph } from '/src/components/typography/Paragraph.jsx';

const introText = "I am a Full Stack Developer with a flair for UX design and a background in finance and people management. My goal is to keep on having fun while I’m learning new languages and frameworks to create great products for the world. I thrive in a roles where I can combine my management and problem solving skills.";

export const Header = () => {
    return (
        <header tabIndex="0">
            <section className='introduction'>
                <Image
                    sectionClassName={"profile-img"}
                    elementClassName={"circle-img"}
                    link={"/assets/profile-img-maria.JPG"}
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
                        text="Full Stack Developer"
                        aria-label="Full Stack Developer"
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
