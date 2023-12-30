import "./Introduction.css";

export const Introduction = () => {
  const introText = `And a passionate, driven individual who is currently embarking on a transformative journey from a background in social work to a promising career in web development. My dedication to making a positive impact on people's lives and communities has led me to explore new horizons. My career transition represents more than just a change; it is a new chapter in my journey to empower others through technology. I look forward to leveraging my diverse background in social work to create web solutions that address real-world problems, enhance accessibility, and foster unity among different communities.`;

  return (
    <section className="intro-section">
      <div className="info-wrapper">
        <img
          className="profile-pic"
          src="/assets/IMG_9270.jpeg"
          alt="Profile picture of Inna"
        />
        <div className="name-headline-wrapper">
          <h3 className="my-name">Hi, I&apos;m Inna Kokic</h3>
          <h2 className="job-title">Frontend Developer</h2>
        </div>
        <p className="introText">{introText}</p>
      </div>

      <div className="arrow jump">
        <img
          className="vert-move"
          src="/assets/Arrow.svg"
          alt="down arrow icon"
        />
      </div>
    </section>
  );
};
