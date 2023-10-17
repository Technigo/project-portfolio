import { useEffect, useState } from "react";

import styles from "./ScrollButton.module.scss";
export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;

      if (scrolled > 1000) {
        setVisible(true);
      } else if (scrolled <= 1000) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  return (
    <button
      onClick={scrollToTop}
      className={styles.button}
      style={{ display: visible ? "inline" : "none" }}
      aria-label="Go to Top page"
    >
      <img src="/icons/arrow.svg" alt="arrow image of scroll to top button" />
    </button>
  );
};
