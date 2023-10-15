import './contact.css';
import { SoMeButtons } from './contactButtons';
import { ContactInfo } from './ContactInfo';
import { ContactPicture } from './contactPicture';


//Main contact page, displays childcomponents
export const Contact = () => {
    return (
        <div className="contactContainer" role="contentinfo" aria-label="Contact Information">
            <div className='title' role="banner" aria-label="Page Title">

                <header>
                    <h1>Let's talk</h1>
                </header>
            </div>

            <ContactPicture />
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
