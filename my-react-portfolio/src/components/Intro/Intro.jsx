import "./Intro.css";

export const Intro = () => {
  return (
    <div className="intro-section">
      <div className="intro-container">
        <div className="intro-heading">
          <p>Hi, I&apos;m Cornelia Dahlin!</p>
          <h1>Frontend Developer</h1>
        </div>
        <div className="introduction">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEHAtt3SlUKOQ/profile-displayphoto-shrink_800_800/0/1697014709384?e=1718236800&v=beta&t=Ikjt59Bq8qp6FoKDNJzLA2St8PS4ECaZKGMNb60D4OI"
            alt="Profile Picture"
          />
          <p>
            Cornelia brings valuable expertise in website management, product
            handling, and customer communication from her service-oriented
            background to her new venture in web development. With strong
            interpersonal skills and a customer-centric approach, she is excited
            to craft user-friendly websites with charm and efficiency, mirroring
            her talent for creating delightful customer experiences.
          </p>
        </div>
        <a href="#tech-section" className="down-arrow-container">
          <div className="down-arrow">
            <svg
              width="25"
              height="50"
              viewBox="0 0 29 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 23.5L14.5 33M14.5 33L5 23.5M14.5 33L14.5 3"
                stroke="#000000"
                stroke-width="6"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};
