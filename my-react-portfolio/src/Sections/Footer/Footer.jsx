import "./footer.css";
import { CircleImage } from "../../ReusableComponents/Images/CircleImage";
import { LargeText } from "../../ReusableComponents/Texts/LargeText";
import { SmallSubTitle } from "../../ReusableComponents/Texts/SmallSubTitle";
import LinkedInIcon from '../../assets/icon/linkedin.svg';
import GithubIcon from '../../assets/icon/github.svg';
import StackOverflowIcon from '../../assets/icon/stackoverflow.svg';
import InstagramIcon from '../../assets/icon/instagram.svg';

import evelynImage from "../../assets/cvimage/evelyn.png";






export const Footer = () => {
    return (
        <footer className="contact-container">
            <section className="contact-wrapper">
                <LargeText className="footer-heading" text="Let's talk" aria-label="This is the footer heading" />
                <CircleImage className="profile-img" src={evelynImage} alt="evelyn profile image" />

                <div className="contact-info">
                    <SmallSubTitle text={"Evelyn Del Carmen"} />
                    <a href="tel:+46704420524">
                        <SmallSubTitle text={"+46(0)704420524"} />
                    </a>
                    <a href="mailto:hey@evelyndelcarmen.com">
                        <SmallSubTitle text={"hey@evelyndelcarmen.com"} />
                    </a>
                </div>
                <div className="contact-icons" >
                    <a href="https://www.linkedin.com/in/evelyn-del-carmen-736552175/">
                        <LinkedInIcon className="icons"/>
                    </a>
                    <a href="https://github.com/EvelynDelCarmen">
                    <GithubIcon className="icons"/>
                    </a>
                    <a href="https://stackoverflowteams.com/c/technigo/users/510/?tab=profile">
                        <StackOverflowIcon className="icons" />
                    </a>
                    <a href="https://www.instagram.com/evelyn._delcarmen/">
                        <InstagramIcon className="icons" />
                    </a>
                </div>
            </section>
        </footer>
    );
};