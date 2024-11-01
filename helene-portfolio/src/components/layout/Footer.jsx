import Button from "../common/Button";
import Icon from "../common/Icon";
import { H2 } from "../common/Typography";
import BackToTop from "../../assets/icons/back-to-top.svg?react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a className="back-to-top-link" href="#main">
        <BackToTop aria-label="Go back to the top" className="back-to-top" />
      </a>
      <div className="grid-container">
        <div className="col-6">
          <H2 className="footer__title heading-xl">
            Let&apos;s work together!
          </H2>
          <div className="button-group">
            <Button
              href="mailto:hej@helenewestrin.se"
              variant="inverted"
              size="large"
            >
              hej@helenewestrin.se
            </Button>
            <Button href="tel:+46708393230" variant="inverted" size="large">
              070 - 839 32 30
            </Button>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="grid-container">
          <div className="footer__bottom__content col-12 align-center justify-space-between">
            <div>
              <p className="text-medium">2024 © Helene Westrin</p>
            </div>
            <div>
              <p className="footer__links text-medium">
                <a
                  className="align-center"
                  href="#"
                  aria-label="Visit my LinkedIn profile"
                >
                  <Icon iconName="linkedIn" /> LinkedIn
                </a>
                <a
                  className="align-center"
                  href="#"
                  aria-label="Visit my GitHub page"
                >
                  <Icon iconName="gitHub" /> GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
