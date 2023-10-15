import CvPic from '/CV_pic.jpg';
import ContactPic from '/CV_pic.jpg';
import './contact.css';
import { SoMeButtons } from './contactButtons';

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

            <div className='contactInfo' aria-label="Contact Information">
                <h3> Isa Robertini</h3>
                <h3> +46709170174</h3>
                <h3> robertiniisa@gmail.com</h3>
            </div>

            <SoMeButtons />

            <footer className='rollingtext-container' role="contentinfo">
                <p className="rollingtext">
                    Fullstack Developer • Isa Robertini • Fullstack Developer • Isa Robertini • Fullstack Developer • Isa Robertini • Fullstack Developer • Isa Robertini
                </p>
            </footer>
        </div>
    );
}
