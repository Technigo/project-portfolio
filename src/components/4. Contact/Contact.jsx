import "./Contact.css";
import contactPhoto from "./assets/FridaForser2.png"
import linkedin from "./assets/linkedin.png"
import github from "./assets/github.png"

export const Contact = () => {
  return (
    <div className="contact-div" style={{ backgroundColor: "var(--daffodil)"}}>
      <h1>Let's talk</h1>
      <img className="contact-image" src={contactPhoto} width="200px"/>
      <div className="contact-info">
      <p><b className="contact-name">Frida Forser</b><br></br>
      +46(0)727 08 29 64<br></br>
      fridaforser@gmail.com</p>
      </div>
      <div className="socials">
      <a className="linkedin" href="https://www.linkedin.com/in/frida-forser/"><img src={linkedin}></img></a>
      <a className="github" href="https://github.com/fridaforser"><img src={github}></img></a>
      </div>
    </div>
  );
};