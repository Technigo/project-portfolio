import { useEffect } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (ref, animationOptions, scrollTriggerOptions = null) => {
  useEffect(() => {
    if (ref.current) {
      const animation = gsap.to(ref.current, {
        ...animationOptions,
        scrollTrigger: scrollTriggerOptions
          ? {
              trigger: ref.current,
              ...scrollTriggerOptions,
            }
          : null,
      });

      // Clean up function to kill animations and ScrollTriggers when component unmounts or ref changes
      return () => {
        if (scrollTriggerOptions) {
          animation.scrollTrigger.kill();
        }
        animation.kill();
      };
    }
  }, [ref, animationOptions, scrollTriggerOptions]); // Include scrollTriggerOptions in dependencies array
};
