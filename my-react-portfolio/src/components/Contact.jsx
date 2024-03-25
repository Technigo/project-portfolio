import "./contact.css";

export const Contact = () => {
  return (
    <div>
      <section className="flex contact-section">
        <div className="flex contact-container">
          <h1 className="blue">Let&#39;s Talk</h1>
          <div className="flex intro-image"></div>
          <div className="flex contact-wrapper">
            <h4>Eliane Weber</h4>
            <h4>+41 78 824 64 39</h4>
            <h4>eliane.weber@yahoo.com</h4>
          </div>
          <div className="social-wrapper">
            <button>
              <img src="../linkedin.svg" alt="linkedin-icon" />
            </button>
            <button>
              <img src="../instagram.svg" alt="instagram-icon" />
            </button>
            <button>
              <img src="../github.svg" alt="github-icon" />
            </button>
          </div>
        </div>
      </section>
      <footer className="flex footer">
        <h4 id="footer-text">
          Eliane Weber • Project Manager • Eliane Weber • Project Manager •
          Eliane Weber • Project Manager
        </h4>
      </footer>
    </div>
  );
};
