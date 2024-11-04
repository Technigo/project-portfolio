import "./LetsTalk.css";
import profilePicture from "../assets/icons/Ellipse 1.png";


export const LetsTalk = () => {
    return (
        <section className="lets-talk">
            <h2 className="contact-h2">Let's Talk</h2>
            <img className="profile-picture" src={profilePicture} alt="Profile picture" />

            <div className="info">
                <p>Sara Svensson </p>
                <p> +46(0)763 12 33 45 </p>
                <p> sara.svensson@mail.com </p>

            </div>

        </section>
    )

}
