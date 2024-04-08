import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <h1>Let&apos;s talk</h1>
        </div>
        <div className="contact-content">
          <img src="https://media.licdn.com/dms/image/D4D03AQEHAtt3SlUKOQ/profile-displayphoto-shrink_800_800/0/1697014709384?e=1718236800&v=beta&t=Ikjt59Bq8qp6FoKDNJzLA2St8PS4ECaZKGMNb60D4OI" alt="Profile Picture" />
          <p>Cornelia Dahlin</p>
          <p>+46(0)766422217</p>
          <p>cornelia.dahlin@proton.me</p>
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
