import Headlines from "../Components/Headlines";
import Profile from "../Components/Profile";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <Headlines title="Let's talk" />
      <Profile />
      <ul>
        <li>Janice Cheng</li>
        <li>+46(0)763 12 33 45</li>
        <li>jjanice.cheng@gmail.com</li>
      </ul>
      <div className="icons">
        <img src="/src/assets/Btn-linkedin.svg" />
        <img src="/src/assets/Btn-github.svg" />
        <img src="/src/assets/Btn-stackoverflow.svg" />
        <img src="/src/assets/Btn-instagram.svg" />
      </div>
    </div>
  );
};

export default Contact;
