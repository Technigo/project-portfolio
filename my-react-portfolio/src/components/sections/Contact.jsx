import { Heading } from '../reusables/Heading'
import { ProfileImage } from '../reusables/ProfileImage'
import { SubHeading } from '../reusables/SubHeading'
import './Contact.css'

export const Contact = () => {
    return (
        <div className="contact-container">
            <div className="top-wrapper">
                <Heading
                    heading="Contact me"
                    className="contact-heading" />
                <ProfileImage
                    className="contact-img" />
            </div>
            <div className="contact-info-wrapper">
                <SubHeading
                    subHeading="Olga Lepistö"
                    className="contact-info" />
                <SubHeading
                    subHeading="+35850 3532 145"
                    className="contact-info" />
                <SubHeading
                    subHeading="olga.lepisto@gmail.com"
                    className="contact-info" />
            </div>
        </div>
    )
}

export default Contact