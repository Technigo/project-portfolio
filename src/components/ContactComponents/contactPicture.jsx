import CvPic from '/CV_pic.jpg';
import ContactPic from '/CV_pic.jpg';
import './contact.css';


// Show ContactPicture on smaller devices, otherwise CVpic
export const ContactPicture = () => {
    return (
        <div className="">
            <div className="ContactPicture" aria-label="Contact Picture">
                <img src={ContactPic} className="CvPic" alt="Picture of Isa Robertini" />
            </div>
            <div className="cvPicture" aria-label="CV Picture">
                <img src={CvPic} className="CvPic" alt="Picture of Isa Robertini" />
            </div>
        </div>

    )
}