import "./Intro.css";

export const Intro = () => {
  return (
    <div className="intro-section">
      <div className="intro-container">
        <div className="intro-heading">
          <h2>Hi, I&apos;m Cornelia Dahlin!</h2>
          <h1>Frontend Developer</h1>
        </div>
        <div className="introduction">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEHAtt3SlUKOQ/profile-displayphoto-shrink_80[…]23680000&v=beta&t=XDnGbLSdq_93EceR86FOBLRNrfaxqEEuy4nsXOvdKxY"
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
        <a
          href="#tech-section"
          className="down-arrow-container"
          aria-label="Scroll to Tech Section"
        >
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
                strokeWidth="6"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};
