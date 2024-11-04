import "./css/Header.css"
import ProfileImage from "./ProfileImage";
import Contact from "./Contact"



const FooterContact = () => {
    return (
        <footer className="header-portfolio">
            <div className="header-pf-flex">
                <ProfileImage />
                <Contact />
            </div>
        </footer>
    );
};

export default FooterContact;