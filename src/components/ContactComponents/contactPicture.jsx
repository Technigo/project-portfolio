import CvPic from '/CV_pic.png';
import ContactPic from '/CV_pic.png';
import './contact.css';


// Show ContactPicture on smaller devices, otherwise CVpic
export const ContactPicture = () => {
    return (
        <div className="">
            <div className="ContactPicture">
                <img src={ContactPic} className="CvPic" alt="CV Picture of Isa Robertini" />
            </div>
            <div className="cvPicture">
                <img src={CvPic} className="CvPic" alt="CV Picture of Isa Robertini" />
            </div>
        </div>

    )
}