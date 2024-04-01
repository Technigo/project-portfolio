import Lottie from "lottie-react";
import scrollDownAnimation from "../../animation/scroll-down.json";
import scrollUpAnimation from "../../animation/scroll-up.json";
import PropTypes from "prop-types";
import styles from "./ScrollButtons.module.css";

export const ScrollDown = ({ scrollTo }) => {
  const handleScrollDown = () => {
    const scrollToElement = document.getElementById(scrollTo);

    if (scrollToElement) {
      scrollToElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.scrollDownContainer}>
      <a onClick={handleScrollDown}>
        <Lottie
          animationData={scrollDownAnimation}
          className={styles.scrollDown}
        />
      </a>
    </div>
  );
};

export const ScrollUp = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.scrollUpContainer}>
      <a onClick={handleScrollUp}>
        <Lottie
          animationData={scrollUpAnimation}
          className={styles.scrollUp}
        />
      </a>
    </div>
  );
};

ScrollDown.propTypes = {
  scrollTo: PropTypes.string.isRequired,
};