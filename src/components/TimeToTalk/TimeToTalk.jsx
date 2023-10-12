import "./timetotalk.css";

export const TimeToTalk = () => {
    return (
        <section className="timetotalk-wrapper">
        <h1 className="h1-timetotalk">Let's talk</h1>
        <section className="profile-image">
        <img src="./src/assets/images/profilepic.jpg" alt="Profile picture of Jenny" className="profile-img"></img>
        </section>
        <section className="contact-information">
            <h3>Jenny Larsen</h3>
            <h3>+46(0)727402484</h3>
            <h3>jennymarikalarsen@gmail.com</h3>
        </section>
        <section className="contact-buttons">
            <a href="https://www.linkedin.com/in/jenny-larsen-b51140219/">
        <button role="link">LinkedIn</button>
             </a>
             <a href="https://github.com/jennylarsen">
        <button role="link" img src="./icons.github=default=svg">GitHub</button>
             </a>
        </section>
        </section>
    )
}