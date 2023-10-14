import { useState } from "react";
import { useInView, InView } from "react-intersection-observer";
import styles from "./ObserverWrapper.module.scss";

// function Observer({ children }) {
//   const [visible, setVisible] = useState(false);

//   const callback = (entry, observer) => {
//     if (entry.isIntersecting) {
//       setVisible(true);
//       entry.target.classList.add("fadeIn");
//       // stop observing this element
//       observer.unobserve(entry.target);
//     } else {
//       setVisible(false);
//     }
//   };
//   const observer = new IntersectionObserver(callback, options);
//   observer.observe(img);
//   const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0,
//   };

//   return (
//     <InView onChange={(inView, entry) => console.log("Inview:", inView, entry.target)}>
//       {children}
//     </InView>
//   );
// }

// import { InView } from "react-intersection-observer";

export const ObserverWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref] = useInView({
    /* Optional options */
    threshold: 0,
  });

  function handleScroll(isView, entry) {
    if (isView) setIsVisible(true);
    else setIsVisible(false);
  }
  return (
    <InView
      as="div"
      onChange={(inView, entry) => handleScroll(inView, entry)}
      className={`${styles.wrapper} ${isVisible ? [styles.visible] : ""}`}
    >
      {children}
    </InView>
  );
};
