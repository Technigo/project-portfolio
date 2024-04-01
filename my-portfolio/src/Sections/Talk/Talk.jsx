import "./Talk.css";
export const Talk = () => {
  return (
    <div className="talk">
      <h2>Let&apos;s Talk</h2>
      <img
        className="profile-picture"
        src="./Martin-square.jpg"
        alt="Martin Jönsson"
      />
      <p>Martin Jönsson</p>
      <p>+46(0)73-909 11 99</p>
      <p>martin.t.joensson@gmail.com</p>
      <div className="socialmedia">
        <img src="./Btn - linkedin.png" alt="LinkedIn"></img>
        <img src="./Btn - github.png" alt="GitHub"></img>
        <img
          src="./Btn - stackoverflow.png"
          alt="StackOverflow"
        ></img>
        <img src="./Btn - instagram.png" alt="Instagram"></img>
      </div>
    </div>
  );
};
