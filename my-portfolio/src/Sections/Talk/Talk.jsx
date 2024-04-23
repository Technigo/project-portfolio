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
        <a href="https://www.linkedin.com/in/martin-jönsson-058064163">
          <img src="./Btn - linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Martin-Joensson">
          <img src="./Btn - github.png" alt="GitHub" />
        </a>
        <a href="https://stackoverflow.com/users/24608323/martin-j%c3%b6nsson">
          <img src="./Btn - stackoverflow.png" alt="StackOverflow" />
        </a>
        <a href="https://www.instagram.com/sajkiq/">
          <img src="./Btn - instagram.png" alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

// 
