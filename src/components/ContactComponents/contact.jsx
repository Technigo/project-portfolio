import CvPic from '/CV_pic.jpg';
import ContactPic from '/CV_pic.jpg';
import './contact.css';
import { SoMeButtons } from './contactButtons';
import { ContactInfo } from './ContactInfo';

export const Contact = () => {
    return (
        <div className="contactContainer" role="contentinfo" aria-label="Contact Information">
            <div className='title' role="banner" aria-label="Page Title">
                <header>
                    <h1>Let's talk</h1>
                </header>
            </div>
            <div className="ContactPicture" aria-label="Contact Picture">
                <img src={ContactPic} className="CvPic" alt="Picture of Isa Robertini" />
            </div>
            <div className="cvPicture" aria-label="CV Picture">
                <img src={CvPic} className="CvPic" alt="Picture of Isa Robertini" />
            </div>

            <ContactInfo />
            <SoMeButtons />

            <footer className='rollingtext-container' role="contentinfo">
                <p className="rollingtext">
                    Fullstack Developer • Isa Robertini • Fullstack Developer • Isa Robertini • Fullstack Developer • Isa Robertini • Fullstack Developer • Isa Robertini
                </p>
            </footer>
        </div>
    );
}
