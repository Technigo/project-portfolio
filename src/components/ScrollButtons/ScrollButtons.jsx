import Lottie from "lottie-react";
import scrollDownAnimation from "../../animation/scroll-down.json";
import scrollUpAnimation from "../../animation/scroll-up.json";

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
    <div>
      <a onClick={handleScrollDown}>
        <Lottie animationData={scrollDownAnimation} />
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
    <div>
      <a onClick={handleScrollUp}>
        <Lottie animationData={scrollUpAnimation} />
      </a>
    </div>
  );
};
