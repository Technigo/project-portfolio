import Lottie from "lottie-react";
import animation from "../../animation/scroll-up.json";

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
        <Lottie animationData={animation} />
      </a>
    </div>
  );
};
