import "./Talk.css";
export const Talk = () => {
  return (
    <div className="talk">
      <h2>Let&apos;s Talk</h2>
      <img
        className="profile-picture"
        src="./lorenzo-dastoli.jpg"
        alt="Lorenzo Dastoli"
      />
      <p>Lorenzo Dastoli</p>
      <p>+46(0)70-490 42 07</p>
      <p>lorenzo.dastoli@gmail.com</p>
      <div className="socialmedia">
      <img src="./Btn - linkedin.png" alt="LinkedIn"></img>
        <img src="./Btn - github.png" alt="GitHub"></img>
        <img
          src="./Btn - stackoverflow.png"
          alt="StackOverflow"
        ></img>
      </div>
    </div>
  );
};