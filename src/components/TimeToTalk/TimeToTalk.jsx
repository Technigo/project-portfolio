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
            <a href="https://www.linkedin.com/in/jenny-larsen-b51140219/"><img src="./src/assets/icons/linkedin=default.svg" alt="Clickable button that goes to Jenny's LinkedIn"></img>
             </a>
             <a href="https://github.com/jennylarsen"><img src="./src/assets/icons/github=default.svg" alt="Clickable button that goes to Jenny's Github"></img>
             </a>
        </section>
        </section>
    )
}