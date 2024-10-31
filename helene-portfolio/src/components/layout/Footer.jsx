import Button from "../common/Button";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="grid-container">
        <div className="col-6">
          <h2 className="heading-xl">Let&apos;s work together!</h2>
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
    </footer>
  );
};

export default Footer;
