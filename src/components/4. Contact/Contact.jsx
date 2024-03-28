import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-div" style={{ backgroundColor: "var(--daffodil)"}}>
      <h1>Let's talk</h1>
      <img className="contact-image" src="src\assets\FridaForser2.png" width="200px"/>
      <div className="contact-info">
      <p><b className="contact-name">Frida Forser</b><br></br>
      +46(0)727 08 29 64<br></br>
      fridaforser@gmail.com</p>
      </div>
      <div className="socials">
      <a className="linkedin" href="https://www.linkedin.com/in/frida-forser/"><img src="src\assets\linkedin.png"></img></a>
      <a className="github" href="https://github.com/fridaforser"><img src="src\assets\github.png"></img></a>
      </div>
    </div>
  );
};