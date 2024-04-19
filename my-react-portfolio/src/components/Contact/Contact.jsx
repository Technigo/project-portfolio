import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <h1>Let&apos;s talk</h1>
        </div>
        <div className="contact-content">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEHAtt3SlUKOQ/profile-displayphoto-shrink_800_800/0/1697014709384?e=1718236800&v=beta&t=Ikjt59Bq8qp6FoKDNJzLA2St8PS4ECaZKGMNb60D4OI"
            alt="Profile Picture"
          />
          <p>Cornelia Dahlin</p>
          <p>+46(0)766422217</p>
          <p>cornelia.dahlin@proton.me</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/cornelia-dahlin-940684295/" target="_blank">
              <i className="fab fa-linkedin" style={{ color: "#bababa" }}></i>
            </a>
            <a href="https://github.com/lunek1" target="_blank">
              <i className="fab fa-github" style={{ color: "#bababa" }}></i>
            </a>
            <a href="https://stackoverflow.com/users/23121233/cornelia" target="_blank">
              <i
                className="fab fa-stack-overflow"
                style={{ color: "#bababa" }}
              ></i>
            </a>
            <a href="https://www.instagram.com/prettycultivated/" target="_blank">
              <i className="fab fa-instagram" style={{ color: "#bababa" }}></i>
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="marquee-section">
          <div className="marquee-div">
            <div className="marquee">
              Cornelia Dahlin &bull; Frontend Developer &bull; Cornelia Dahlin
              &bull; Frontend Developer &bull; Cornelia Dahlin &bull; Frontend
              Developer &bull; Cornelia Dahlin &bull; Frontend Developer &bull;
              Cornelia Dahlin &bull; Frontend Developer &bull; Cornelia Dahlin
              &bull; Frontend Developer &bull; Cornelia Dahlin &bull; Frontend
              Developer &bull; Cornelia Dahlin &bull; Frontend Developer &bull;
              Cornelia Dahlin &bull; Frontend Developer &bull; Cornelia Dahlin
              &bull; Frontend Developer &bull;
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
