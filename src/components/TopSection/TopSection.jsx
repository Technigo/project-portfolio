import "./topsection.css";

export const TopSection = () => {
  return (
    <section className="top-section">
      <section className="profile-image">
      <img src="./src/assets/images/profilepic.jpg" alt="Profile picture of Jenny" className="profile-img"></img>
      </section>
        <h3 className="h3-topsection">Hi, I'm Jenny Larsen</h3>
        <h1 className="h1-topsection">Frontend Developer with a background in communications</h1>
        <p className="p-topsection">Jenny is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.</p>
        <section className="arrow">
          <img src="./src/assets/icons/Arrow.svg" alt="An arrow going down"></img>
        </section>
      {/* Your self-introduction, social media links, and photo */}
    </section>
  );
};